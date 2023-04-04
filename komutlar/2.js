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
    .setAuthor('Gizli kod: ')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.discordapp.net/attachments/1070291416967815249/1092535003839209562/Cocuk.jpg`)
    return message.channel.send(sunucubilgi);
    }
};//KΞJ ツ XRD-EnDeRmAn#2010
//KΞJ ツ XRD-EnDeRmAn#2010
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pro',
  description: 'Polisi Arar (ciddiye almayın)',
  usage: 'pro'
};















































