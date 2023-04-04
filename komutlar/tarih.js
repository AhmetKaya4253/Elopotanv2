const Discord = require('discord.js')
const moment = require("moment");
require("moment-duration-format");
exports.run = async (msg) => {


var tarih = [moment().format('DD-MM-YYYY | H:mm:ss')]
msg.channel.send(tarih)


    }


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['saat'],
    permLevel: 0,
}

exports.help = {
    name: 'tarih',
}