const { CommandInteraction, MessageEmbed} = require("discord.js");
const ec = require("../../settings/embed")

module.exports = {
    name: "ban",
    description: "🔨 | Ban a member.",
    userPermissions: ['ADMINISTRATOR'],
    options: [
        {
            name: "target",
            description: "Select the target.",
            type: "USER",
            required: true
        },
        {
            name: "reason",
            description: "Select a reason.",
            type: "STRING",
            required: true
        }
    ],
    /**
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction, args) => {
        const target = interaction.options.getMember("target");
        const reason = interaction.options.getString("reason");
        await target.user.fetch();

        

        const response = new MessageEmbed()
            .setTitle("__**Succesfully banned the target!**__")
            .setColor(ec.color)
            .setThumbnail(target.user.avatarURL({ dynamic: true }))
            .setImage(target.user.bannerURL({ dynamic: true, size: 512 }) || "")
            .setFooter({
        text: `Requested by ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
      }) 
            .addFields(
                { name: "ID", value: target.user.id },
                { name: "Ban Reason", value: reason },
                { name: "Joined Server", value: `<t:${parseInt(target.joinedTimestamp / 1000)}:R>`, inline: true },
                { name: "Account Created", value: `<t:${parseInt(target.user.createdTimestamp / 1000)}:R>`, inline: true },
            );

        interaction.followUp({ embeds: [response], ephemeral: true });
        target.ban({ days: 0, reason: reason});
    }
}