const { ContextMenuInteraction, MessageEmbed } = require("discord.js");
const ec = require('../../settings/embed')  

  module.exports = {
    name: 'User Info',
    type: 2,
    /**
     * 
     * @param {ContextMenuInteraction} interaction 
     */
    run: async(client, interaction, args) => {
      const target = await interaction.guild.members.fetch(interaction.targetId);
      const user = await interaction.guild.members.fetch(target.id);
  
      const response = new MessageEmbed()
        .setColor(ec.color)
        .setAuthor({ name: target.user.username, iconURL: target.user.displayAvatarURL() })
        .setThumbnail(target.user.displayAvatarURL())
        .addFields(
          { name: "Member", value: `${target}`, inline: true },
          { name: "Nickname", value: target.nickname || "None", inline: true },
          { name: "Bot Account", value: `${user.bot ? "True" : "False"}` },
          { name: "Roles", value: `${target.roles.cache.map(r => r).join(' ')}`, inline: false },
          { name: "Joined Server", value: `<t:${parseInt(target.joinedAt / 1000)}:R>`, inline: true },
          { name: "Joined Discord", value: `<t:${parseInt(target.user.createdAt / 1000)}:R>`, inline: true },
        )
        .setFooter({ text: `User ID: ${target.user.id}` })
        .setTimestamp()
  
      await interaction.followUp({ embeds: [response], ephemeral: true });
    }
  }