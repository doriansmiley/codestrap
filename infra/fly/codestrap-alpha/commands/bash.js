const { SlashCommandBuilder } = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");
const debug = require('debug')('codestrap-codestrap-gpt-bot:index');
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bash-help')
        .addStringOption(option => option.setName('question').setDescription('How do I print the contents of a directory?').setRequired(true))
        .setDescription('Helps you learn bash programming with Open AI GPT 3'),
    async execute(interaction) {
        let prompt = '# I need help with bash programming';
        const question = interaction.options.getString('question');
        debug(`question: ${question}`);
        debug(`interaction.user.bot: ${interaction.user.bot}`);
        if (interaction.user.bot) return;
        prompt += `\nYou: ${question}\n`;
        debug(`calling open API with prompt: ${prompt}`);
        const gptResponse = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: prompt,
            max_tokens: 60,
            temperature: 0.3,
            top_p: 0.3,
            presence_penalty: 0,
            frequency_penalty: 0.5,
        });
        //await interaction.reply({ content: gptResponse.data.choices[0].text.substring(5), ephemeral: true });
        debug(`response received: ${gptResponse.data.choices[0].text }`);
        await interaction.reply({ content: gptResponse.data.choices[0].text });
        prompt += `${gptResponse.data.choices[0].text}\n`;
    },
};
