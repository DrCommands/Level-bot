const client = require("../../index");
const { MessageEmbed, MessageButton, MessageActionRow, MessageAttachment } = require("discord.js");
const db = require('quick.db');
const Discord = require("discord.js");
const { welcomeCard } = require("pixelord");
const fs = require("fs");

var { inviteTracker } = require("discord-inviter");
var tracker = new inviteTracker(client);

tracker.on("guildMemberAdd", async (member, inviter, invite, error) => {
  if (error) return console.error(error);
  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }
  let bg = db.fetch(`url_${member.guild.id}`);
  if (bg === null) bg = 'https://s6.imgcdn.dev/ZqH2S.png';
  let colors = db.fetch(`color_${member.guild.id}`);
  if (colors === null) colors = '';
  let fetchInfo = await db.fetch(`info_${member.guild.id}`);
  if (fetchInfo === null) fetchInfo = `${member}`;

  const welcard = new welcomeCard()
    .setName(member.user.username)
    .setAvatar(member.user.displayAvatarURL({ format: "png" }))
    .setMessage(`YOU ARE ${member.guild.memberCount} MEMBER`)
    .setBackground(bg)
    .setColor(colors) // without #
    .setTitle("Welcome");
  const output = await welcard.build();

  fs.writeFileSync("card.png", output);

  const astra = new Discord.MessageAttachment(fs.readFileSync("card.png"));
  const mes = fetchInfo.replace('[accountcreated]', `<t:${parseInt(member.user.createdTimestamp / 1000)}:R>`).replace('[invitecount]', invite.count).replace('[invitername]', inviter.username).replace('[inviter]', `<@!${inviter.id}>`).replace('[username]', member.user.username).replace('[servername]', member.guild.name).replace('[tag]', member.user.tag).replace('[mention]', `<@${member.user.id}>`).replace('[membercount]', member.guild.members.cache.size);
  client.channels.cache.get(chx).send({ files: [astra], content: `${mes}` }).catch(() => { return; });
});
