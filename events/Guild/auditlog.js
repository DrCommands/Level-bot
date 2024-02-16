
const client = require("../../index") 
const db = require('quick.db')
const { MessageActionRow, MessageButton,MessageSelectMenu, MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

client.setMaxListeners(30);
//developer by ARTEX
client.on("interactionCreate" , interaction => {

    if(!interaction.isButton()) return;
    if(interaction.customId == "msg") {
      const row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('select1')
          .setPlaceholder('Select The Log Of Messages')
          )
        interaction.guild.channels.cache.first(24).forEach(channel => {
          if(channel.isText()) {
            row.components[0].addOptions([
              {
                label: `${channel.name}`,
                description: `-`,
                value: `${channel.id}`,
              },
            ]);
    }
//developer by ARTEX
  });
  interaction.reply({components:[row], ephemeral: true })

    }
    if(interaction.customId == "mem") {
      const row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('select5')
          .setPlaceholder('Select The Log Of Members')
          )
        interaction.guild.channels.cache.first(24).forEach(channel => {
          if(channel.isText()) {
            row.components[0].addOptions([
              {
                label: `${channel.name}`,
                description: `-`,
                value: `${channel.id}`,
              },
            ]);
    }
//developer by ARTEX
  });
  interaction.reply({components:[row], ephemeral: true })

    }
    if(interaction.customId == "ban") {
      const row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('select2')
          .setPlaceholder('Select The Log Of Bans & Kicks')
          )
        interaction.guild.channels.cache.first(24).forEach(channel => {
          if(channel.isText()) {
            row.components[0].addOptions([
              {
                label: `${channel.name}`,
                description: `-`,
                value: `${channel.id}`,
              },
            ]);
    }

  });
  interaction.reply({components:[row], ephemeral: true })

    }
    if(interaction.customId == "ch") {
      const row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('select3')
          .setPlaceholder('Select The Log Of Channels')
          )
        interaction.guild.channels.cache.first(24).forEach(channel => {
          if(channel.isText()) {
            row.components[0].addOptions([
              {
                label: `${channel.name}`,
                description: `-`,
                value: `${channel.id}`,
              },
            ]);
    }
//developer by ARTEX
  });
  interaction.reply({components:[row], ephemeral: true })

    }
    if(interaction.customId == "role") {
      const row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('select4')
          .setPlaceholder('Select The Log Of Roles')
          )
        interaction.guild.channels.cache.first(24).forEach(channel => {
          if(channel.isText()) {
            row.components[0].addOptions([
              {
                label: `${channel.name}`,
                description: `-`,
                value: `${channel.id}`,
              },
            ]);
    }
//developer by ARTEX
  });
  interaction.reply({components:[row], ephemeral: true })

    }
      if(interaction.customId == "thread") {
      const row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('select6')
          .setPlaceholder('Select The Log Of thread')
          )
        interaction.guild.channels.cache.first(24).forEach(channel => {
          if(channel.isText()) {
            row.components[0].addOptions([
              {
                label: `${channel.name}`,
                description: `-`,
                value: `${channel.id}`,
              },
            ]);
    }
//developer by ARTEX
  });
  interaction.reply({components:[row], ephemeral: true })

      }
      if(interaction.customId == "webhook") {
      const row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('select7')
          .setPlaceholder('Select The Log Of webhook')
          )
        interaction.guild.channels.cache.first(24).forEach(channel => {
          if(channel.isText()) {
            row.components[0].addOptions([
              {
                label: `${channel.name}`,
                description: `-`,
                value: `${channel.id}`,
              },
            ]);
    }
//developer by ARTEX
  });
  interaction.reply({components:[row], ephemeral: true })

    
        }
      if(interaction.customId == "voice") {
      const row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('select8')
          .setPlaceholder('Select The Log Of voice')
          )
        interaction.guild.channels.cache.first(24).forEach(channel => {
          if(channel.isText()) {
            row.components[0].addOptions([
              {
                label: `${channel.name}`,
                description: `-`,
                value: `${channel.id}`,
              },
            ]);
    }//developer by ARTEX

  });
  interaction.reply({components:[row], ephemeral: true })

    }
        if(interaction.customId == "Timeout") {
      const row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('select9')
          .setPlaceholder('Select The Log Of Timeout')
          )
        interaction.guild.channels.cache.first(24).forEach(channel => {
          if(channel.isText()) {
            row.components[0].addOptions([
              {
                label: `${channel.name}`,
                description: `-`,
                value: `${channel.id}`,
              },
            ]);
    }
//developer by ARTEX
  });
  interaction.reply({components:[row], ephemeral: true })
 }
        if(interaction.customId == "alt") {
      const row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('select10')
          .setPlaceholder('Select The Log Of all auditlog')
          )
        interaction.guild.channels.cache.first(24).forEach(channel => {
          if(channel.isText()) {
            row.components[0].addOptions([
              {
                label: `${channel.name}`,
                description: `-`,
                value: `${channel.id}`,
              },
            ]);
    }

  });
  interaction.reply({components:[row], ephemeral: true })
           }

        if(interaction.customId == "welcomes") {
      const row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('sdfsdfxx')
          .setPlaceholder('Select The welcome channel')
          )
        interaction.guild.channels.cache.first(24).forEach(channel => {
          if(channel.isText()) {
            row.components[0].addOptions([
              {
                label: `${channel.name}`,
                description: `-`,
                value: `${channel.id}`,
              },
            ]);
    }

  });
          
        let rows = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel(`setup Channel with id`)
                .setCustomId(`channel_app`)
                .setStyle(`SUCCESS`)
        );
  interaction.reply({components:[row,rows], ephemeral: true })
           }
        if(interaction.customId == "goodbays") {
      const row = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId('sgsgqs')
          .setPlaceholder('Select The goodbay channel')
          )
        interaction.guild.channels.cache.first(24).forEach(channel => {
          if(channel.isText()) {
            row.components[0].addOptions([
              {
                label: `${channel.name}`,
                description: `-`,
                value: `${channel.id}`,
              },
            ]);
    }

  });
          
        let rows = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel(`setup Channel with id`)
                .setCustomId(`cqsqhannel_app`)
                .setStyle(`SUCCESS`)
        );
  interaction.reply({components:[row,rows], ephemeral: true })
           }
  });

