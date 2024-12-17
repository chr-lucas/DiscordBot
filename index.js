const { Client,Events,GatewayIntentBits,SlashCommandBuilder } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.once(Events.ClientReady, c => {
  console.log(`Logged in as ${c.user.tag}`);

  const scPing = new SlashCommandBuilder()
      .setName('ping')
      .setDescription('Replies with "Pong!"');

      const ping = scPing.toJSON();
      client.application.commands.create(ping, "126136429783941120");
});

client.on(Events.InteractionCreate, interaction =>
  {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName === "ping")
    {
      const reply = `I'm here! Jeez, stop pinging me, ${interaction.user.username}!`
      interaction.reply(reply);
    }
  }
)

client.login(token);