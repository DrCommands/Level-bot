const client = require("../../index");
const db = require('quick.db');
const { TextInputComponent, Modal, MessageActionRow } = require('discord.js');

client.setMaxListeners(50);

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === "welcome_app") {
    const welcomeModal = new Modal()
      .setCustomId("welcomeModal")
      .setTitle("setup Welcome Background");

    const askStaff1 = new TextInputComponent()
      .setCustomId("askStaff1")
      .setLabel("put your link image")
      .setMinLength(4)
      .setMaxLength(500)
      .setRequired(true)
      .setPlaceholder("Type here")
      .setStyle("PARAGRAPH");

    const staffActionRow1 = new MessageActionRow().addComponents(askStaff1);

    welcomeModal.addComponents(staffActionRow1);

    await interaction.showModal(welcomeModal);
  }

  if (interaction.customId === "color_app") {
    const colorModal = new Modal()
      .setCustomId("colorModal")
      .setTitle("setup welcome color");

    const askRadio1 = new TextInputComponent()
      .setCustomId("askRadio1")
      .setLabel("put your color")
      .setMinLength(4)
      .setMaxLength(100)
      .setRequired(true)
      .setPlaceholder("Type here")
      .setStyle("SHORT");

    const radioActionRow1 = new MessageActionRow().addComponents(askRadio1);

    colorModal.addComponents(radioActionRow1);

    await interaction.showModal(colorModal);
  }

  if (interaction.customId === "message_app") {
    const messageModal = new Modal()
      .setCustomId("messageModal")
      .setTitle("Setup Welcome Message");

    const askDesigner1 = new TextInputComponent()
      .setCustomId("askDesigner1")
      .setLabel("put your message welcome")
      .setMinLength(4)
      .setMaxLength(1000)
      .setRequired(true)
      .setPlaceholder("Example:[username] [tag] [servername] [mention] [invitername] [inviter] [invitecount] [rank]")
      .setStyle("PARAGRAPH");

    const designerActionRow1 = new MessageActionRow().addComponents(askDesigner1);

    messageModal.addComponents(designerActionRow1);

    await interaction.showModal(messageModal);
  }

  if (interaction.customId === "channel_app") {
    const meddModal = new Modal()
      .setCustomId("meddModal")
      .setTitle("Setup Welcome channel id");

    const channelgner1 = new TextInputComponent()
      .setCustomId("channelgner1")
      .setLabel("put your welcome channel id")
      .setMinLength(4)
      .setMaxLength(1000)
      .setRequired(true)
      .setPlaceholder("here")
      .setStyle("SHORT");

    const hannelnRow1 = new MessageActionRow().addComponents(channelgner1);

    meddModal.addComponents(hannelnRow1);

    await interaction.showModal(meddModal);
  } 
});
  
client.on('interactionCreate', async (modal) => {
  if (modal.isModalSubmit()) {
    if (modal.customId === 'welcomeModal') {
      const ask1 = modal.fields.getTextInputValue('askStaff1');
      db.set(`url_${modal.guild.id}`, ask1);
      modal.reply({ content: '✅ Welcome card background image set!', ephemeral: true });
    } else if (modal.customId === 'colorModal') {
      const ask1 = modal.fields.getTextInputValue('askRadio1');
      db.set(`color_${modal.guild.id}`, ask1);
      modal.reply({ content: '✅ Color of the welcome image set!', ephemeral: true });
    } else if (modal.customId === 'messageModal') {
      const ask1 = modal.fields.getTextInputValue('askDesigner1');
      db.set(`info_${modal.guild.id}`, ask1);
      modal.reply({ content: '✅ Message of the welcome image set!', ephemeral: true });
    } else if (modal.customId === 'meddModal') {
      const ask1 = modal.fields.getTextInputValue('channelgner1');
      db.set(`welchannel_${modal.guild.id}`, ask1);
      modal.reply({ content: `✅ Channel of the welcome set! <#${ask1}>`, ephemeral: true });
    }
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isSelectMenu()) return;

  if (interaction.customId === 'select') {
    const selectedOption = interaction.values[0];
    if (selectedOption === 'delete_background') {
      db.delete(`url_${interaction.guild.id}`);
      await interaction.reply({ content: 'Welcome background deleted.', ephemeral: true });
    } else if (selectedOption === 'delete_message') {
      db.delete(`info_${interaction.guild.id}`);
      await interaction.reply({ content: 'Welcome message deleted.', ephemeral: true });
    } else if (selectedOption === 'delete_color') {
      db.delete(`color_${interaction.guild.id}`);
      await interaction.reply({ content: 'Welcome color deleted.', ephemeral: true });
    }
  }
});
