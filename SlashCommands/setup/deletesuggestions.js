const { Client, MessageEmbed, CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');
const db = require("quick.db")
module.exports = {
  name: 'deletesuggestions',
  description: "delete a channel Suggestions",
  category: "Settings",
  aliases: ['cc'],
  userPermissions: ["MANAGE_CHANNELS"],
  botPermissions: [""],
  emoji: "🛠️",

  
 
   /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        try{
        const guild = interaction.guild
  
       

  db.delete(`suggestions_${interaction.guild.id}`)
        interaction.followUp({ content: `✅ done delete Suggestions`})
    } catch(e) {
        return console.log(e)   
    }
} 
}