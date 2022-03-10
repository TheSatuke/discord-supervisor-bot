const { Message, Client } = require("discord.js");
const Settings = require("../../Configuration/Settings.json");
const Config = require("../../Configuration/Config.json");

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */

module.exports.execute = async (client, message, args) => {  
if(![Settings.Transporter.Roles].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.lineReply(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).then(x => x.delete({timeout: 5000}));

const kanal = message.member.voiceChannel
const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return;
if(message.member.roles.highest.position <= member.roles.highest.position) return message.lineReply(`${message.author}, Senin rolünden üstte ya da aynı roldeki birisini sesten atamazsın..`).then(x => x.delete({timeout: 5000}));
message.guild.member(member.id).voice.setChannel(null)
message.lineReply(`${member} Kullancısının ${message.author} Tarafından Bağlantısı Kesildi.`).then(x => x.delete({timeout: 7500}));
message.react(Settings.emojiler.onayID)
}   

module.exports.settings = {
    Commands: ["ses-kes","seskes","bağlantı-kes","kopar","bağlantıkes"],
    Usage: "bağlantı-kes <member|id>",
    Description: "Etiketlemiş olduğun kişinin ses bağlantısını kesersin.",
    Category: "Move",   
    Activity: true
}