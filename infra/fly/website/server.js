const express = require('express');
const path = require('path');
const puppeteer = require('puppeteer');
const app = express();
const cors = require('cors');
const port = process.argv[2] || 3000;
const dockerPort = process.argv[3] || 3000;
const ssr = require('./ssr/ssr');
const debug = require('debug');
const logger = {
    info: debug('codestrap-website:log'),
    error: debug('codestrap-website:error'),
}

const corsOptions = {
    origin: [
        `http://localhost`,
        `http://localhost:${port}`,
        `http://localhost:${dockerPort}`,
    ],
    credentials: true
};
let browserWSEndpoint = null;


app.use(cors(corsOptions));

app.get('/ssr', async (req, res, next) => {
    // this method simulates a custom path for a web application
    let data;
    let publish;
    const args = puppeteer.defaultArgs();
    // IMPORTANT: you can't render shadow DOM without this flag
    // getInnerHTML will be undefined without it
    args.push('--enable-experimental-web-platform-features');
    // This will write shared memory files into /tmp instead of /dev/shm. See crbug.com/736452 for more details.
    // See https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#tips
    args.push('--disable-dev-shm-usage');
    // TODO remove --no-sandbox and --disable-setuid-sandbox if there is a better solution from fly
    // TODO see https://community.fly.io/t/passing-params-to-docker-run/2016/19 for details
    args.push('--no-sandbox');
    args.push('--disable-setuid-sandbox');
    if (!browserWSEndpoint) {
        const browser = await puppeteer.launch({
            args
        });
        browserWSEndpoint = await browser.wsEndpoint();
    }
    // extract the path https://regex101.com/r/bVnMRC/2
    // IMPORTANT requires trailing slash
    const path = req.query.url.match(/(?<=(http\:\/\/|https\:\/\/)[a-zA-Z.:\-0-9]+)\/[a-zA-Z.:\-0-9\/]+\//) || '/index.js';
    logger.info(`path is: ${path}\n`);
    const libPath = (path[0].length > 1 ) ? path[0].substr(0,path[0].length-1) : path;
    logger.info(`libPath is ${libPath}`);
    // if there is a path try to load a SSR data loading function. We assume it will be found
    // at path
    try {
        const serverFunctions = require(`.${libPath}`);
        data = serverFunctions.data;
        publish = serverFunctions.publish;
    } catch (e) {
        logger.info('no server function found');
    }

    const {html, ttRenderMs} = await ssr({
        url: req.query.url,
        browserWSEndpoint,
        selector: req.query.selector,
        data,
        publish,
        path,
        clearCache: req.query.clearCache,
    });
    // Add Server-Timing! See https://w3c.github.io/server-timing/.
    res.set('Server-Timing', `Prerender;dur=${ttRenderMs};desc="Headless render time (ms)"`);
    return res.status(200).send(html); // Serve prerendered page as response.
});

app.use('/', express.static(path.join(__dirname,'.')));

const server = app.listen(port, () => logger.info(`Static server listening on port ${port}!`));

process.on('SIGINT',function () {
    logger.info('Closing ssr-cluster');
    server.close();
});
