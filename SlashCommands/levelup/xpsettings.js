const Discord = require("discord.js");
const SQlite = require("better-sqlite3");
const sql = new SQlite('./mainDB.sqlite');
 const {  CommandInteraction, Message, MessageActionRow, MessageButton, MessageEmbed, Formatters, MessageAttachment } = require('discord.js');
  const moment = require("moment")

  module.exports = {
    name: "xpsettings",
    description: "❌ | advanced xp system",
    userPermissions: ["MANAGE_MESSAGES"], 
        options: [
          {
            name: "xp",
            description: "xp settings",
            type: "STRING",
            required: true,
          },
          {
            name: "seconds",
            description: "1",
            type: "STRING",
            required: true,
          },
        ],

  /**
    * @param {CommandInteraction} interaction
    */
 run: async (client, interaction, args) => {

    const GuildMember = interaction.member;
        if(!GuildMember.permissions.has("MANAGE_GUILD")) return interaction.followUp({ content: "You do not have permissions to do that!", })
 const xp = interaction.options.getString('xp');
    const seconds = interaction.options.getString('seconds');
        if(!args.length) 
            return interaction.reply(`Please provide a vaild argument! \`xpsettings (xp) (seconds)\``);


        let checkIf = sql.prepare("SELECT levelUpMessage FROM settings WHERE guild = ?").get(interaction.guild.id);
        if(checkIf) {
            sql.prepare(`UPDATE settings SET customXP = ? WHERE guild = ?`).run(parseInt(xp), interaction.guild.id);
            sql.prepare(`UPDATE settings SET customCooldown = ? WHERE guild = ?`).run(parseInt(seconds) * 1000, interaction.guild.id);
        } else {
            sql.prepare(`INSERT OR REPLACE INTO settings (guild, levelUpMessage, customXP, customCooldown) VALUES (?,?,?,?)`).run(interaction.guild.id, `**Congratulations** {member}! You have now leveled up to **level {level}**`, parseInt(xp), parseInt(seconds) * 1000);
        }

        return interaction.followUp({content:`User from now will gain 1XP - ${parseInt(xp)}XP/${parseInt(seconds)}s`});
    }
}