const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = async (bot, message, args) => {
const tac = new Discord.MessageEmbed()
  .setDescription(`Taç sahibi:\n <@${message.guild.owner.id}>` )
//OTTOMAN CODE
  .setColor("RANDOM")
return message.channel.send(tac)
  };
;
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "taç"
};