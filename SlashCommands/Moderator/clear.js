const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'clear',
    description: '❌ | Deletes max amount of messages 99.',
    category: 'Moderator',
    userPermissions: ['ADMINISTRATOR'],
    type: 'CHAT_INPUT',
    ownerOnly: false,
    options: [
        {
            name: 'number_of_messages',
            type: 'STRING',
            description: 'Number of messages to delete (2-99)',
            required: true
        }
    ],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, interaction, args, message) => {
      
        let amount = args[0]
        if (amount <= 100) {
            interaction.channel.bulkDelete(amount, true)
        }

        interaction.channel.send({
            content: `⚠️ I've cleared \`${amount}\` messages :broom:`
        })
    }
}