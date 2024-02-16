const { MessageEmbed } = require("discord.js");
const ec = require("../../settings/embed");

module.exports = {
    name: 'ping',
    description: '🏓 | Return Bot Latencies',
    category: 'info',
    cooldown: 10,
    run: async (client, message) => {
        let circles = {
            green: "🟢",
            yellow: "🟡",
            red: "🔴"
        }
        let days = Math.floor(client.uptime / 86400000)
        let hours = Math.floor(client.uptime / 3600000) % 24
        let minutes = Math.floor(client.uptime / 60000) % 60
        let seconds = Math.floor(client.uptime / 1000) % 60

        let botLatency = new Date() - message.createdAt
        let apiLatency = client.ws.ping;
      
      const pingEmbed = new MessageEmbed()
        .setTitle("Bot Latency & Ping")
        .setColor(ec.color)
        .setThumbnail(client.user.displayAvatarURL({ dynamic : true }))
        .addFields(
          { 
            name: "Bot Latency:", 
            value: `${botLatency <= 200 ? circles.green : botLatency <= 400 ? circles.yellow : circles.red} ${botLatency}ms`, 
            inline: true
          },
          { 
            name: "API Latency:", 
            value: `${apiLatency <= 200 ? circles.yellow : apiLatency <= 400 ? circles.yellow : circles.red} ${apiLatency}ms`, 
            inline: true 
          },
          { 
            name: "Client Uptime:", 
            value: `${days}d ${hours}h ${minutes}m ${seconds}s`, inline: true 
          }
        )
        .setFooter({ text: ` • Requested by ${message.author.tag}`, iconURL: client.user.displayAvatarURL() })
        .setTimestamp()
      
        return message.reply({ embeds: [pingEmbed], allowedMentions: { repliedUser: false } })
    },
}