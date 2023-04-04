const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = async(client, message, args, member) => {
const yardım = new Discord.MessageEmbed()


  .setAuthor(`Elopotan Bot Yardım Menüsü`, client.user.avatarURL())
  .setColor("green")
  .setThumbnail(client.user.avatarURL())
  .setDescription("Elopotan Bot Daima Burda!")
  .addField(" • Kategoriler:", `> • !kullanıcı: **Kullanıcı yardım menüsünü gösterir.**\n > • !moderasyon: **Moderasyon yardım menüsünü gösterir.**\n > • !eğlence: ** Eğlence Komutlarını Gösterir.**\n > • !kayıtsistemi: ** Kayıt sistemi yardım menüsünü gösterir.**\n > • !korumasistemi** Koruma sistemi yardım menüsünü gösterir.**\n > • !logosistemi: ** Logo sistemi yardım menüsünü gösterir.**\n > • !çekilişsistemi: ** Çekiliş sistemi yardım menüsünü gösterir.**\n > • !profilsistemi: **Profila sistemi yardım menüsünü gösterir.** \n > • !ekonomisistemi: ** Ekonomi sistemi yardım menüsünü gösterir.**  \n > • !radyo: ** Radyo sistemi yardım menüsünü gösterir.**`)
  .addField("Hizmet Durumu" ,"Elopotan Bot Hizmetinize Açıktır")
  .addField("Dil ayarlamak için / To set the language:"," !dil-sistemi / !lang-system ")
  .addField(" • Linkler:", "• Destek Sunucusu: https://discord.gg/K9YkwFRMWx")
.setFooter("Elopotan Bot", message.author.avatarURL())
.setTimestamp()
 message.channel.send(yardım)

   }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "",
    usage: ""
}