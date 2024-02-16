const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const ec = require('../../settings/embed')

module.exports = {
    name: 'first-message',
    description:'📩 | Fetches First Message in a Channel',

    run: async(client, interaction, args) => {
        const fetchmessages = await interaction.channel.messages.fetch({ limit: 1, after: 1 })
        const msg = fetchmessages.first()

        const embed = new MessageEmbed()
        .setTitle(`First Message`)
        .setColor(ec.color)
        .addFields(
            { name: '**Message Content:**', value: `${msg.content}`, inline: true },
            { name: '**Sent By:**', value: `${msg.author}`, inline: true },
            { name: '**Date Sent:**', value: `<t:${parseInt(msg.createdTimestamp / 1000)}:R>`, inline: true },
            )
        .setTimestamp()
        .setFooter({
            text: `Requested by ${interaction.user.username}`,
            iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
          }) 

        const row = new MessageActionRow()
        .addComponents([
            new MessageButton()
            .setLabel('Get Message')
            .setStyle('LINK')
            .setURL(msg.url)
            .setEmoji('1041215924818165781')
        ])

        interaction.followUp({ embeds: [embed], components: [row] })
    }
}