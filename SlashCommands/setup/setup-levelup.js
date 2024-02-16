const db = require('quick.db');
const { Client, CommandInteraction, MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require("discord.js");


module.exports = {
    name: 'setup-levelup',
    description: '❎ | setup levelup',
    userPermissions: ['ADMINISTRATOR'],

    run: async (client, interaction, args) => {

        let row = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel(`setup Channel`)
                .setCustomId(`levelups`)
                .setStyle(`SUCCESS`),
            new MessageButton()
                .setLabel(`setup Background`)
                .setCustomId(`level_app`)
                .setStyle(`SECONDARY`),
            new MessageButton()
                .setLabel(`setup Message`)
                .setCustomId(`message_level`)
                .setStyle(`SECONDARY`)
        );
      let rows = new MessageActionRow().addComponents(
          new MessageButton()
              .setLabel(`setup avatar Color`)
              .setCustomId(`levl_colorv_app`)
              .setStyle(`PRIMARY`),
         new MessageButton()
        .setLabel(`❓`)
        .setCustomId(`leesefs`)
        .setStyle(`PRIMARY`),
          new MessageButton()
              .setLabel(`setup Banner Color`)
              .setCustomId(`levl_colorb_app`)
              .setStyle(`PRIMARY`)
      );

        const row3 = new MessageActionRow()
            .addComponents( 
                new MessageSelectMenu()
                    .setCustomId('selectlevel')
                    .setPlaceholder('select levelup settings')
                    .addOptions([ 
                        {
                            label: 'Delete levelup Background',
                            value: 'level_background',
                        },
                        {
                            label: 'Delete levelup color',
                            value: 'level_color',
                        },
                    ]),
            ); 
        let embed = new MessageEmbed()
            .setAuthor({ name: `${interaction.member.user.username}`, iconURL: `${interaction.member.user.displayAvatarURL()}` })
            .setTitle(`Setup  levelup!`)
          .setColor('RANDOM')
      
            .setDescription(`> **Choose the levelup setting you need and choose the channel assigned to it**\n
           **level up commands**
           
            \`/add-level\`  give-level user
            \`/leaderboard\`  Check top 10 users with the most xp and the highest level
            \`/rank\` show user level card
            \`/role-level-add\` level reword role
            \`/xpsettings\`  advanced xp system
            \`/role-level-show\` 
            \`/role-level-remove\`
          `) 
            .setTimestamp()
            .setFooter({ text: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL() || null });

        interaction.followUp({ embeds: [embed], components: [row3, row, rows], ephemeral: true });

        setTimeout(() => {
            row.components.forEach(button => button.setDisabled(true));
            rows.components.forEach(button => button.setDisabled(true));
            row3.components.forEach(button => button.setDisabled(true));
            interaction.editReply({ embeds: [embed], components: [row3, row, rows] });
        }, 180000);
    }
};