//developer by ARTEX
  client.on("interactionCreate" , interaction => {
    if(interaction.isSelectMenu()) {
      if(interaction.customId == "select1") {
        interaction.update({embeds:[] , components:[] , content:`**Done The Log Of Messages Is : <#${interaction.values[0]}> !**`, ephemeral: true })
        db.set(`msgchannel_${interaction.guild.id}` , interaction.values[0])
      }
      if(interaction.customId == "select5") {
        interaction.update({embeds:[] , components:[] , content:`**Done The Log Of Members Is : <#${interaction.values[0]}> !**`, ephemeral: true })
        db.set(`memberschannel_${interaction.guild.id}` , interaction.values[0])
      }
      if(interaction.customId == "select2") {
        interaction.update({embeds:[] , components:[] , content:`**Done The Log Of Bans & Kicks Is : <#${interaction.values[0]}> !**`, ephemeral: true })
        db.set(`banchannel_${interaction.guild.id}` , interaction.values[0])
      }
      if(interaction.customId == "select3") {
        interaction.update({embeds:[] , components:[] , content:`**Done The Log Of Channels Is : <#${interaction.values[0]}> !**`, ephemeral: true })
        db.set(`channelslog_${interaction.guild.id}` , interaction.values[0])
      }
      if(interaction.customId == "select4") {
        interaction.update({embeds:[] , components:[] , content:`**Done The Log Of Roles Is : <#${interaction.values[0]}> !**`, ephemeral: true })
        db.set(`rolechannel_${interaction.guild.id}` , interaction.values[0])
      }
      if(interaction.customId == "select6") {
        interaction.update({embeds:[] , components:[] , content:`**Done The Log Of thread Is : <#${interaction.values[0]}> !**`, ephemeral: true })
        db.set(`threadLogChannel_${interaction.guild.id}` , interaction.values[0])
      }
            if(interaction.customId == "select7") {
        interaction.update({embeds:[] , components:[] , content:`**Done The Log Of webhook Is : <#${interaction.values[0]}> !**`, ephemeral: true })
        db.set(`webhookLogChannel_${interaction.guild.id}` , interaction.values[0])
      }
                  if(interaction.customId == "select8") {
        interaction.update({embeds:[] , components:[] , content:`**Done The Log Of voice Is : <#${interaction.values[0]}> !**`, ephemeral: true })
        db.set(`voicelog_${interaction.guild.id}` , interaction.values[0])
      }
                        if(interaction.customId == "select9") {
        interaction.update({embeds:[] , components:[] , content:`**Done The Log Of Timeout Is : <#${interaction.values[0]}> !**`, ephemeral: true })
        db.set(`timeoutLogs_${interaction.guild.id}` , interaction.values[0])
      }
                           if(interaction.customId == "sdfsdfxx") {
        interaction.update({embeds:[] , components:[] , content:`**Done! The welcome setup is: <#${interaction.values[0]}>**`, ephemeral: true })
          db.set(`welchannel_${interaction.guild.id}`, interaction.values[0]);
      }
                                 if(interaction.customId == "sgsgqs") {
        interaction.update({embeds:[] , components:[] , content:`**Done! The goodbay setup is: <#${interaction.values[0]}>**`, ephemeral: true })
          db.set(`goodbay_${interaction.guild.id}`, interaction.values[0]);
      }
                              if(interaction.customId == "select10") {
        interaction.update({embeds:[] , components:[] , content:`**Done The Log Of all auditlog Is : <#${interaction.values[0]}> !**`, ephemeral: true })
        db.set(`threadLogChannel_${interaction.guild.id}` , interaction.values[0])                      
        db.set(`webhookLogChannel_${interaction.guild.id}` , interaction.values[0])
        db.set(`voicelog_${interaction.guild.id}` , interaction.values[0])
        db.set(`timeoutLogs_${interaction.guild.id}` , interaction.values[0])
        db.set(`rolechannel_${interaction.guild.id}` , interaction.values[0])
        db.set(`channelslog_${interaction.guild.id}` , interaction.values[0])
        db.set(`banchannel_${interaction.guild.id}` , interaction.values[0])
        db.set(`memberschannel_${interaction.guild.id}` , interaction.values[0])
        db.set(`msgchannel_${interaction.guild.id}` , interaction.values[0])
      }
       }
                              if(interaction.customId == "select11") {
        interaction.update({embeds:[] , components:[] , content:`**Done delete  all auditlog Is  !**`, ephemeral: true })
        db.delete(`threadLogChannel_${interaction.guild.id}`)                      
        db.delete(`webhookLogChannel_${interaction.guild.id}`)
        db.delete(`voicelog_${interaction.guild.id}`)
        db.delete(`timeoutLogs_${interaction.guild.id}`)
        db.delete(`rolechannel_${interaction.guild.id}`)
        db.delete(`channelslog_${interaction.guild.id}`)
        db.delete(`banchannel_${interaction.guild.id}`)
        db.delete(`memberschannel_${interaction.guild.id}`)
        db.delete(`msgchannel_${interaction.guild.id}`)
      }
  });
