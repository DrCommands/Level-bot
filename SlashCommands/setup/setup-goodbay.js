const db = require('quick.db');
const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'setup-goodbay',
    description: '❎ | setup goodbay',
    userPermissions: ['ADMINISTRATOR'],

    run: async (client, interaction, args) => {
//developer by tn_hazem
        let row = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel(`setup Channel`)
                .setCustomId(`goodbays`)
                .setStyle(`SUCCESS`),
            new MessageButton()
                .setLabel(`setup Background`)
                .setCustomId(`goodbay_app_background`)
                .setStyle(`SECONDARY`),
            new MessageButton()
                .setLabel(`setup Message`)
                .setCustomId(`goodbay_app_message`)
                .setStyle(`SECONDARY`),
            new MessageButton()
                .setLabel(`setup Color`)
                .setCustomId(`goodbay_app_color`)
                .setStyle(`SECONDARY`)
        );

        const row3 = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('select settings')
                    .addOptions([
                        {
                            label: 'Delete goodbay Background',
                            value: 'dddelete_background',
                        },
                        {
                            label: 'Delete goodbay Message',
                            value: 'dddelete_message',
                        },
                        {
                            label: 'Delete goodbay color',
                            value: 'dddelete_color',
                        },
                    ]),
            );

        let embed = new MessageEmbed()
            .setAuthor({ name: `${interaction.member.user.username}`, iconURL: `${interaction.member.user.displayAvatarURL()}` })
            .setTitle(`Setup Your goodbay !`)
            .setImage('https://cdn.discordapp.com/attachments/1148240486981709864/1161600766239318108/My_Video1.gif')
            .setDescription(`> **Choose the goodbay setting you need and choose the channel assigned to it**\n \`✍️ Fully Customizable\`
\`👀 High Quality Assets\`
\`😵 Dreamlike designs\``)
            .setThumbnail(interaction.guild.iconURL() || null)
            .setTimestamp()
            .setFooter({ text: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL() || null });

        interaction.followUp({ embeds: [embed], components: [row, row3], ephemeral: true });

        setTimeout(() => { 
            row.components.forEach(button => button.setDisabled(true));
            row3.components.forEach(button => button.setDisabled(true));
            interaction.editReply({ embeds: [embed], components: [row, row3] });
        }, 180000);
    } 
};
