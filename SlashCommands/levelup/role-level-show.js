const Discord = require("discord.js");
const SQlite = require("better-sqlite3");
const sql = new SQlite('./mainDB.sqlite');
const { Message, MessageActionRow, MessageButton, MessageEmbed, Formatters, MessageAttachment } = require('discord.js');

  module.exports = {
    name: "role-level-show",
  category: "level",
  description: "show you role level",

 run: async (client, interaction, args) => {
       const GuildMember = interaction.member;
        if(!GuildMember.permissions.has("MANAGE_GUILD")) return interaction.followUp({ content: "You do not have permissions to do that!", })

                   const allRoles = sql.prepare(`SELECT * FROM roles WHERE guildID = ?`).all(interaction.guild.id)
            if(!allRoles) {
                return interaction.followUp(`There is no roles set!`)
            } else {
                let embed = new MessageEmbed()
                .setTitle(`${interaction.guild.name} Roles Level`)
                .setDescription(`\`help\` for more information`)
                .setColor("RANDOM");
                for(const data of allRoles) {
                    let LevelSet = data.level;
                    let RolesSet = data.roleID;
                 embed.addFields({ name: `\u200b`, value: `**Level ${LevelSet}**: <@&${RolesSet}>` }); 
                }
                return interaction.followUp({embeds : [embed]});
            }
        }
  }