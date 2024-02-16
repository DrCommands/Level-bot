const { Client, ContextMenuInteraction } = module.require("discord.js");

module.exports = {
    name: 'Kill A User',
    description: 'Kill another user or yourself',
    category: 'Context',
    userPermissions: [],
    type: 'USER',
    emoji: "📡",
      /** 
     * @param {Client} client 
     * @param {ContextMenuInteraction} interaction 
     * @param {String[]} args 
     */
  run: async (client, interaction, args) => {
    const target = await client.users.fetch(interaction.targetId);
    let author = interaction.member;
    var kills = [
      ` after a long day, plops down on the couch with ${target} and turns on The Big Bang Theory. After a Sheldon Cooper joke, ${target} laughs uncontrollably as they die.`,
      `${author} Alt+F4'd ${target}.exe!`,
      `${author} attempted to play a flute, exploding the head of ${target}.`,
      `${author} blew his ear drums out listening to music too hard.`,
      `${author} challenges ${target} to a fist fight to the death. ${target} wins.`,
      `${target} died after playing with an edgy razor blade fidget spinner.`,
      `${target} died after realizing how shitty their grammar was`,
      `${target} died after trying to out-meme Dank Memer.`,
      `${target} died an honorable death. Death by snoo snoo.`,
      `${target} died because RemindMeBot forgot to remind them to breathe`,
      `${target} died because they started playing with a fidget spinner but they realise its 2016 so you start fapping to the old witch in snow white and obama starts mowing their lawn and they jump out of the window and get ripped to pieces by Obama's lawn mower`,
      `${target} died due to ${author} being so stupid`,
      `${target} died due to eating WAY too many hotdogs in preparation for their date Friday night.`,
      `${target} dies from watching the emoji movie and enjoying it.`,
      `${target} dies in a horrible accident, and it was engineered by ${author}.`,
      `${target} dies north of the wall and transforms into a white walker`,
      `${target} dies of AIDS.`,
      `${target} dies of dysentery.`,
      `${target} dies of natural causes.`,
      `${target} dies of starvation.`,
      `${target} dies on death row via lethal injection after murdering ${author} and their family.`,
      `${target} dies, but don't let this distract you from the fact that in 1998, The Undertaker threw Mankind off Hell In A Cell, and plummeted 16 ft through an announcer’s table`,
      `${target} dies.`,
      `After a struggle, ${target} kills ${author}`,
      `${target} disappeared from the universe.`,
      `${target} drank some toxic soda before it was recalled.`,
      `${target} dropped a Nokia phone on their face and split their skull.`,
      `${target} drowned in their own tears.`,
      `${target} eats too much copypasta and explodes`,
      `${target} fell down a cliff while playing Pokemon Go. Good job on keeping your nose in that puny phone. :iphone:`,
      `${target} is sucked into Minecraft. ${target}, being a noob at the so called Real-Life Minecraft faces the Game Over screen.`,
      `${target} killed themselves after seeing the normie memes that ${author} posts.`,
      `${target} watched the Emoji Movie and died of sheer cringe.`,
      `${target} went on a ride with a lead balloon.`,
      `After getting pushed into the ocean by ${author}, ${target} is eaten by a shark.`,
      `After raid of roblox kids entered the server, ${target} died of cancer.`,
      `Aids, ${target} died from aids.`,
      `Calling upon the divine powers, ${author} smites ${target} and their heathen ways`,
      `In a sudden turn of events, I **don't** kill ${target}.`,
      `no u`,
      `Our lord and savior Gaben strikes ${target} with a lighting bolt.`,
      `Sorry, ${author}, I don't like killing people.`,
      `The bullet missed Harambe and hit ${target} instead. Yay for Harambe!`,
      `While performing colonoscopy on an elephant, ${target} gets their head stuck in the elephants rectum and chokes.`,
    ];
    await interaction.followUp(kills[Math.floor(Math.random() * kills.length)]);
  },
};