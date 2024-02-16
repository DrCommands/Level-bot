const client = require("../../index");
const db = require('quick.db');
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
//developer by ARTEX
client.on('messageCreate', async (message) => {
    if (message.content) {
        const channelId = db.get(`suggestions_${message.guild.id}`);

        if (message.channel.id !== channelId) return;

        // Delete the original message
        try {
            await message.delete();
        } catch (error) {
            console.error('Error deleting message:', error);
        }
//developer by ARTEX
        const embed = new MessageEmbed()
            .setAuthor({ name: `Suggestions ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setDescription(`> \`\`\`${message.content}\`\`\``)
            .setColor('RANDOM')
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter({
                text: `${client.user.username} / Wondering how to Suggest something? \n Just type it in the suggestions channel.`,
                iconURL: client.user.displayAvatarURL({ dynamic: true, format: "png", size: 2048 })
            });

        const row1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('yes_suggest')
                    .setLabel(`0`)
                    .setStyle('SECONDARY')
                    .setEmoji('1157327029956530207'),
                new MessageButton()
                    .setCustomId('no_suggest')
                    .setLabel(`0`)
                    .setStyle('SECONDARY')
                    .setEmoji('1157327027242811443'),
                new MessageButton()
                    .setCustomId('show_votes')
                    .setLabel('Show Votes')
                    .setStyle('PRIMARY')
                    .setEmoji('📊')
            );

        const sentMessage = await message.channel.send({ embeds: [embed], components: [row1] });
        db.set(`suggest_${message.id}`, true);

        // Create a thread with the message
        const thread = await sentMessage.startThread({
            name: `Suggestion Thread - ${message.author.username}`,
            autoArchiveDuration: 60, // Set the auto-archive duration in minutes (e.g., 60 minutes)
            startMessage: message.content
        });
    }
});
//developer by ARTEX
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    const userId = interaction.user.id;

    if (interaction.customId === 'yes_suggest' || interaction.customId === 'no_suggest') {
        const r = db.get(`${userId}_${interaction.message.id}`);
        const embed = new MessageEmbed()
            .setDescription('You have already voted.');
        if (r === 1) return interaction.reply({ embeds: [embed], ephemeral: true });

        db.set(`${userId}_${interaction.message.id}`, 1);

        const yesVotes = db.get(`suggestYes_${interaction.message.id}`) || [];
        const noVotes = db.get(`suggestNo_${interaction.message.id}`) || [];

        if (interaction.customId === 'yes_suggest') {
            if (!yesVotes.includes(userId)) {
                yesVotes.push(userId);
                db.set(`suggestYes_${interaction.message.id}`, yesVotes);
            }
        } else {
            if (!noVotes.includes(userId)) {
                noVotes.push(userId);
                db.set(`suggestNo_${interaction.message.id}`, noVotes);
            }
        }
//developer by ARTEX
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('yes_suggest')
                    .setLabel(`${yesVotes.length}`)
                    .setStyle('SECONDARY')
                    .setEmoji('1157327029956530207'),
                new MessageButton()
                    .setCustomId('no_suggest')
                    .setLabel(`${noVotes.length}`)
                    .setStyle('SECONDARY')
                    .setEmoji('1157327027242811443'),
                new MessageButton()
                    .setCustomId('show_votes')
                    .setLabel('Show Votes')
                    .setStyle('PRIMARY')
                    .setEmoji('📊')
            );

        interaction.update({ components: [row] });
    }

    if (interaction.customId === 'show_votes') {
        const yesVotes = db.get(`suggestYes_${interaction.message.id}`) || [];
        const noVotes = db.get(`suggestNo_${interaction.message.id}`) || [];

        const yesUsernames = yesVotes.map(userId => `<@${userId}>`).join('\n');
        const noUsernames = noVotes.map(userId => `<@${userId}>`).join('\n');

        const embed = new MessageEmbed()
            .setColor('#ffcc00');

        if (yesUsernames.length > 0) {
            embed.addFields({ name: 'Up Vote', value: yesUsernames, inline: true });
        } else {
            embed.addFields({ name: 'Up Vote', value: 'None', inline: true });
        }

        if (noUsernames.length > 0) {
            embed.addFields({ name: 'Down Vote', value: noUsernames, inline: true });
        } else {
            embed.addFields({ name: 'Down Vote', value: 'None', inline: true });
        }

        interaction.reply({ embeds: [embed], ephemeral: true });
    }
});
//developer by ARTEX