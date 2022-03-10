const { Message, Client, MessageEmbed, Discord, Application, MessageFlags} = require("discord.js");
const Settings = require("../../Configuration/Settings.json");

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */

module.exports.execute = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR") && !Settings.Roles.Owner.some(authRole => message.member.roles.cache.has(authRole)))
return message.lineReply(`${Settings.emojiler.iptal} Bu komudu kullanmaya yetkin yetmiyor :c`).then(x => x.delete({timeout: 7500}));
let channel = message.channel;
let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, 'Kilitleyen Kişi: '+ message.author.tag);
message.lineReply(`${Settings.emojiler.tik} **Kanal üzerinde değişiklikler yapıldı.**

\`\`\`Yazma engeli koyuldu!\`\`\``);

};
module.exports.settings = {
    Commands: ["lock","kilit"],
    Usage: "unlock",
    Description: "",
    Category: "Advanced",
    Activity: true
}