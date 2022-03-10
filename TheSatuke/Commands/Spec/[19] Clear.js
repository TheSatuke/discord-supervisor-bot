const { Message, Client, MessageEmbed, Discord, Application, MessageFlags} = require("discord.js");
const Settings = require("../../Configuration/Settings.json");

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */

module.exports.execute = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES") && !Settings.Roles.Yönetim.some(authRole => message.member.roles.cache.has(authRole))) return message.react(Settings.emojiler.iptalID);
  const silinecekmiktar = args.slice(0).join('');
  if(silinecekmiktar .length < 1) { return message.reply(`${Settings.emojiler.iptal} Silinecek mesaj miktarını belirt`) } 
  message.channel.bulkDelete(silinecekmiktar);
  message.channel.send(`${Settings.emojiler.tik} Toplam ${silinecekmiktar} mesaj sildim`).catch().then(message => { message.delete({timeout: 5000}) });
}
module.exports.settings = {
  Commands: ["temizle","sil","Sil","Temizle","clear","Clear"],
  Usage: "temizle",
  Description: "",
  Category: "Advanced",
  Activity: true
}