//////////////////////////////////////////////////////
//developer by ARTEX


client.on("guildMemberTimeout", async (member) => {
  let ch = db.get(`timeoutLogs_${member.guild.id}`);
  if (ch) {
    let channel = member.guild.channels.cache.find((r) => r.id == ch);

    const fetchedLogs = await member.guild.fetchAuditLogs({
      limit: 1,
      type: "MEMBER_TIMEOUT",
    });

    const timeoutLog = fetchedLogs.entries.first();

    const { executor, target } = timeoutLog;

    const embed = new Discord.MessageEmbed()
      .setTitle("Member Timed Out !")
      .setColor('RANDOM')
      .setDescription(`> **Member: ${member.user.tag} (${member.user.id})**\n> **Timed Out By: ${executor.tag} (${executor.id})**`)
      .setAuthor({
        name: `${member.user.username}`,
        iconURL: `${member.user.displayAvatarURL()}`,
      })
      .setFooter({
        text: `${member.guild.name}`,
        iconURL: `${member.guild.iconURL()}`,
      })
      .setThumbnail(`${member.user.displayAvatarURL()}`)
      .setTimestamp();

    channel.send({ embeds: [embed] });
  }
});
//developer by ARTEX

//////////////////////////////////////////////////////
client.on("guildMemberUpdate", async (oldMember, newMember) => {
  if (oldMember.nickname !== newMember.nickname) {
    let logChannelId = db.get(`memberschannel_${newMember.guild.id}`);
    if (logChannelId) {
      let logChannel = newMember.guild.channels.cache.find((r) => r.id == logChannelId);

      const member = newMember;
      const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `${member.user.username}`, iconURL: `${member.user.displayAvatarURL()}` })
        .setThumbnail(`${member.guild.iconURL()}`)
        .setFooter({ text: `${member.guild.name}`, iconURL: `${member.guild.iconURL()}` })
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle("Nickname Changed");
//developer by ARTEX
      if (newMember.user.bot) {
       
        embed.setDescription(`**<@${member.user.id}>'s nickname changed from \`${oldMember.nickname || "None"}\` to \`${newMember.nickname || "None"}\` by a bot.**`);
      } else {
       //developer by ARTEX
        const auditLogs = await newMember.guild.fetchAuditLogs({ limit: 1, type: "MEMBER_UPDATE" });
        const updateLog = auditLogs.entries.first();

        if (updateLog) {
          const { executor } = updateLog;
          embed.setDescription(`**<@${member.user.id}>'s nickname changed from \`${oldMember.nickname || "None"}\` to \`${newMember.nickname || "None"}\` by <@${executor.id}>**`);
        } else {
          embed.setDescription(`**<@${member.user.id}> s nickname changed from \`${oldMember.nickname || "None"}\` to \`${newMember.nickname || "None"}\` (unknown executor)**`);
        }
      }

      logChannel.send({ embeds: [embed] });
    }
  }
});


