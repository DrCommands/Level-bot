const client = require("../../index");
const { Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageAttachment, CommandInteraction } = require('discord.js')
const ec = require("../../settings/embed")
const SQLite = require("better-sqlite3");
const sql = new SQLite('./mainDB.sqlite')
const db = require('quick.db');
const fs = require('fs');
const talkedRecently = new Map();
const canvafy = require('canvafy');
////////////////////////////////////////////
const levelTable = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'levels';").get();
if (!levelTable['count(*)']) {
  sql.prepare("CREATE TABLE levels (id TEXT PRIMARY KEY, user TEXT, guild TEXT, xp INTEGER, level INTEGER, totalXP INTEGER);").run();
}

client.getLevel = sql.prepare("SELECT * FROM levels WHERE user = ? AND guild = ?");
client.setLevel = sql.prepare("INSERT OR REPLACE INTO levels (id, user, guild, xp, level, totalXP) VALUES (@id, @user, @guild, @xp, @level, @totalXP);");
// Role table for levels
const roleTable = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'roles';").get();
if (!roleTable['count(*)']) {
  sql.prepare("CREATE TABLE roles (guildID TEXT, roleID TEXT, level INTEGER);").run();
}

// Prefix table
const prefixTable = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'prefix';").get();
if (!prefixTable['count(*)']) {
  sql.prepare("CREATE TABLE prefix (serverprefix TEXT, guild TEXT PRIMARY KEY);").run();
}


// Settings table
const settingsTable = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'settings';").get();
if (!settingsTable['count(*)']) {
  sql.prepare("CREATE TABLE settings (guild TEXT PRIMARY KEY, levelUpMessage TEXT, customXP INTEGER, customCooldown INTEGER);").run();
}

const channelTable = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'channel';").get();
if (!channelTable['count(*)']) {
  sql.prepare("CREATE TABLE channel (guild TEXT PRIMARY KEY, channel TEXT);").run();
}

// XP Messages 
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  // get level and set level
  const level = client.getLevel.get(message.author.id, message.guild.id)
  if (!level) {
    let insertLevel = sql.prepare("INSERT OR REPLACE INTO levels (id, user, guild, xp, level, totalXP) VALUES (?,?,?,?,?,?);");
    insertLevel.run(`${message.author.id}-${message.guild.id}`, message.author.id, message.guild.id, 0, 0, 0)
    return;
  }

  let customSettings = sql.prepare("SELECT * FROM settings WHERE guild = ?").get(message.guild.id);
  let channelLevel = sql.prepare("SELECT * FROM channel WHERE guild = ?").get(message.guild.id);

  const lvl = level.level;

  let getXpfromDB;
  let getCooldownfromDB;

  if (!customSettings) {
    getXpfromDB = 16; // Default
    getCooldownfromDB = 1000;
  } else {
    getXpfromDB = customSettings.customXP;
    getCooldownfromDB = customSettings.customCooldown;
  }

  // xp system
  const generatedXp = Math.floor(Math.random() * getXpfromDB);
  const nextXP = level.level * 2 * 250 + 250
  // message content or characters length has to be more than 4 characters also cooldown
  if (talkedRecently.get(message.author.id)) {
    return;
  } else { // cooldown is 10 seconds
    level.xp += generatedXp;
    level.totalXP += generatedXp;
// message level up send image

    // level up!
    if (level.xp >= nextXP) {
      level.xp = 0;
      level.level += 1;
      let levelUpMsg;
      if (!customSettings) {
        levelUpMsg = `**Congratulations** ${message.author}! You have now leveled up to **level ${level.level}**`;
      } else {
        function antonymsLevelUp(string) {
          return string
            .replace(/{member}/i, `${message.member}`)
            .replace(/{xp}/i, `${level.xp}`)
            .replace(/{level}/i, `${level.level}`);
        }
        levelUpMsg = antonymsLevelUp(customSettings.levelUpMessage.toString());
      }
        let bg = db.fetch(`level_url_${message.guild.id}`)
      if (bg === null) bg = 'https://media.discordapp.net/attachments/1200503777602572391/1208112925965815939/5588753f3911dab4a0a4b71fc50fb8bd.jpg?ex=65e219d7&is=65cfa4d7&hm=bb34f878846dee1092a5e8eb605d004f8feadaebaa24b6ee542a1d965fa16a44&=&format=webp'
      let colorAvatar = db.fetch(`level_colorv_${message.guild.id}`)
      if (colorAvatar === null) colorAvatar = '#05ff6f'
      let colorbanner = db.fetch(`level_colorb_${message.guild.id}`)
      if (colorbanner === null) colorbanner = '#05ff6f'
      // Create level up image
      let levelUpImage = await new canvafy.LevelUp()
        .setAvatar(message.author.displayAvatarURL({ dynamic: true }))
        .setBackground("image", `${bg}`)
        .setUsername(message.author.username)
        .setBorder(colorbanner)
        .setAvatarBorder(colorAvatar)
        .setOverlayOpacity(0.7)
        .setLevels(level.level - 1, level.level)
        .build();

      // Attach level up image to message
      const attachment = new MessageAttachment(levelUpImage, 'level_up.png');

      try {
        if (!channelLevel || channelLevel.channel == "Default") {
          message.channel.send({ content: levelUpMsg, files: [attachment] });
        } else {
          let channel = message.guild.channels.cache.get(channelLevel.channel);
          const permissionFlags = channel.permissionsFor(message.guild.me);
          if (!permissionFlags.has("SEND_MESSAGES") || !permissionFlags.has("VIEW_CHANNEL")) return;
          channel.send({ content: levelUpMsg, files: [attachment] });
        }
      } catch (err) {
        console.error(err);
      }
    }
    client.setLevel.run(level);
    // add cooldown to user
    talkedRecently.set(message.author.id, Date.now() + getCooldownfromDB);
    setTimeout(() => talkedRecently.delete(message.author.id, Date.now() + getCooldownfromDB))
  }
  // level up, time to add level roles
  const member = message.member;
  let Roles = sql.prepare("SELECT * FROM roles WHERE guildID = ? AND level = ?")

  let roles = Roles.get(message.guild.id, lvl)
  if (!roles) return;
  if (lvl >= roles.level) {
    if (roles) {
      if (member.roles.cache.get(roles.roleID)) {
        return;


      }
      member.roles.add(roles.roleID);
    }
  }
})