const Discord = require("discord.js");

exports.run = (client, message) => {
  let prex = new Discord.MessageEmbed()
    .addField(
      "``Veriler``",
      ` <a:ok:941697714381537312> **Toplam sunucu:** **${client.guilds.cache.size}** \n<a:ok:941697714381537312> **Toplam Komut:** **${client.commands.size}** \n <a:ok:941697714381537312> **Toplam kullanıcı:** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:ok:941697714381537312> **Toplam kanal:**  **${client.channels.cache.size}**`)
    .addField(
      "``Bot Geliştiricisi``",
      ` <a:crown:941699980257812520> <@718802106747977818> \n <a:crown:941699980257812520> <@936981286738858024> `)
    .addField(
      "``Sürümler``",
      ` <a:ok:941697714381537312> **Discord.js sürümü:** **v${Discord.version}** \n <a:ok:941697714381537312> **Node.js sürümü:** **${process.version}**`)
    .addField(
      "``Gecikmeler``",`
     ** <a:ok:941697714381537312> Bot pingi:** **${client.ws.ping}** \n
     ** <a:ok:941697714381537312> Mesaj gecikmesi:** **${new Date().getTime() - message.createdTimestamp}**`)
    
    .addField(`» Elopotan Linkler`, `<a:link:941700971065659412> [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=1091016052533645382&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/K9YkwFRMWx) | `)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
    .setThumbnail(client.user.avatarURL())
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL())
    .setColor("BLACK");
  message.channel.send(prex);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["stat", "i","istatistik ","botbilgi"]
};

exports.help = {
  name: "istatistik",
  description: "Botun İstatistiklerini Atar",
  usage: "!istatistik"
};