FROM node:16-slim as platform

MAINTAINER Dorian Smiley, dsmiley@codestrap.me

FROM platform as puppeteer

WORKDIR /usr/app

# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
# installs, work.
RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y xvfb \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# If running Docker >= 1.13.0 use docker run's --init arg to reap zombie processes, otherwise
# uncomment the following lines to have `dumb-init` as PID 1
ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.2/dumb-init_1.2.2_x86_64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init
ENTRYPOINT ["dumb-init", "--"]

FROM puppeteer as install
# Uncomment to skip the chromium download when installing puppeteer. If you do,
# you'll need to launch puppeteer with:
#     browser.launch({executablePath: 'google-chrome-stable'})
# ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
COPY package.json .
# COPY package-lock.json .
COPY index.html .
COPY favicon.ico .
COPY index.js .
COPY ./css ./css
COPY ./img ./img
COPY ./program ./program
COPY server.js .
COPY ./ssr ./ssr

# Install puppeteer so it's available in the container.
RUN npm install \
    # Add user so we don't need --no-sandbox.
    # same layer as npm install to keep re-chowned files from using up several hundred MBs more space
    && groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /usr/app/node_modules

FROM install as setup

# allow the pptruser write permissions to the container
RUN chown -R pptruser:pptruser /usr/app
RUN chmod 755 /usr/app

# Run everything after as non-privileged user.
USER pptruser

ENV PORT=80
ENV DISPLAY=1.0
ENV DEBUG='codestrap-website:*'

EXPOSE 3000
EXPOSE 80
EXPOSE 443

CMD ["npm", "start"]