//developer by ARTEX


//////////////////////////////////////////////////////

client.on("voiceStateUpdate", async (oldState, newState) => {
  let logChannelId = db.get(`voicelog_${newState.guild.id}`);
  if (logChannelId) {
    let logChannel = newState.guild.channels.cache.find((r) => r.id == logChannelId);

    const member = newState.member;
    const embed = new Discord.MessageEmbed()
      .setAuthor({ name: `${member.user.username}`, iconURL: `${member.user.displayAvatarURL()}` })
      .setThumbnail(`${oldState.guild.iconURL()}`)
      .setFooter({ text: `${member.guild.name}`, iconURL: `${member.guild.iconURL()}` })
      .setColor('RANDOM')
      .setTimestamp();

    if (!oldState.channelId && newState.channelId && member.user.bot) {
      // Bot joined a voice channel, do nothing
      return;
    } else if (!oldState.channelId && newState.channelId) {
      embed.setTitle("Member Joined Voice Channel");
      embed.setDescription(`**<@${member.user.id}> joined the voice channel: <#${newState.channel.id}>**`);
    } else if (oldState.channelId && !newState.channelId) {
      embed.setTitle("Member Left Voice Channel");
      embed.setDescription(`**<@${member.user.id}> left the voice channel: <#${oldState.channel.id}>**`);
    } else if (oldState.channelId && newState.channelId && oldState.channelId !== newState.channelId) {
      embed.setTitle("Member Moved Voice Channel");
      const auditLogs = await newState.guild.fetchAuditLogs({ limit: 1, type: "MEMBER_MOVE" });
      const moveLog = auditLogs.entries.first();

      if (moveLog) {
        const { executor } = moveLog;
        embed.setDescription(`**<@${member.user.id}> moved from <#${oldState.channel.id}> to <#${newState.channel.id}> by <@${executor.id}>**`);
      } else {
        embed.setDescription(`**<@${member.user.id}> moved from <#${oldState.channel.id}> to <#${newState.channel.id}>**`);
      }
    }

    logChannel.send({ embeds: [embed] });
  }
});

//developer by ARTEX

//////////////////////////////////////////////////////

client.on("webhookUpdate", async (channel) => {
  if (!channel.isText()) return; // Add this check

  let chCreate = db.get(`webhookLogChannel_${channel.guild.id}`);
  let chDelete = db.get(`webhookLogChannel_${channel.guild.id}`);
//developer by ARTEX
  if (chCreate || chDelete) {
    let channelCreate = channel.guild.channels.cache.find((r) => r.id == chCreate);
    let channelDelete = channel.guild.channels.cache.find((r) => r.id == chDelete);

    if (!channel.oldWebhooks) {
      channel.oldWebhooks = new Map();
    }

    const webhooks = await channel.fetchWebhooks();

    webhooks.forEach((webhook) => {
      if (!channel.oldWebhooks.has(webhook.id)) {
        // Webhook Created
        const embedCreate = new MessageEmbed()
          .setTitle("Webhook Created !")
          .setColor('RANDOM')
          .setDescription(
            `> **Webhook Name: ${webhook.name}**\n> **Channel: <#${channel.id}>**`
          )
.setAuthor({
  name: `${webhook.name}`,
  iconURL: webhook.avatarURL() || "",
})
          .setFooter({
            text: `${channel.guild.name}`,
            iconURL: `${channel.guild.iconURL()}`,
          })
          .setThumbnail(webhook.avatarURL() || "")
          .setTimestamp();

        channelCreate.send({ embeds: [embedCreate] });
      }
    });
//developer by ARTEX
    channel.oldWebhooks.forEach((webhook) => {
      if (!webhooks.has(webhook.id)) {
        // Webhook Deleted
        const embedDelete = new MessageEmbed()
          .setTitle("Webhook Deleted !")
          .setColor('RANDOM')
          .setDescription(
            `> **Webhook Name: ${webhook.name}**\n> **Channel: <#${channel.id}>**`
          )
    .setAuthor({
  name: `${webhook.name}`,
  iconURL: webhook.avatarURL() || "",
})
          .setFooter({
            text: `${channel.guild.name}`,
            iconURL: `${channel.guild.iconURL()}`,
          })
          .setThumbnail(webhook.avatarURL() || "")
          .setTimestamp();
//developer by ARTEX
        channelDelete.send({ embeds: [embedDelete] });
      }
    });

    // Update the oldWebhooks property for the next event
    channel.oldWebhooks = webhooks;
  }
});
//////////////////////////////////////////////////////
//developer by ARTEX



