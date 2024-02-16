const db = require('quick.db');
const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: 'setup-auditlog', //developer by ARTEX
  description: '🔓 | setup logs',
  userPermissions: ['ADMINISTRATOR'],
//developer by ARTEX
  run: async (client, interaction, args) => {
    let row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel(`Messages Log`)
        .setCustomId(`msg`)
        .setStyle(`SECONDARY`),
      new Discord.MessageButton()
        .setLabel(`Members Log`)
        .setCustomId(`mem`)
        .setStyle(`SECONDARY`),
      new Discord.MessageButton()//developer by ARTEX
        .setLabel(`Bans & Kicks Log`)
        .setCustomId(`ban`)
        .setStyle(`SECONDARY`),
      new Discord.MessageButton()
        .setLabel(`Channels Log`)
        .setCustomId(`ch`)
        .setStyle(`SECONDARY`)
    );
    let row1 = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel(`webhook Log`)
        .setCustomId(`webhook`)
        .setStyle(`SECONDARY`),
      new Discord.MessageButton()
        .setLabel(`voice Log`)
        .setCustomId(`voice`)
        .setStyle(`SECONDARY`),
      new Discord.MessageButton()
        .setLabel(`Timeout Log`)//developer by ARTEX
        .setCustomId(`Timeout`)
        .setStyle(`SECONDARY`),
      new Discord.MessageButton()
        .setLabel(`thread Log`)
        .setCustomId(`thread`)
        .setStyle(`SECONDARY`),
      new Discord.MessageButton()
        .setLabel(`Roles Log`)//developer by ARTEX
        .setCustomId(`role`)
        .setStyle(`SECONDARY`)
    );
    let row1s = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
        .setLabel(`setup all auditlog`)
        .setCustomId(`alt`)
        .setStyle(`SUCCESS`),
      new Discord.MessageButton()
        .setLabel(`delete all auditlog`)
        .setCustomId(`select11`)
        .setStyle(`DANGER`)
    );//developer by ARTEX
    let embed = new Discord.MessageEmbed()
      .setAuthor({ name: `${interaction.member.user.username}`, iconURL: `${interaction.member.user.displayAvatarURL()}` })
      .setTitle(`Setup Your Logs!`)//developer by ARTEX
      .setDescription(`> **Choose The Log You Need And Choose The Channel For It**`)
      .setThumbnail(interaction.guild.iconURL() || null)
      .setTimestamp()
      .setFooter({ text: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL() || null });
//developer by ARTEX
    interaction.followUp({ embeds: [embed], components: [row, row1, row1s], ephemeral: true });
//developer by ARTEX
    setTimeout(() => {
      row.components.forEach(button => button.setDisabled(true));
      row1.components.forEach(button => button.setDisabled(true));
      row1s.components.forEach(button => button.setDisabled(true));

      interaction.editReply({ embeds: [embed], components: [row, row1, row1s] });
    }, 120000);
  }
};//developer by ARTEX
