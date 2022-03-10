const { Message, Client, MessageEmbed, Discord, Application, MessageFlags} = require("discord.js");
const Settings = require("../../Configuration/Settings.json");
const Config = require("../../Configuration/Config.json");
const ceza = require("../../Models/Database/Penal");
const Penal = require("../../Models/Database/Penal");

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */

var mongoose = require("mongoose");
var stringTabe = require("string-table");
var moment = require("moment");
moment.locale("tr")

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */

/*
  Id: Number,
  Activity: { type: Boolean, default: true },
  Temporary: { type: Boolean, default: false },
  Time: { type: Number, default: Date.now() },
  FinishTime: Number,
  Admin: String,
  User: String,
  Reason: String,
  Type: String
});
*/

module.exports.execute = async (client, message, args) => {
            let target = Number(args[0])
            if (!target) return message.channel.send(`${Settings.emojiler.iptal} Lütfen cezalarına bakmak istediğiniz ID'yi giriniz.`)
            let data = await ceza.find({}).then(x => x)
            let embed = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}))
            .setColor(Config.EmbedColor)
            .setFooter(Config.Status)
            .setDescription(`${data.filter(x => Number(x.Id) == target).map(veri => `
            
${message.guild.members.cache.get(veri.User) ? `<@${veri.User}> (<@&${message.guild.members.cache.get(veri.User).roles.highest.id}>)` : `(\`${veri.User}\`) ID'li`} kişisine uygulanan **${target}** numaralı ceza bilgisi;

${Settings.emojiler.ban} Ceza Türü: \`${veri.Type}\`
${Settings.emojiler.ban} Ceza Sebebi: \`${veri.Reason}\`
${Settings.emojiler.ban} Ceza Durumu: \`${veri.Activity == true ? "#Aktif" : "#Cezası Bitti"}\`
${Settings.emojiler.ban} Ceza Atan Staff: \`${veri.Admin}\`
${Settings.emojiler.ban} Ceza Başlangıc: \`${moment(Number(veri.Time)).format('LLL') || "S"}\`
${Settings.emojiler.ban} Ceza Bitiş: \`${veri.Bitis == "O" ? "Online" : veri.Bitis == "Offline" ? "Offline" : moment(Number(veri.FinishTime)).format('LLL') || "Süresiz"}\``)}`)

await message.lineReply (embed);
    
}

module.exports.settings = {
    Commands: ["id","cezaid"],
    Usage: "Cezaid",
    Description: "",
    Category: "General",
    Activity: true
}
