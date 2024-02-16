const { Client, MessageEmbed, CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');
const db = require("quick.db")
module.exports = {
  name: 'setsuggestions',
  description: "set a channel Suggestions",
  category: "Settings",
  aliases: ['cc'],
  userPermissions: ["MANAGE_CHANNELS"],
  botPermissions: [""],
  emoji: "🛠️",
  options: [
    {
        name: 'channel',
        description: "Channel to be setup",
        type: 'CHANNEL',
        required: true
    },
    
    
  ],
  
 
   /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        try{
        const guild = interaction.guild
        const channel = interaction.options.getChannel('channel')
       

  db.set(`suggestions_${interaction.guild.id}`, channel.id)
        interaction.followUp({ content: `✅ done setup Suggestions ${channel}`})
    } catch(e) {
        return console.log(e)   
    }
} 
}