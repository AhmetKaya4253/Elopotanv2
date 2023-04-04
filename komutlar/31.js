const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ' Varmı Çekiyon Ab . VE Ne?? Bu Kodu Nerden Biliyorsun. Bu Kod Gizli Bir Kod. Hayır Hayırr. O nu YAPMA!!')
    .setColor("RANDOM")
    .setTimestamp()
    return message.channel.send(embed);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: '31',
  description: 'token',
  usage: '31'
};//KΞJ ツ XRD-EnDeRmAn#2010
