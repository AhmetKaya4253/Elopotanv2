const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const db = require('croxydb');
exports.run = async(client, message, args) => {
let dil = await db.get(`dil_${message.guild.id}`)
let prefix = "!"

 if (!dil) return message.channel.send(new AsreaperDiscord.MessageEmbed()
    .setDescription(`Komutu kullanmak için dil ayarlaman gerekiyor. \n**${prefix}dil-sistemi tr_TR** \n\nTo use the command, you need to set a language. \n**${prefix}lang-system en_US**`)
    .setColor("RED"))


  const AsreaperEmbed = new AsreaperDiscord.MessageEmbed();
    if(dil === 'tr_TR') {
  AsreaperEmbed.setColor(0x36393F)
  AsreaperEmbed.setDescription(` Elopotan Botu davet etmek için [buraya]( https://discord.com/api/oauth2/authorize?client_id=1091016052533645382&permissions=8&scope=bot) tıkla!`)
  message.channel.send(AsreaperEmbed)
  }
    if(dil === 'en_US') {
  AsreaperEmbed.setColor(0x36393F)
  AsreaperEmbed.setDescription(` Click [here]( https://discord.com/api/oauth2/authorize?client_id=1091016052533645382&permissions=8&scope=bot) to invite the Elopotan Bot`)
  message.channel.send(AsreaperEmbed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};