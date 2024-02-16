const Discord = require("discord.js");
const SQLite = require("better-sqlite3");
const sql = new SQLite('./mainDB.sqlite');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: "leaderboard",
  category: "level",
  description: "Check top 10 users with the most xp and the highest level",
  options: [
    {
      name: 'page',
      description: 'Page to display',
      type: 3,
      required: false,
    },
  ],
  run: async (client, interaction, page) => {
    let currentPage = parseInt(page || interaction.options.getString('page')) || 1;
    const top10 = sql.prepare("SELECT * FROM levels WHERE guild = ? ORDER BY totalXP DESC;").all(interaction.guild.id);
    const itemsPerPage = 10;
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const usersToShow = top10.slice(startIdx, endIdx);
    const embed = new MessageEmbed()
       .setAuthor(`${interaction.guild.name} Leaderboard`, interaction.guild.iconURL() || null)
    .setTimestamp()
    .setColor("RANDOM");
    if (usersToShow.length < 1) {
      embed.setDescription(`There are no users in the leaderboard!`);
    } else {
      const leftColumn = [];
      const rightColumn = [];

      usersToShow.forEach((user, index) => {
        const rank = startIdx + index + 1;
        const nextXP = user.level * 2 * 250 + 250;
        const userTag = interaction.client.users.cache.get(user.user)?.tag || `<@!${user.user}>`;
        const field = `#${rank}. ${userTag}\n> **Level**: \`${user.level}\`\n> **XP**: \`${user.xp} / ${nextXP}\``;

        if (index < 5) {
          leftColumn.push(field);
        } else {
          rightColumn.push(field);
        }
      });

      for (let i = 0; i < Math.max(leftColumn.length, rightColumn.length); i++) {
        const leftEntry = leftColumn[i] || '\u200B';
        const rightEntry = rightColumn[i] || '\u200B';

        embed.addFields(
          { name: '\u200B', value: leftEntry, inline: true },
          { name: '\u200B', value: rightEntry, inline: true }
        );
      }
    }

    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel('Start')
        .setStyle('PRIMARY')
        .setCustomId('start_button'),
      new MessageButton()
        .setLabel('Previous')
        .setStyle('PRIMARY')
        .setCustomId('previous_button'),
      new MessageButton()
        .setStyle('SECONDARY')
        .setCustomId('page')
        .setLabel(`${currentPage}/${Math.ceil(top10.length / itemsPerPage)}`)
        .setDisabled(true),
      new MessageButton()
        .setLabel('Next')
        .setStyle('PRIMARY')
        .setCustomId('next_button'),
      new MessageButton()
        .setLabel('End')
        .setStyle('PRIMARY')
        .setCustomId('end_button')
    );

    await interaction.followUp({ embeds: [embed], components: [row] });

    const filter = (i) => i.user.id === interaction.user.id;
    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 120000 });

    collector.on('collect', async (interaction) => {
      if (interaction.customId === 'previous_button') {
        currentPage--;
      } else if (interaction.customId === 'next_button') {
        currentPage++;
      } else if (interaction.customId === 'start_button') {
        currentPage = 1;
      } else if (interaction.customId === 'end_button') {
        currentPage = Math.ceil(top10.length / itemsPerPage);
      }

      const startIdx = (currentPage - 1) * itemsPerPage;
      const endIdx = startIdx + itemsPerPage;
      const usersToShow = top10.slice(startIdx, endIdx);
      const embed = new MessageEmbed()
         .setAuthor(`${interaction.guild.name} Leaderboard`, interaction.guild.iconURL() || null)
      .setTimestamp()
      .setColor("RANDOM");

      if (usersToShow.length < 1) {
        embed.setDescription(`There are no users in the leaderboard!`);
      } else {
        const leftColumn = [];
        const rightColumn = [];

        usersToShow.forEach((user, index) => {
          const rank = startIdx + index + 1;
          const nextXP = user.level * 2 * 250 + 250;
          const userTag = interaction.client.users.cache.get(user.user)?.tag || `<@!${user.user}>`;
          const field = `#${rank}. ${userTag}\n> **Level**: \`${user.level}\`\n> **XP**: \`${user.xp} / ${nextXP}\``;

          if (index < 5) {
            leftColumn.push(field);
          } else {
            rightColumn.push(field);
          }
        });

        for (let i = 0; i < Math.max(leftColumn.length, rightColumn.length); i++) {
          const leftEntry = leftColumn[i] || '\u200B';
          const rightEntry = rightColumn[i] || '\u200B';

          embed.addFields(
            { name: '\u200B', value: leftEntry, inline: true },
            { name: '\u200B', value: rightEntry, inline: true }
          );
        }
      }



      const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel('Start')
          .setStyle('PRIMARY')
          .setCustomId('start_button'),
        new MessageButton()
          .setLabel('Previous')
          .setStyle('PRIMARY')
          .setCustomId('previous_button'),
        new MessageButton()
          .setStyle('SECONDARY')
          .setCustomId('page')
          .setLabel(`${currentPage}/${Math.ceil(top10.length / itemsPerPage)}`)
          .setDisabled(true),
        new MessageButton()
          .setLabel('Next')
          .setStyle('PRIMARY')
          .setCustomId('next_button'),
        new MessageButton()
          .setLabel('End')
          .setStyle('PRIMARY')
          .setCustomId('end_button')
      );
      await interaction.update({ embeds: [embed], components: [row] });
    });

    collector.on('end', async () => {
      const row = new MessageActionRow().addComponents(
        new MessageButton()
        .setLabel('Start')
        .setStyle('PRIMARY')
        .setCustomId('start_button')
        .setDisabled(true),
        new MessageButton()
          .setLabel('Previous')
          .setStyle('PRIMARY')
          .setDisabled(true)
          .setCustomId('previous_button'),
        new MessageButton()
          .setStyle('SECONDARY')
          .setCustomId('page')
          .setLabel(`${currentPage}/${Math.ceil(top10.length / itemsPerPage)}`)
          .setDisabled(true),
        new MessageButton()
          .setLabel('Next')
          .setStyle('PRIMARY')
          .setCustomId('next_button')
          .setDisabled(true),
        new MessageButton()
          .setLabel('End')
          .setStyle('PRIMARY')
          .setCustomId('end_button')
          .setDisabled(true)
      );

      await interaction.editReply({ components: [row] });
    });
  },
};
