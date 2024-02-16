const SQLite = require("better-sqlite3");
 const { Client, CommandInteraction, Message, MessageActionRow, MessageButton, MessageEmbed, Formatters, MessageAttachment } = require('discord.js');
const sql = new SQLite('./mainDB.sqlite')
const { profileImage } = require('discord-arts');
const db = require("quick.db")



  module.exports = {
    name: "rank",
  category: "level",
  description: "Leveling",
  options: [
    {
      name: 'target',
      description: 'the targeted user',
      type: 6,
    },
         ],
  run: async (client, interaction, args) => {
        const user = interaction.options.getMember('target') || interaction.member;
    if (!interaction.guild.members.cache.get(user.id)) return interaction.followUp("User is not in this server.")
    if (user.user.bot) return;

        client.getScore = sql.prepare("SELECT * FROM levels WHERE user = ? AND guild = ?");
        client.setScore = sql.prepare("INSERT OR REPLACE INTO levels (id, user, guild, xp, level, totalXP) VALUES (@id, @user, @guild, @xp, @level, @totalXP);");
        const top10 = sql.prepare("SELECT * FROM levels WHERE guild = ? ORDER BY totalXP").all(interaction.guild.id);
        let score = client.getScore.get(user.id, interaction.guild.id);
        if (!score) {
        return interaction.followUp(`This user does not have an xp yet!`)
        }
        const levelInfo = score.level
        const nextXP = levelInfo * 2 * 250 + 250
        const xpInfo = score.xp;
        const totalXP = score.totalXP
        let rank = top10.sort((a, b) => {
        return b.totalXP - a.totalXP
        });
        let ranking = rank.map(x => x.totalXP).indexOf(totalXP) + 1
         let bg = db.fetch(`url_${interaction.user.id}`)
    if (bg === null) bg = ''
         const color =user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor
      const buffer = await profileImage(user.id, {
  badgesFrame: true,
        customBackground: bg,
  rankData: { 
    currentXp: xpInfo,
    requiredXp: nextXP,
    rank: ranking,
    level: levelInfo,
    barColor: color
  }
});



           const attachment = new MessageAttachment(buffer,'profile.png');
            interaction.followUp({ files: [attachment]});

    }

}