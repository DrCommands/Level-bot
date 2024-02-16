const { Client, MessageEmbed } = require("discord.js");
const ec = require("../../settings/embed");

module.exports = {
    name: 'invitetracker',
    description: '⏳ | Gets the number of invites from users that joined your server.',
    category: 'Moderator',
    userPermissions: [],
    type: 'CHAT_INPUT',
    ownerOnly: false,
    options: [
        {
            name: 'user',
            type: 'USER',
            description: 'tag to see their invs',
            required: false
        }
    ],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, interaction, args, message) => {
        const user = interaction.guild.members.cache.get(args[0]) || interaction.member

        let invites = await interaction.guild.invites.fetch();
        let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id)

        if (userInv.size <= 0) {
            return interaction.followUp({ content: `${user} has \`0\` invites ` })
        }

        let invCodes = userInv.map(x => x.code).join('\n')
        let i = 0;
        userInv.forEach(inv => i += inv.uses);

        const tackerEmbed = new MessageEmbed()
            .setDescription(`**_Invites  of :_** ${user} `)
            .addFields(
              { name: `User Invites:`, value: `${i}` },
              { name: 'Invite Codes:', value: `${invCodes}` },
            )
            .setColor(ec.color)
            .setTimestamp()
            .setFooter({
        text: `Requested by ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
      })

        interaction.followUp({ embeds: [tackerEmbed] });
    }
}