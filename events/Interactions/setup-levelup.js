const client = require("../../index");
const db = require('quick.db');
const { TextInputComponent, Modal, MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require('discord.js');
const SQLite = require("better-sqlite3");
const sql = new SQLite('./mainDB.sqlite')
client.setMaxListeners(999);

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === "level_app") {
    const levelupModal = new Modal()
      .setCustomId("levelupModal")
      .setTitle("setup level up Background");

    const askStaff1 = new TextInputComponent()
      .setCustomId("askStaff1")
      .setLabel("put your link image")
      .setMinLength(4)
      .setMaxLength(500)
      .setRequired(true)
      .setPlaceholder("Type here")
      .setStyle("PARAGRAPH");

    const staffActionRow1 = new MessageActionRow().addComponents(askStaff1);

      levelupModal.addComponents(staffActionRow1);

    await interaction.showModal(levelupModal);
  }


  if (interaction.customId === "message_level") {
    const levelmessageModal = new Modal()
      .setCustomId("levelmessageModal")
      .setTitle("Setup level Message");

    const askDesigner1 = new TextInputComponent()
      .setCustomId("askDesigner1")
      .setLabel("put your message level")
      .setMinLength(4)
      .setMaxLength(1000)
      .setRequired(true)
      .setPlaceholder("Example: {member} {xp} {level}")
      .setStyle("PARAGRAPH");

    const designerActionRow1 = new MessageActionRow().addComponents(askDesigner1);

      levelmessageModal.addComponents(designerActionRow1);

    await interaction.showModal(levelmessageModal);
  }

  if (interaction.customId === "levl_channel_app") {
    const levelmeddModal = new Modal()
      .setCustomId("levelmeddModal")
      .setTitle("Setup levelup channel id");

    const channelgner1 = new TextInputComponent()
      .setCustomId("channelgner1")
      .setLabel("put your levelup channel id")
      .setMinLength(4)
      .setMaxLength(1000)
      .setRequired(true)
      .setPlaceholder("here")
      .setStyle("SHORT");

    const hannelnRow1 = new MessageActionRow().addComponents(channelgner1);

    levelmeddModal.addComponents(hannelnRow1);

    await interaction.showModal(levelmeddModal);
  }
  if (interaction.customId === "levl_colorv_app") {
    const ssvlevelmeddModal = new Modal()
      .setCustomId("ssvlevelmeddModal")
      .setTitle("Setup avatar color");

    const channelgner1 = new TextInputComponent()
      .setCustomId("channelgner1")
      .setLabel("put your avatar color")
      .setMinLength(4)
      .setMaxLength(1000)
      .setRequired(true)
      .setPlaceholder("here")
      .setStyle("SHORT");

    const hannelnRow1 = new MessageActionRow().addComponents(channelgner1);

      ssvlevelmeddModal.addComponents(hannelnRow1);

    await interaction.showModal(ssvlevelmeddModal);
  }
  if (interaction.customId === "levl_colorb_app") {
    const ssvlerthrdModal = new Modal()
      .setCustomId("ssvlerthrdModal")
      .setTitle("Setup banner color");

    const channelgner1 = new TextInputComponent()
      .setCustomId("channelgner1")
      .setLabel("put your banner color")
      .setMinLength(4)
      .setMaxLength(1000)
      .setRequired(true)
      .setPlaceholder("here")
      .setStyle("SHORT");

    const hannelnRow1 = new MessageActionRow().addComponents(channelgner1);

        ssvlerthrdModal.addComponents(hannelnRow1);

    await interaction.showModal(ssvlerthrdModal);
  }
});

client.on('interactionCreate', async (modal) => {
  if (modal.isModalSubmit()) {
    if (modal.customId === 'levelupModal') {
      const ask1 = modal.fields.getTextInputValue('askStaff1');
      db.set(`level_url_${modal.guild.id}`, ask1);
      await modal.reply({ content: '✅ levelup card background image set!', ephemeral: true });

    } else if (modal.customId === 'levelmessageModal') {
      const ask1 = modal.fields.getTextInputValue('askDesigner1');
      sql.prepare(`INSERT OR REPLACE INTO settings (guild, levelUpMessage, customXP, customCooldown) VALUES (?,?,?,?)`).run(modal.guild.id, ask1, 16, 1000);
      await modal.reply({ content: '✅ Message of the levelup image set!', ephemeral: true });
    } else if (modal.customId === 'levelmeddModal') {
      const ask1 = modal.fields.getTextInputValue('channelgner1');
      sql.prepare("INSERT OR REPLACE INTO channel (guild, channel) VALUES (?, ?);").run(modal.guild.id, ask1);
      await modal.reply({ content: `✅ Channel of the levelup set! <#${ask1}>`, ephemeral: true });
    } else if (modal.customId === 'ssvlevelmeddModal') {
      const ask1 = modal.fields.getTextInputValue('channelgner1');
      db.set(`level_colorv_${modal.guild.id}`, ask1);
      await modal.reply({ content: `✅ color of the levelup avatar set!`, ephemeral: true });
    } else if (modal.customId === 'ssvlerthrdModal') {
      const ask1 = modal.fields.getTextInputValue('channelgner1');
      db.set(`level_colorb_${modal.guild.id}`, ask1);
      await modal.reply({ content: `✅ color of the levelup banner set!`, ephemeral: true });
    }
  }
});
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isSelectMenu()) return;

  if (interaction.customId === 'selectlevel') {
    const selectedOption = interaction.values[0];
    if (selectedOption === 'level_background') {
      db.delete(`level_url_${interaction.guild.id}`);
      await interaction.reply({ content: 'level background deleted.', ephemeral: true });
    } else if (selectedOption === 'level_color') {
      db.delete(`level_colorb_${interaction.guild.id}`);
      db.delete(`level_colorv_${interaction.guild.id}`);
      await interaction.reply({ content: 'level color deleted.', ephemeral: true });
    }
  }
});

client.on("interactionCreate", interaction => {
  if (!interaction.isButton()) return;
  if (interaction.customId == "levelups") {

    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId('levelupss')
        .setPlaceholder('Select The levelup channel')
    )
    interaction.guild.channels.cache.first(24).forEach(channel => {
      if (channel.isText()) {
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
        .setCustomId(`levl_channel_app`)
        .setStyle(`SUCCESS`)
    );
    interaction.reply({ components: [row, rows], ephemeral: true })
  }
});

client.on("interactionCreate", interaction => {
  if (interaction.isSelectMenu()) {
    if (interaction.customId == "levelupss") {
      interaction.reply({ embeds: [], components: [], content: `**Done! The levelup setup is: <#${interaction.values[0]}>**`, ephemeral: true });
      sql.prepare("INSERT OR REPLACE INTO channel (guild, channel) VALUES (?, ?);").run(interaction.guild.id, interaction.values[0]);
    }
  }
});



client.on("interactionCreate", interaction => {
  if (!interaction.isButton()) return;
  if (interaction.customId == "leesefs") {
    let embed = new MessageEmbed()
      .setAuthor(`${interaction.guild.name}`, interaction.guild.iconURL() || null)
      .setTitle(`custom levelup image`)
      .setImage('https://media.discordapp.net/attachments/1200966717279580180/1208114832125988984/level_up.png?ex=65e21b9d&is=65cfa69d&hm=e46743eeef2e5ee2f5af03ab42486e1661c34d75595b0287ce103856715923eb&=&format=webp&quality=lossless')
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter(`${interaction.guild.name}`, interaction.guild.iconURL() || null);

     interaction.reply({ embeds: [embed], ephemeral: true })
  }
});
