const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
const ec = require('../../settings/embed')

module.exports = {
  name: "listbans",
  description: "Returns List of Bans in a Server",
  userPermission: "BAN_MEMBERS",
  /** 
   * @param {Client} client
   * @param {CommandInteraction} interaction 
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const fetchBans = interaction.guild.bans.fetch();
    var amount = 1;
    const bannedMembers = (await fetchBans)
      .map(
        (member) =>
          `${amount++} **${member.user.username}** | (*${member.user.id}*)`
      )
      .join("\n");

    const list = new MessageEmbed()
      .setTitle(`Bans in ${interaction.guild.name}`)
      .setDescription(`${bannedMembers}`)
      .setFooter({text:`Amount: ${amount - 1}`})
      .setTimestamp()
      .setColor(ec.color)
    return interaction.followUp({ embeds: [list] });
  },
};