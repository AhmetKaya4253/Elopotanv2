const Discord = require('discord.js');
const db = require('croxydb');

exports.run = async (client, message, args) => {

 let prefix = "!"

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Yetkiniz komutu kullanmak için yeterli değil.")

    let dilseç = args[0];
    if (!dilseç) 
    return message.channel.send(new Discord.MessageEmbed()
    .setDescription(`Dil Sistemini Türkçe Ayarlamak İçin: ${prefix}dil-sistemi tr_TR \n\nTo Set Turkish Language System: ${prefix}lang-system en_US`)
    .setAuthor("Dil Sistemi | Lang System")
    .setFooter(message.author.tag)
    .setTimestamp()
    .setColor("RED"))

	if (dilseç == "tr_TR") {
		db.set(`dil_${message.guild.id}`, "tr_TR")
        var embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`Dil başarıyla tr_TR olarak seçildi.`)
        message.channel.send(embed)
	}

	if (dilseç == "en_US") {
		db.set(`dil_${message.guild.id}`, "en_US")
        var embed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`Selected as en_US using language.`)
        message.channel.send(embed1)
    }

};
exports.conf = {
    aliases: ["lang-system", "dil"]
}

exports.help = {
    name: 'dil-sistemi'
} 