//////////////////////////////////////////////////////
client.on("threadCreate", async (thread) => {
  let ch = db.get(`threadLogChannel_${thread.guild.id}`);
  if (ch) {
    let channel = thread.guild.channels.cache.find((r) => r.id == ch);

    const fetchedLogs = await thread.guild.fetchAuditLogs({
      limit: 1,
      type: "THREAD_CREATE",
    });
//developer by ARTEX
    const threadLog = fetchedLogs.entries.first();

    const { executor, target } = threadLog;

    const embed = new MessageEmbed()
      .setTitle("New Thread Created !")
      .setColor('RANDOM')
      .setDescription(
        `> **Thread Created By : ${executor}**\n> **Thread Name : \`${thread.name}\`**`
      )
      .setAuthor({
        name: `${executor.username}`,
        iconURL: `${executor.displayAvatarURL()}`,
      })
      .setFooter({
        text: `${thread.guild.name}`,
        iconURL: `${thread.guild.iconURL()}`,
      })
      .setThumbnail(`${thread.guild.iconURL()}`)
      .setTimestamp();

    channel.send({ embeds: [embed] });
  }
});

client.on("threadDelete", async (thread) => {
  let ch = db.get(`threadLogChannel_${thread.guild.id}`);
  if (ch) {
    let channel = thread.guild.channels.cache.find((r) => r.id == ch);

    const fetchedLogs = await thread.guild.fetchAuditLogs({
      limit: 1,
      type: "THREAD_DELETE",
    });

    const threadLog = fetchedLogs.entries.first();
//developer by ARTEX
    const { executor, target } = threadLog;

    const embed = new MessageEmbed()
      .setTitle("Thread Deleted !")
      .setColor('RANDOM')
      .setDescription(
        `> **Thread Deleted By : ${executor}**\n> **Thread Name : \`${thread.name}\`**`
      )
      .setAuthor({
        name: `${executor.username}`,
        iconURL: `${executor.displayAvatarURL()}`,
      })
      .setFooter({
        text: `${thread.guild.name}`,
        iconURL: `${thread.guild.iconURL()}`,
      })
      .setThumbnail(`${thread.guild.iconURL()}`)
      .setTimestamp();

    channel.send({ embeds: [embed] });
  }
});
//developer by ARTEX
  //////////////////////////////////////////////////////

