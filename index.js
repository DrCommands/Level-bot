const { Client, Collection } = require("discord.js");
const { Discord, Message, MessageActionRow, MessageButton, MessageEmbed, Formatters, MessageAttachment } = require('discord.js');
const fs = require('fs');
const db = require('quick.db')
//developer by ARTEX

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.cooldowns = new Collection();
//developer by ARTEX
// // Initializing the project
fs.readdirSync('./handlers').forEach((handler) => {
    require(`./handlers/${handler}`)(client)
  });

//developer by ARTEX

client.login(process.env.token);
//developer by ARTEX

process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});