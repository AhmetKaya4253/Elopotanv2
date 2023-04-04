const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Eğlence Yardım Menüsü`)
 .setDescription(`
 **mcödül (yazı)** \n-> Bot Yazdığınız Başarımı Oluşturur.
 **yazı-tura** \n-> Yazı Tura Atarsınız.
 **balık-tut** \n-> Balık Tutarsınız.
 **tkm {taş,kağıt,makastan birisi}** \n-> Taş Kağıt Makas Oynarsınız.
 **espri** \n-> Bot Espri Yapar.
 **ara155** \n-> Polisi Ararsınız.
 **atatürk** \n-> Atatürk'ü Anarsınız.
 **aşkölçer {kişi}** \n-> Etiketlediğiniz Kişiyle Aşkınızı Ölçer.
 **intiharet** \n-> İntihar Edersiniz.
 **mcskin {skin adı}** \n-> İstediğiniz Minecraft Skinine Bakarsınız.
 **piyango** \n-> Piyangoya Katılırsınız.
 **sorusor {soru}** \n-> Bota Soru Sorarsınız.
 **token** \n-> Botun Tokenini Öğrenirsiniz.
 **zar-at** \n-> Zar Atarsınız.
 **çıkma-teklifi-et {kişi}** \n-> Etiketlediğiniz Kişiye Çıkma Teklifi Edersiniz.
 **korkut** \n-> Bot Sizi Korkutur.
 **yaz** \n-> Bota İstediğinizi Yazdırırsınız.
 **emojiyazı** \n-> Yazınızı Emojiye Çevirir.
 **wasted** \n-> Etiketlediğiniz Kişiye Wasted Efekti Verir.
 **havadurumu** \n-> Girdiğiniz şehirdeki hava durumu hakkında bilgi verir.
 **csgo** \n-> Girdiğiniz hesabın cs go istatistiklerini görürsünüz.
 **kelimeyazma** \n-> Yarışma yaparsınız.
 
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
  name: 'eğlence',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};