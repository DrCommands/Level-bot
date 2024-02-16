const client = require("../../index");
const db = require('quick.db');
const { TextInputComponent, Modal, Collection, Discord, MessageSelectMenu, MessageActionRow } = require('discord.js');

client.setMaxListeners(50); 

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;


  if (interaction.customId === "goodbay_app_background") {
    const goodbayModal = new Modal()
      .setCustomId("goodbayModal")
      .setTitle("setup goodbay Background");

    const askStaff1 = new TextInputComponent() 
      .setCustomId("askStaff1")
      .setLabel("put you link image")
      .setMinLength(4)
      .setMaxLength(500)
      .setRequired(true)
      .setPlaceholder("Type here")
       .setStyle("PARAGRAPH");

    const staffActionRow1 = new MessageActionRow().addComponents(askStaff1);

    goodbayModal.addComponents(staffActionRow1);

    await interaction.showModal(goodbayModal);
  }

  
  if (interaction.customId === "goodbay_app_color") {
    const goodbaycolorModal = new Modal()
      .setCustomId("goodbaycolorModal")
      .setTitle("setup goodbay color");

    const askRadio1 = new TextInputComponent()
      .setCustomId("askRadio1")
      .setLabel("put you color")
      .setMinLength(4) 
      .setMaxLength(100)
      .setRequired(true)
      .setPlaceholder("Type here")
       .setStyle("SHORT");

    const radioActionRow1 = new MessageActionRow().addComponents(askRadio1);

    goodbaycolorModal.addComponents(radioActionRow1);

    await interaction.showModal(goodbaycolorModal);
  }

  if (interaction.customId === "goodbay_app_message") {
    const goodbaymessageModal = new Modal()
      .setCustomId("goodbaymessageModal")
      .setTitle("Setup goodbay Message");

    const askDesigner1 = new TextInputComponent() 
      .setCustomId("askDesigner1")
      .setLabel("put your messge goodbay")
      .setMinLength(4)
      .setMaxLength(1000)
      .setRequired(true)
      .setPlaceholder("Example:[username] [tag] [servername] [mention]  [rank]")
      .setStyle("PARAGRAPH");

    const designerActionRow1 = new MessageActionRow().addComponents(askDesigner1);

    goodbaymessageModal.addComponents(designerActionRow1);

    await interaction.showModal(goodbaymessageModal);
  }

  if (interaction.customId === "cqsqhannel_app") {
    const meddddModal = new Modal()
      .setCustomId("meddddModal")
      .setTitle("Setup goodbay channel id");

    const sdfggsdsd = new TextInputComponent()
      .setCustomId("sdfggsdsd")
      .setLabel("put your goodbay channel id")
      .setMinLength(4)
      .setMaxLength(1000)
      .setRequired(true)
      .setPlaceholder("here")
      .setStyle("SHORT");

    const hannelnRow1 = new MessageActionRow().addComponents(sdfggsdsd);

    meddddModal.addComponents(hannelnRow1);

    await interaction.showModal(meddddModal);
  }
});;


client.on('interactionCreate', modal => {
   
  if (modal.isModalSubmit()) {
    if (modal.customId === 'goodbayModal') {
    
      const ask1 = modal.fields.getTextInputValue('askStaff1');
      db.set(`goodbayurl_${modal.guild.id}`, ask1);
      modal.reply({ content: '✅ goodbay card background image set!', ephemeral: true });
    } else if (modal.customId === 'goodbaycolorModal') {

      const ask1 = modal.fields.getTextInputValue('askRadio1');
      db.set(`goodbaycolor_${modal.guild.id}`, ask1);
      modal.reply({ content: '✅ Color of the goodbay image set!', ephemeral: true });
    } else if (modal.customId === 'goodbaymessageModal') {

      const ask1 = modal.fields.getTextInputValue('askDesigner1');
      db.set(`gedmsg_${modal.guild.id}`, ask1);
      modal.reply({ content: '✅ Message of the goodbay image set!', ephemeral: true });
  
    } else if (modal.customId === 'meddddModal') {
      const ask1 = modal.fields.getTextInputValue('sdfggsdsd');
      db.set(`goodbay_${modal.guild.id}`, ask1);
      modal.reply({ content: `✅ Channel of the goodbay set! <#${ask1}>`, ephemeral: true });
    }
  }
});


 

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isSelectMenu()) return;

    if (interaction.customId === 'select') {
      
        const selectedOption = interaction.values[0];
        if (selectedOption === 'dddelete_background') { 
            db.delete(`goodbayurl_${interaction.guild.id}`);
            await interaction.reply({ content: 'goodbay background deleted.', ephemeral: true });
        } else if (selectedOption === 'dddelete_message') {
            db.delete(`goodbayinfo_${interaction.guild.id}`);
            await interaction.reply({ content: 'goodbay message deleted.', ephemeral: true });
        } else if (selectedOption === 'dddelete_color') {
            db.delete(`goodbaycolor_${interaction.guild.id}`);
            await interaction.reply({ content: 'goodbay color deleted.', ephemeral: true });
        }
    }
});
