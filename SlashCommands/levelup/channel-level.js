const Discord = require("discord.js");
const SQlite = require("better-sqlite3");
const sql = new SQlite('./mainDB.sqlite');
 const { Client, CommandInteraction, Message, MessageActionRow, MessageButton, MessageEmbed, Formatters, MessageAttachment } = require('discord.js');

  module.exports = {
    name: "set-channel-levelup",
  category: "levelup",
  description: "set notifications levelup",
  options: [
    {
        name: 'channel',
        description: "Select Channel",
        type: 'CHANNEL',
        required: true
    },
  ],
  run: async (client, interaction, args) => {


       const GuildMember = interaction.member;
        if(!GuildMember.permissions.has("MANAGE_GUILD")) return interaction.followUp({ content: "You do not have permissions to do that!", })
        if(!args.length) 
            return interaction.followUp(`Require arguments: \`Default\`, \`Channel ID or Mention Channel\`\n>Default: Send message in the channel user leveled up in.\n>Channel ID or Mention Channel: Send message in the specific channel.`);

        if(args[0].toLowerCase() == "default"){   
            sql.prepare("INSERT OR REPLACE INTO channel (guild, channel) VALUES (?, ?);").run(interaction.guild.id, "Default");
            return interaction.followUp({ content:`Level Up Channel has been set to Default Settings`});
        } else if(channel) {
            const permissionFlags = channel.permissionsFor(interaction.guild.me);
            if(!permissionFlags.has("SEND_MESSAGES") || !permissionFlags.has("VIEW_CHANNEL") )
            {
                return interaction.followUp(`I don't have permission to send message in or view ${channel}!`)
            } else
                sql.prepare("INSERT OR REPLACE INTO channel (guild, channel) VALUES (?, ?);").run(interaction.guild.id, channel.id);
                return interaction.followUp({ content:`Level Up Channel has been set to ${channel}`});
        } else {
            return interaction.followUp({ content:`Require arguments: \`Default\`, \`Channel ID or Mention Channel\`\n>Default: Send message in the channel user leveled up in.\n>Channel ID or Mention Channel: Send message in the specific channel.`});
        }
    }
}
