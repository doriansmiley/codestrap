const { App, SocketModeReceiver, LogLevel } = require("@slack/bolt");
require("dotenv").config();
const debug = require('debug')('codestrap-slack-recorder-bot:index');

const port = process.env.PORT || 4000;

const app = new App({
  token: process.env.SLACK_BOT_TOKEN, // disable this if enabling OAuth in socketModeReceiver
  logLevel: LogLevel.DEBUG,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: LogLevel.DEBUG,
});

const apiEndpoint = process.env.FOUNDRY_CREATE_MESSAGE_ACTION_ENDPOINT;  // API endpoint

function convertSlackTimestampToUTC (messageTs) {
  // Parse the `message.ts` string into a floating-point number
  const unixTimestamp = parseFloat(messageTs);

  // Convert the Unix timestamp (in seconds) to milliseconds for JavaScript
  const date = new Date(unixTimestamp * 1000);

  // Return the ISO string in UTC
  return date.toISOString();
};

debug("Setting up bot with ingress at:", apiEndpoint);

// Listen to all messages in the channel
app.message(async ({ message, context, say }) => {
  try {
     // Ignore bot messages
    if (message.subtype === "bot_message") return;

    const messageData = {
      channel: message.channel,
      user: message.user,
      text: message.text,
      timestamp: convertSlackTimestampToUTC(message.ts),
    };

    debug("Received message:", messageData);

    // Call the external API
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.FOUNDRY_TOKEN}`,
      },
      body: JSON.stringify({
        parameters: messageData,
        options: {
            returnEdits: "ALL"
        }
      }),
    });

    const responseJson = await response.json()

    debug("Message response:", responseJson);

    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }

    debug("Message recorded successfully:", responseJson);
  } catch (error) {
    debug("Error handling message:", error);
  }
});

(async () => {
  await app.start(port);
  debug("⚡️ Bolt app is running!");
})();
