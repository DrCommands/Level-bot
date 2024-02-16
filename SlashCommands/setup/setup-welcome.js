const db = require('quick.db');
const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require("discord.js");


module.exports = {
    name: 'setup-welcome',
    description: '❎ | setup welcome',
    userPermissions: ['ADMINISTRATOR'],

    run: async (client, interaction, args) => {

        let row = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel(`setup Channel`)
                .setCustomId(`welcomes`)
                .setStyle(`SUCCESS`),
            new MessageButton()
                .setLabel(`setup Background`)
                .setCustomId(`welcome_app`)
                .setStyle(`SECONDARY`),
            new MessageButton()
                .setLabel(`setup Message`)
                .setCustomId(`message_app`)
                .setStyle(`SECONDARY`),
            new MessageButton()
                .setLabel(`setup Color`)
                .setCustomId(`color_app`)
                .setStyle(`SECONDARY`) 
        );

        const row3 = new MessageActionRow()
            .addComponents( 
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('select settings')
                    .addOptions([
                        {
                            label: 'Delete welcome Background',
                            value: 'delete_background',
                        },
                        {
                            label: 'Delete welcome Message',
                            value: 'delete_message',
                        },
                        {
                            label: 'Delete welcome color',
                            value: 'delete_color',
                        },
                    ]),
            ); 
        let embed = new MessageEmbed()
            .setAuthor({ name: `${interaction.member.user.username}`, iconURL: `${interaction.member.user.displayAvatarURL()}` })
            .setTitle(`Setup Your welcome !`)
          .setColor('RANDOM')
          .setImage('https://cdn.discordapp.com/attachments/1148240486981709864/1161592423433113631/My_Video.gif')
            .setDescription(`> **Choose the welcome setting you need and choose the channel assigned to it**\n \`✍️ Fully Customizable\`
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
