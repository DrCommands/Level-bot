const { MessageEmbed } = require("discord.js");
const ec = require("../../settings/embed");

module.exports = {
    name: 'Avatar',
    description: 'Get another users avatar using context menu',
    category: 'Context',
    userPermissions: [],
    type: "USER",
    emoji: "💽",
     /*
     * @param {Client} client
     * @param {ContextMenuInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      const user = await client.users.fetch(interaction.targetId);
      
      const embed = new MessageEmbed()
        .setTitle('Avatar Image')
        .setColor(ec.color)
        .setFooter({ text: ec.footer })
        .setImage(user.displayAvatarURL({ dynamic: true }))
        .setTimestamp();

      interaction.followUp({ 
        content: `${user.tag}'s Avatar`, 
        embeds: [embed] });
    },
};