client.on("messageDelete", async (message) => {
  if (message.author.bot) return; 

  let ch = db.get(`msgchannel_${message.guild.id}`);
  if (ch) {
    let channel = message.guild.channels.cache.find((r) => r.id == ch);
    const fetchedLogs = await message.guild.fetchAuditLogs({
      limit: 1,
      type: "MESSAGE_DELETE",
    });
//developer by ARTEX
    const deletionLog = fetchedLogs.entries.first();

    const { executor, target } = deletionLog;

    const embed = new Discord.MessageEmbed()
      .setTitle("New Message Deleted!")
      .setDescription(`> **Message: ${message.content}**\n> **Sent By: <@${message.member.id}>**\n> **Deleted By: ${executor}**\n> **In: ${message.channel}**`)
      .setColor('RANDOM')
      .setAuthor({ name: `${message.member.user.username}`, iconURL: `${message.member.displayAvatarURL()}` })
      .setFooter({ text: `${message.guild.name}`, iconURL: `${message.guild.iconURL()}` })
      .setTimestamp();
    channel.send({ embeds: [embed] });
  }
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return; //developer by ARTEX

  let ch = db.get(`msgchannel_${oldMessage.guild.id}`);
  if (ch) {
    let channel = oldMessage.guild.channels.cache.find((r) => r.id == ch);
    const embed = new Discord.MessageEmbed()
      .setTitle("New Message Edited!")
      .setColor('RANDOM')
      .setDescription(`> **Sent By: <@${oldMessage.member.id}> In: ${oldMessage.channel} [Message Link](${oldMessage.url})**\n\n> **Old Message:**\n\`\`\`${oldMessage.content}\`\`\`\n> **New Message:**\n\`\`\`${newMessage.content}\`\`\``)
      .setAuthor({ name: `${oldMessage.member.user.username}`, iconURL: `${oldMessage.member.displayAvatarURL()}` })
      .setFooter({ text: `${oldMessage.guild.name}`, iconURL: `${oldMessage.guild.iconURL()}` })
      .setTimestamp();
    channel.send({ embeds: [embed] });
  }
});


  //////////////////////////////////////////////////////

  client.on("guildMemberAdd" , member => {
    let ch = db.get(`memberschannel_${member.guild.id}`)
    if(ch) {
      let channel = member.guild.channels.cache.find(r=>r.id == ch)
      const embed = new Discord.MessageEmbed()
      .setTitle("New Member Joined !")
        .setColor('RANDOM')
      .setDescription(`${member} **Joined The Server **`)
      .setAuthor({name:`${member.user.username}` , iconURL:`${member.user.displayAvatarURL()}`})
      .setFooter({text:`${member.guild.name}` , iconURL:`${member.guild.iconURL()}`})
      .setThumbnail(`${member.user.displayAvatarURL()}`)
      .setTimestamp()
      channel.send({embeds:[embed]})

    }
  });

  client.on("guildMemberRemove" , member => {
    let ch = db.get(`memberschannel_${member.guild.id}`)
    if(ch) {
      let channel = member.guild.channels.cache.find(r=>r.id == ch)
      const embed = new Discord.MessageEmbed()
      .setTitle("Member Left !")
        .setColor('RANDOM')
      .setDescription(`${member} **Left The Server **`)
      .setAuthor({name:`${member.user.username}` , iconURL:`${member.user.displayAvatarURL()}`})
      .setFooter({text:`${member.guild.name}` , iconURL:`${member.guild.iconURL()}`})
      .setThumbnail(`${member.user.displayAvatarURL()}`)
      .setTimestamp()
      channel.send({embeds:[embed]})

    }
  });

  //////////////////////////////////////////////////////

  client.on("guildMemberRemove", async member => {
    let ch = db.get(`banchannel_${member.guild.id}`)
    if(ch) {
    let channel = member.guild.channels.cache.find(r=>r.id == ch)

    const fetchedLogs = await member.guild.fetchAuditLogs({
      limit: 1,
      type:"MEMBER_KICK"
    });
    const kickLog = fetchedLogs.entries.first();
    
    const { executor, target } = kickLog;
  
    if (target.id === member.id) {
      const embed = new Discord.MessageEmbed()
      .setTitle("New Member Kicked !")
        .setColor('RANDOM')
      .setDescription(`> **Member : ${member.user}**\n> **Kicked By : ${executor}**`)
      .setAuthor({name:`${member.user.username}` , iconURL:`${member.user.displayAvatarURL()}`})
      .setFooter({text:`${executor.username}` , iconURL:`${executor.displayAvatarURL()}`})
      .setThumbnail(`${member.user.displayAvatarURL()}`)
      .setTimestamp()
      channel.send({embeds:[embed]})
    } 
    }//developer by ARTEX
  });

  client.on("guildBanAdd", async ban => {
    let ch = db.get(`banchannel_${ban.guild.id}`)
    if(ch) {
    let channel = ban.guild.channels.cache.find(r=>r.id == ch)

    const fetchedLogs = await ban.guild.fetchAuditLogs({
      limit: 1,
      type:"MEMBER_BAN_ADD",//developer by ARTEX
    });

    const banLog = fetchedLogs.entries.first();
    
    const { executor, target } = banLog;
  
    if (target.id === ban.user.id) {
      const embed = new Discord.MessageEmbed()
      .setTitle("New Member Banned ✈ !")
        .setColor('RANDOM')
      .setDescription(`> **Member : ${ban.user}**\n> **Banned By : ${executor}**`)
      .setAuthor({name:`${ban.user.username}` , iconURL:`${ban.user.displayAvatarURL()}`})
      .setFooter({text:`${executor.username}` , iconURL:`${executor.displayAvatarURL()}`})
      .setThumbnail(`${ban.user.displayAvatarURL()}`)
      .setTimestamp()
      channel.send({embeds:[embed]})
    } 
    }
  });

  client.on("guildBanRemove", async ban => {
    let ch = db.get(`banchannel_${ban.guild.id}`)
    if(ch) {
    let channel = ban.guild.channels.cache.find(r=>r.id == ch)

    const fetchedLogs = await ban.guild.fetchAuditLogs({
      limit: 1,//developer by ARTEX
      type:"MEMBER_BAN_REMOVE",
    });

    const banLog = fetchedLogs.entries.first();
    
    const { executor, target } = banLog;
  
    if (target.id === ban.user.id) {
      const embed = new Discord.MessageEmbed()
      .setTitle("New Member Unbanned !")
        .setColor('RANDOM')
      .setDescription(`> **Member : ${ban.user}**\n> **Unbanned By : ${executor}**`)
      .setAuthor({name:`${ban.user.username}` , iconURL:`${ban.user.displayAvatarURL()}`})
      .setFooter({text:`${executor.username}` , iconURL:`${executor.displayAvatarURL()}`})
      .setThumbnail(`${ban.user.displayAvatarURL()}`)
      .setTimestamp()
      channel.send({embeds:[embed]})
    } 
    }
  });

  //////////////////////////////////////////////////////

  client.on("channelCreate" , async channel => {
    let ch = db.get(`channelslog_${channel.guild.id}`)
    if(ch) {
    let channel2 = channel.guild.channels.cache.find(r=>r.id == ch)

    const fetchedLogs = await channel.guild.fetchAuditLogs({
      limit: 1,//developer by ARTEX
      type:"CHANNEL_CREATE"
    });

    const channellog = fetchedLogs.entries.first();
    
    const { executor, target } = channellog;

    const embed = new Discord.MessageEmbed()
    .setTitle("New Channel Created !")
      .setColor('RANDOM')
    .setDescription(`> **Channel Created By : ${executor}**\n> **Channel Name : \`${channel.name}\`**`)
    .setAuthor({name:`${executor.username}` , iconURL:`${executor.displayAvatarURL()}`})
    .setFooter({text:`${channel.guild.name}` , iconURL:`${channel.guild.iconURL()}`})
    .setThumbnail(`${channel.guild.iconURL()}`)
    .setTimestamp()
    channel2.send({embeds:[embed]})
  }
  });

  client.on("channelDelete" , async channel => {
    let ch = db.get(`channelslog_${channel.guild.id}`)
    if(ch) {
    let channel2 = channel.guild.channels.cache.find(r=>r.id == ch)

    const fetchedLogs = await channel.guild.fetchAuditLogs({
      limit: 1,
      type:"CHANNEL_DELETE"//developer by ARTEX
    });

    const channellog = fetchedLogs.entries.first();
    
    const { executor, target } = channellog;

    const embed = new Discord.MessageEmbed()
    .setTitle("New Channel Deleted !")
      .setColor('RANDOM')
    .setDescription(`> **Channel Deleted By : ${executor}**\n> **Channel Name : \`${channel.name}\`**`)
    .setAuthor({name:`${executor.username}` , iconURL:`${executor.displayAvatarURL()}`})
    .setFooter({text:`${channel.guild.name}` , iconURL:`${channel.guild.iconURL()}`})
    .setThumbnail(`${channel.guild.iconURL()}`)
    .setTimestamp()
    channel2.send({embeds:[embed]})
  }
  });

  client.on("channelUpdate" , async (oldChannel , newChannel) => {
    let ch = db.get(`channelslog_${oldChannel.guild.id}`)
    if(ch) {
    let channel = oldChannel.guild.channels.cache.find(r=>r.id == ch)

    const fetchedLogs = await oldChannel.guild.fetchAuditLogs({
      limit: 1,
      type:"CHANNEL_UPTADE"
    });//developer by ARTEX

    const channellog = fetchedLogs.entries.first();
    
    const { executor, target } = channellog;

    const embed = new Discord.MessageEmbed()
    .setTitle("Channel Uptaded !")
      .setColor('RANDOM')
    .setDescription(`> **Channel Uptaded By : ${executor}**\n\n> **Old Channel Name :**\n\`\`\`${oldChannel.name}\`\`\`\n> **New Channel Name :**\n\`\`\`${newChannel.name}\`\`\``)
    .setAuthor({name:`${executor.username}` , iconURL:`${executor.displayAvatarURL()}`})
    .setFooter({text:`${oldChannel.guild.name}` , iconURL:`${oldChannel.guild.iconURL()}`})
    .setThumbnail(`${oldChannel.guild.iconURL()}`)
    .setTimestamp()
    channel.send({embeds:[embed]})
  }
  });

  //////////////////////////////////////////////////////
