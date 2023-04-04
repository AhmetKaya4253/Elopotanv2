const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      message.delete();
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(' Zenci geliyor')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.discordapp.net/attachments/880479333003702343/895740991825399938/spin.gif`)
    return message.channel.send(sunucubilgi);
    }
};//KΞJ ツ XRD-EnDeRmAn#2010
//KΞJ ツ XRD-EnDeRmAn#2010
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'zenci',
  description: 'Polisi Arar (ciddiye almayın)',
  usage: 'zenci'
};















































