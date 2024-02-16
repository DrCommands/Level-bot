const client = require("../../index") 
const { MessageEmbed, MessageButton, MessageActionRow, MessageAttachment } = require("discord.js");
const db = require('quick.db')
const Discord = require("discord.js");
const { welcomeCard } = require("pixelord");
const fs = require("fs");

client.on("guildMemberRemove", async member => {
         let bgs = db.get(`goodbayurl_${member.guild.id}`) 
    if (bgs === null) bgs = 'https://cdn.discordapp.com/attachments/1146330881775112224/1161286347923914763/39.png'
 let fetchInfo = await db.get(`gedmsg_${member.guild.id}`)
    if(fetchInfo === null) fetchInfo = `${member}`
  const bess = fetchInfo.replace('[accountcreated]',`<t:${parseInt(member.user.createdTimestamp / 1000)}:R>`).replace('[username]', member.user.username).replace('[servername]', member.guild.name).replace('[tag]', member.user.tag).replace('[mention]', `<@${member.user.id}>`).replace('[rank]', member.guild.members.cache.size)
  let colors = db.get(`goodbaycolor_${member.guild.id}`)
    if (colors === null) colors = ''
  
 let chx = db.get(`goodbay_${member.guild.id}`);
  
  if(chx === null) {
    return; 
  }

  const welcard = new welcomeCard()
    .setName(member.user.username)
    .setAvatar(member.user.displayAvatarURL({ format: "png" }))
    .setMessage(`YOU ARE ${member.guild.memberCount} MEMBER`)
    .setBackground(bgs)
    .setColor(colors) // without #
    .setTitle("Goodbay");
  const output = await welcard.build();

  fs.writeFileSync("card.png", output);

  const astra = new MessageAttachment(fs.readFileSync("card.png"));

                   client.channels.cache
        .get(chx)
            .send({files: [astra],content:`${bess}`}).catch(()=>{return;})

})