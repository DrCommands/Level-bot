const Discord = require("discord.js");
const SQlite = require("better-sqlite3");
const sql = new SQlite('./mainDB.sqlite');
const { Message, MessageActionRow, MessageButton, MessageEmbed, Formatters, MessageAttachment } = require('discord.js');

  module.exports = {
    name: "role-level-remove",
  category: "level",
  description: "delete level role",
  options: [
    {
       name: 'level',
       description: 'level to remove ',
       type: 3,
       required: true,

        },
  ],
 run: async (client, interaction, args) => {
       const GuildMember = interaction.member;
        if(!GuildMember.permissions.has("MANAGE_GUILD")) return interaction.reply({ content: "You do not have permissions to do that!", })

        if(!args.length) {
            let embed = new MessageEmbed()
            .setTitle(`Leveling Roles Setup`)
            .setDescription(`Rewards role when user leveled up to a certain level`)
            .addFields({ name: `role-level add <level> <@role>`, value: `Sets a role to be given to user when they leveled up to certain level.`})
            .addFields({ name: `role-level remove <level>`, value: `Removes the role set at the specified level.`})
            .addFields({ name: `role-level show`, value: `Shows all roles set to levels.`})
            .setColor("RANDOM");

        return  interaction.reply({embeds : [embed]});
        }
            const levelArgs = interaction.options.getString('level');


                    client.deleteLevel = sql.prepare(`DELETE FROM roles WHERE guildID = ? AND level = ?`)
                    client.deleteLevel.run(interaction.guild.id, levelArgs);
                    let embeds = new MessageEmbed()
                    .setTitle(`Successfully set role!`)
                    .setDescription(`Role rewards for level ${levelArgs} has been removed.`)
                    .setColor("RANDOM");
                     return interaction.followUp({embeds : [embeds]});
                }
            }