client.on("guildMemberUpdate", async (oldMember, newMember) => {
  let chAdd = db.get(`rolechannel_${oldMember.guild.id}`);
  let chRemove = db.get(`rolechannel_${oldMember.guild.id}`);

  if (chAdd || chRemove) {//developer by ARTEX
    let channelAdd = oldMember.guild.channels.cache.find((r) => r.id == chAdd);
    let channelRemove = oldMember.guild.channels.cache.find((r) => r.id == chRemove);

    const addedRoles = newMember.roles.cache.filter(
      (role) => !oldMember.roles.cache.has(role.id)
    );
    const removedRoles = oldMember.roles.cache.filter(
      (role) => !newMember.roles.cache.has(role.id)
    );

    if (addedRoles.size > 0) {
      const embedAdd = new MessageEmbed()
        .setTitle("Role(s) Added to User !")
        .setColor('RANDOM')
        .setDescription(
          `> **Roles Added: ${addedRoles.map((r) => `<@&${r.id}>`).join(", ")}**`
        )
        .setAuthor({//developer by ARTEX
          name: `${newMember.user.username}`,
          iconURL: `${newMember.user.displayAvatarURL()}`,
        })
        .setFooter({
          text: `${newMember.guild.name}`,
          iconURL: `${newMember.guild.iconURL()}`,
        })
        .setThumbnail(`${newMember.user.displayAvatarURL()}`)
        .setTimestamp();

      channelAdd.send({ embeds: [embedAdd] });
    }

    if (removedRoles.size > 0) {
      const embedRemove = new MessageEmbed()
        .setTitle("Role(s) Removed from User !")
        .setColor('RANDOM')
        .setDescription(
          `> **Roles Removed: ${removedRoles
            .map((r) => `<@&${r.id}>`)
            .join(", ")}**`
        )
        .setAuthor({
          name: `${newMember.user.username}`,
          iconURL: `${newMember.user.displayAvatarURL()}`,
        })
        .setFooter({//developer by ARTEX
          text: `${newMember.guild.name}`,
          iconURL: `${newMember.guild.iconURL()}`,
        })
        .setThumbnail(`${newMember.user.displayAvatarURL()}`)
        .setTimestamp();

      channelRemove.send({ embeds: [embedRemove] });
    }
  }
});

  client.on("roleCreate" , async role => {
    let ch = db.get(`rolechannel_${role.guild.id}`)
    if(ch) {
    let channel = role.guild.channels.cache.find(r=>r.id == ch)

    const fetchedLogs = await role.guild.fetchAuditLogs({
      limit: 1,
      type:"ROLE_CREATE"
    });

    const rolelog = fetchedLogs.entries.first();
    
    const { executor, target } = rolelog;

    const embed = new Discord.MessageEmbed()
    .setTitle("New Role Created !")
      .setColor('RANDOM')
    .setDescription(`> **Role Created By : ${executor}**\n> **Role Name : \`${role.name}\`**`)
    .setAuthor({name:`${executor.username}` , iconURL:`${executor.displayAvatarURL()}`})
    .setFooter({text:`${role.guild.name}` , iconURL:`${role.guild.iconURL()}`})
    .setThumbnail(`${role.guild.iconURL()}`)
    .setTimestamp()
    channel.send({embeds:[embed]})
  }
  });

  client.on("roleUpdate" , async (oldRole , newRole) => {
    let ch = db.get(`rolechannel_${oldRole.guild.id}`)
    if(ch) {
    let channel = oldRole.guild.channels.cache.find(r=>r.id == ch)

    const fetchedLogs = await oldRole.guild.fetchAuditLogs({
      limit: 1,
      type:"ROLE_UPTADE"
    });

    const rolelog = fetchedLogs.entries.first();
    
    const { executor, target } = rolelog;

    const perms = newRole.permissions.toArray().map(e => {
      const words = e.split("_").map(x => x[0] + x.slice(1).toLowerCase());
      return words.join(" ");
   }).join("\n");

    const embed = new Discord.MessageEmbed()
    .setTitle("Role Uptaded !")//developer by ARTEX
      .setColor('RANDOM')
    .setDescription(`> **Role Uptaded By : ${executor}**\n\n> **Old Role Name :**\n\`\`\`${oldRole.name}\`\`\`\n> **New Role Name :**\n\`\`\`${newRole.name}\`\`\`\n> **New Role Color : ${newRole.color}**\n> **New Role Permissions :**\n\`\`\`${perms}\`\`\``)
    .setAuthor({name:`${executor.username}` , iconURL:`${executor.displayAvatarURL()}`})
    .setFooter({text:`${oldRole.guild.name}` , iconURL:`${oldRole.guild.iconURL()}`})
    .setThumbnail(`${oldRole.guild.iconURL()}`)
    .setTimestamp()
    channel.send({embeds:[embed]})
  }
  });

  client.on("roleDelete" , async role => {
    let ch = db.get(`rolechannel_${role.guild.id}`)
    if(ch) {
    let channel = role.guild.channels.cache.find(r=>r.id == ch)

    const fetchedLogs = await role.guild.fetchAuditLogs({
      limit: 1,
      type:"ROLE_DELETE"
    });
//developer by ARTEX
    const rolelog = fetchedLogs.entries.first();
    
    const { executor, target } = rolelog;

    const embed = new Discord.MessageEmbed()
    .setTitle("New Role Deleted !")
      .setColor('RANDOM')
    .setDescription(`> **Role Deleted By : ${executor}**\n> **Role Name : \`${role.name}\`**`)
    .setAuthor({name:`${executor.username}` , iconURL:`${executor.displayAvatarURL()}`})
    .setFooter({text:`${role.guild.name}` , iconURL:`${role.guild.iconURL()}`})
    .setThumbnail(`${role.guild.iconURL()}`)
    .setTimestamp()
    channel.send({embeds:[embed]})
  }
  });
