const { Message, Client, MessageEmbed } = require("discord.js");
const Settings = require("../../Configuration/Settings.json");
const Config = require("../../Configuration/Config.json");
/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */

module.exports.execute = async (client, message, args) => {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bunu Kullanmaya Yetkin YOK!')
let tag = Settings.Tag.Tag
let tagrol = Settings.Tag.Role  
let taglılar = message.guild.members.cache.filter(s => s.user.username.includes(tag) && !s.roles.cache.has(tagrol))
let tagsızlar = message.guild.members.cache.filter(s => !s.user.username.includes(tag) && s.roles.cache.has(tagrol))
  
taglılar.array().forEach((satuke, index) => {
  setTimeout(async() => {
    satuke.roles.add(tagrol)
      }, index * 1000)
})
tagsızlar.array().forEach((satuke, index) => {
   setTimeout(async() => {
     satuke.roles.remove(tagrol)
      }, index * 1000)
     
      })
message.lineReply(`Sunucuda tag taraması yapılıyor..`).then(x => x.edit(`Rolü Verilecek Kişi Sayısı: **${taglılar.size} **`))
}

module.exports.settings = {
    Commands: ["tag-tara", "tagt"],
    Usage: "tag-tara",
    Description: "Sunucuda tagı tarar tagı var ise rol yoksa rolünü verir tagı yoksa rolü varsa rolünü alır.",
    Category: "General",
    Activity: true
}