const { MessageEmbed } = require("discord.js");
const translate = require("@iamtraction/google-translate")
const ec = require("../../settings/embed");

module.exports = {
    name: 'Translate',
    description: 'Translate another word in english',
    category: 'Context',
    userPermissions: [],
    type: 'MESSAGE',
    emoji: "💎",

    run: async (client, interaction, args) => {
      const msg = await interaction.channel.messages.fetch(
        interaction.targetId
      );

      const translated = await translate(msg.content, { to: 'en' });
      const embed = new MessageEmbed()
      .setFooter({ text: ec.footer, iconURL: ec.iconURL })
      .setTimestamp()
      .addFields(
        { name: "Text To Translate:", value: `\`\`\`${msg.content}\`\`\`` },
        { name: "Translateted Text:", value: `\`\`\`${translated.text}\`\`\`` },
      )
      .setColor(ec.color)
      
      interaction.followUp({ embeds: [embed] })
    },
};