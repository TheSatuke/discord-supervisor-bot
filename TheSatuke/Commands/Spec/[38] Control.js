
const disbut = require("discord-buttons");
const { Message, Client, Application, MessageFlags, MessageEmbed    } = require("discord.js");
const Discord = require("discord.js");
const Settings = require("../../Configuration/Settings.json");
const Config = require("../../Configuration/Config.json");
const client = global.client;
const moment = require("moment");
const axios = require('axios')

const ms = require("ms");
const Helper = require("../../Utils/Helper");
const Penal = require("../../Models/Database/Penal");
const PenalManager = require("../../Managers/PenalManager");

const PM = require("../../Managers/PenalManager");
require("moment-timezone");
require("moment-duration-format")
moment.locale("tr")

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */

module.exports.execute = async (client, message, args) => {
    if (message.member.permissions.has(8) || !"707325480378040430".some(x => x == message.author.id)) {
    let config = {
        "etkinlik": "921402046031216640",
        "cekilis": "921402045158793266",
}
    let tag = Settings.Tag.Tag
    let tagrol = Settings.Tag.Role;
    let taglısize = message.guild.members.cache.filter(member => member.user.username.toLowerCase().includes(tag) && !member.roles.add(tagrol))
    let et = message.guild.members.cache.filter(member => !member.roles.cache.has(config.cekilis) && !member.roles.cache.has(config.etkinlik)).size;

let btagrol = new disbut.MessageButton().setStyle('green').setLabel('Tag Dağıt!').setID('btagrol')
let ecdagit = new disbut.MessageButton().setStyle('red').setLabel('Etkinlik/Çekiliş Dağıt').setID('ecdagit')

let embed = new MessageEmbed()
.setDescription(`
${Settings.emojiler.tik} Tagı Olup Rolü Olmayan Kullanıcı Sayısı:**${taglısize.size}**
${Settings.emojiler.tik} Etkinlik/Çekiliş Rolü Olmayan Kullanıcı Sayısı: **${et}**
`)
.setColor(Config.EmbedColor)
.setFooter(`Satuke ❤️ ${message.guild.name}`)

message.channel.send(embed, { buttons: [ecdagit,btagrol] })

}
}
  
module.exports.settings = {
    Commands: ["control"],
    Usage: "kontrol",
    Description: "Bahsettiğin kişiyi sunucudan atarsın.",
    Category: "Penal",
    Activity: true
}
