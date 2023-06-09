const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Logo Sistemi Yardım Menüsü`)
 .setDescription(`
 **${prefix}arrow** \n-> Ok şeklinde logo yapar.
 **${prefix}gold** \n-> Altın şeklinde logo yapar.
 **${prefix}green** \n-> Yeşil şeklinde logo yapar.
 **${prefix}neonmavi** \n-> Neon şeklinde logo yapar.
 **${prefix}alev** \n-> Alevli Logo Yapar.
 **${prefix}altın** \n-> Altından Logo Yapar.
 **${prefix}anime** \n-> Anime Yazı Fontu Şekliyle Logo Yapar.
`)
 .setTimestamp()
 message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logo"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'logosistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};