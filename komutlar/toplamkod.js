const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
  const toplamkomut = new Discord.MessageEmbed()

    .setTitle(``)
    .setAuthor(` | Discord Bot Toplam Komut Sayısı`)
    .setDescription(
      `:white_check_mark: **Toplam**  \`` +
        client.commands.size +
        `\` **Komut Vardır!**`
    )
    .setColor("#00ff00")
    .setTimestamp()
    .setFooter(`Elopotan`, client.user.avatarURL());

  return message.channel.send(toplamkomut);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "toplamkomut",
  description: "Toplam Komut",
  usage: "toplamkomut"
};