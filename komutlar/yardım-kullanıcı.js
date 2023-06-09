const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
 **davet** \n-> Botu davet edersiniz.
 **shardbilgi** \n-> Botun shard bilgilerini gösterir.
 **pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
 **randompp** \n-> Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
 **öneri** \n-> Bota öneri belirtirsiniz.
 **istatistik** \n-> Botun istatistiğini gösterir.
 **sonmesaj** \n-> Yazdığınız son mesajı gösterir.
 **yetkilerim** \n-> Sunucudaki Yetkilerine Bakarsın.
 **sunucuresmi** \n-> Olduğunuz Sunucunun Resmine Bakarsınız.
 **userinfo** \n-> Etiketlediğiniz kişinin bilgilerini görürsünüz.
 **toplamkomut** \n-> Botun sadece açık ne kadar kodunun oludğunu görürsünüz.
 **şifre** \n-> Bot sizin için şifre oluşturur.
 **döviz** \n-> Güncel dolar ve euro değerini gösterir.
 **afk** \n-> Afk moduna geçersiniz.
 **kisi-nerde** \n-> Etiketlediğiniz kişinin hangi ses kanalında olduğuna bakarsınız.
 **premium** \n-> Premium.
`)
 .setTimestamp()
 message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};