const Discord = require("discord.js");
 const { Client, CommandInteraction, Message, MessageActionRow, MessageButton, MessageEmbed, Formatters, MessageAttachment } = require('discord.js');
const SQlite = require("better-sqlite3");
const sql = new SQlite('./mainDB.sqlite');


module.exports = {
    name: "add-level",
  category: "level",
  description: "give-level",
  options: [
    {
      name: 'target',
      description: 'the targeted user',
      type: 6,
      required: true,
    },
            {
            name: 'level',
            description: 'level to deposit ',
            type: 3,
            required: true,
        },
  ],
  run: async (client, interaction, args) => {

        const user = interaction.options.getMember('target') || interaction.member;
      const levelArgs = interaction.options.getString('level');
    if (!interaction.guild.members.cache.get(user.id)) return interaction.followUp("User is not in this server.")
    if (user.user.bot) return;

        const GuildMember = interaction.member;
        if(!GuildMember.permissions.has("MANAGE_GUILD")) return interaction.followUp({ content: "You do not have permissions to do that!", })



        client.getScore = sql.prepare("SELECT * FROM levels WHERE user = ? AND guild = ?");
        client.setScore = sql.prepare("INSERT OR REPLACE INTO levels (id, user, guild, xp, level, totalXP) VALUES (@id, @user, @guild, @xp, @level, @totalXP);");
        if(!user) {
            return interaction.followUp(`Please mention an user!`)
        } else {
            if(isNaN(levelArgs) || levelArgs < 1) {
                return interaction.followUp(`Please provide a valid number!`)
            } else {
                let score = client.getScore.get(user.id, interaction.guild.id);
                if(!score) {
                    score = {
                        id: `${interaction.guild.id}-${user.id}`,
                        user: user.id,
                        guild: interaction.guild.id,
                        xp: 0,
                        level: 0,
                        totalXP: 0
                    }
                }
                score.level += levelArgs
                const newTotalXP = levelArgs - 1
                let embed = new MessageEmbed()
                .setTitle(`Success!`)
                .setDescription(`Successfully added ${levelArgs} level to ${user.toString()}!`)
                .setColor("RANDOM");
                score.totalXP += newTotalXP * 2 * 250 + 250
                client.setScore.run(score)
                return interaction.followUp({embeds :[embed]})
            }
        }
    }
}