const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send(' ```Malesef...``` ').then(message => {
      var espriler = ['https://tenor.com/view/%C5%9Faka-lan%C5%9Faka-g%C3%BCl-diye-tr-qwe-sj-gif-19447198','https://tenor.com/view/%C5%9Faka-lan%C5%9Faka-g%C3%BCl-diye-tr-qwe-sj-gif-19447198'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'şaka-yaptım',
  description: 'Acaba Kazanabilecek Misin?',
  usage: 'şaka-yaptım'
};