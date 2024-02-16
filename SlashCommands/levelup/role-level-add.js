const Discord = require("discord.js");
const SQlite = require("better-sqlite3");
const sql = new SQlite('./mainDB.sqlite');
const { Message, MessageActionRow, MessageButton, MessageEmbed, Formatters, MessageAttachment } = require('discord.js');

  module.exports = {
    name: "role-level",
  category: "level",
  description: "level reword",
  options: [
    {
       name: 'level',
       description: 'level to deposit ',
       type: 3,
       required: true,

        },
    {
      name: "role",
      type: "ROLE",
      description: "The role you want to get the info of!",
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

         const role = interaction.options.getRole('role');
        client.getRole = sql.prepare("SELECT * FROM roles WHERE guildID = ? AND roleID = ? AND level = ?");
        client.setRole = sql.prepare("INSERT OR REPLACE INTO roles (guildID, roleID, level) VALUES (@guildID, @roleID, @level);");

                let Role = client.getRole.get(interaction.guild.id, role.id, levelArgs) 
                if(!Role) {
                    Role = {
                    guildID: interaction.guild.id,
                    roleID: role.id,
                    level: levelArgs
                    }
                    client.setRole.run(Role)
                    let embed1 = new MessageEmbed()
                    .setTitle(`Successfully set role!`)
                    .setDescription(`${role} has been set for level ${levelArgs}`)
                    .setColor("RANDOM");
                     return  interaction.followUp({embeds : [embed1]});
                 } else if(Role){
                    client.deleteLevel = sql.prepare(`DELETE FROM roles WHERE guildID = ? AND roleID = ? AND level = ?`)
                    client.deleteLevel.run(interaction.guild.id, role.id, levelArgs);
                    client.updateLevel = sql.prepare(`INSERT INTO roles(guildID, roleID, level) VALUES(?,?,?)`)
                    client.updateLevel.run(interaction.guild.id, role.id, levelArgs)
                     let embeds = new MessageEmbed()
                     .setTitle(`Successfully set role!`)
                     .setDescription(`${role} has been updated for level ${levelArgs}`)
                     .setColor("RANDOM");
                      return interaction.followUp({embeds : [embeds]});
                 }
                }
            }


