const { SlashCommandBuilder } = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");
const debug = require('debug')('codestrap-codestrap-gpt-bot:index');
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('karpism')
        .addStringOption(option => option.setName('quote').setDescription('How do I print the contents of a directory?').setRequired(true))
        .setDescription('Translates Alex Karp into language a five-year-old can understand.'),
    async execute(interaction) {
        let prompt = 'I need help understanding what Alex Karp, the CEO of Palantir, is saying. He is an expert in german philosophy and often quotes Hegel. Can you explain what he said below as if I was a 5-year-old:';
        const question = interaction.options.getString('quote');
        debug(`question: ${question}`);
        debug(`interaction.user.bot: ${interaction.user.bot}`);
        if (interaction.user.bot) return;
        await interaction.deferReply();
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
        await interaction.editReply({ content: gptResponse.data.choices[0].text });
        prompt += `${gptResponse.data.choices[0].text}\n`;
    },
};
