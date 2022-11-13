require('dotenv').config();
const express = require("express");
const router = express.Router({});
const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, Events, Collection } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages] });
const { Configuration, OpenAIApi } = require("openai");
const debug = require('debug')('codestrap-codestrap-gpt-bot:index');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
let prompt = '';

const app = express();

router.get('/', async (_req, res, _next) => {

    const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    };
    try {
        res.send(healthcheck);
    } catch (error) {
        healthcheck.message = error;
        res.status(503).send();
    }
});

app.use('/healthcheck', router);
app.use('/', router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log("Server has started at port " + PORT));

debug(`codestrap-codestrap-gpt-bot starting`);

client.once(Events.ClientReady, c => {
    debug(`codestrap-codestrap-gpt-bot started: ${c.user.tag}`);
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        debug(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;
    debug(interaction);

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        debug(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        debug(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.login(process.env.BOT_TOKEN);

