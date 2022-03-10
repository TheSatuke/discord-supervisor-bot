const { MessageEmbed } = require('discord.js')
const Config = require("../../Configuration/Config.json");
const Settings = require("../../Configuration/Settings.json");
const ms = require("ms")
const moment = require("moment")
require("moment-duration-format")
/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */

module.exports.execute = async (client, message, args) => {
    
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.lineReply(`${Settings.emojiler.iptal}  Bu komutu kullanmaya yetkin yetmiyor :c`)
    let enAltYetkiliRolü = message.guild.roles.cache.get(Settings.Roles.Commander);
    let Commander = message.guild.roles.cache.get(Settings.Roles.Commander);
    let yetkililer = message.guild.members.cache.filter(uye => !uye.user.bot && uye.roles.highest.position >= enAltYetkiliRolü.position && uye.presence.status !== "offline" && !uye.voice.channel).array();
    if (yetkililer.length == 0) return message.reply('Aktif olup, seste olmayan yetkili bulunmuyor. Maşallah!');
    let mesaj = await message.channel.send(`**${yetkililer.length}** yetkiliye sese gelme çağırısı yapılıyor`);
    var filter = m => m.author.id === message.author.id && m.author.id !== client.user.id && !m.author.bot;
        yetkililer.forEach((yetkili, index) => {
          setTimeout(() => {
            yetkili.send(`**${message.guild.name}** Sunucusunda toplantı başladı. Yetkili olduğun halde toplantıda değilsin. Eğer toplantıya girmezsen yetkilerin alınacaktır.`).then(x => mesaj.edit(new Discord.MessageEmbed().setDescription(`${yetkili} yetkilisine özelden mesaj atıldı!`).setColor(message.member.displayHexColor))).catch(err => message.channel.send(`${yetkili}, Sunucusunda toplantı başladı. Yetkili olduğun halde toplantıda değilsin. Eğer toplantıya girmezsen yetkilerin alınacaktır.`).then(x => mesaj.edit(`${yetkili} yetkilisine özelden mesaj atılamadığı için kanalda etiketlendi!`)));
          }, index*1000);
        });
}

module.exports.settings = {
    Commands: ["toplantı-çağır"],
    Usage: "toplantı-çağır",
    Activity: true,
    permLevel: 7,   
    Category: "Owner",
    cooldown: 10000
}