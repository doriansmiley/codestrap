const { SlashCommandBuilder } = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");
const debug = require('debug')('codestrap-codestrap-gpt-bot:index');
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('memes')
        .addStringOption(option => option.setName('doing-what').setDescription('What should the frustrated PLTR investor be doing?').setRequired(true))
        .setDescription('Creates Palantir investor memes.'),
    async execute(interaction) {
        try{
            let prompt = 'A cartoon version of a frustrated investor ';
            const doingWhat = interaction.options.getString('doing-what');
            debug(`doingWhat: ${doingWhat}`);
            debug(`interaction.user.bot: ${interaction.user.bot}`);
            if (interaction.user.bot) return;
            await interaction.deferReply();
            prompt += `\nYou: ${doingWhat}\n`;
            debug(`calling open API with prompt: ${prompt}`);
            const gptResponse = await openai.createImage({
                prompt: prompt,
                n: 4,
                size: '512x512',
            });
            debug(`response received: ${gptResponse.data.data}`);
            let response = 'Images: \n';
            gptResponse.data.data.forEach((result) => response += `${result.url}\n`);
            debug(`images: ${response}`);
            await interaction.editReply({ content: response});
        } catch (e){
            debug(`error: ${e.message}\n${e.stack}`);
        }
    },
};
