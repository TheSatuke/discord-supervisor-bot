const Settings = require("../../Configuration/Settings.json");
const { Client } = require('discord.js');

module.exports.execute = async (client, message, args) => {  
    if (!message.member.hasPermission("ADMINISTRATOR"));

  let yetkili = message.guild.roles.cache.get(Settings.Roles.Commander)
  let ses = message.guild.members.cache.filter(user => user.roles.highest.position >= user.position && user.voice.channel && !user.user.bot && user.presence.status !== "offline"); 
  let ses2 = message.guild.members.cache.filter(member => member.roles.highest.position >= yetkili.position && !member.voice.channel && !member.user.bot && member.presence.status !== "offline"); 
  let kapalı = message.guild.members.cache.filter(s => !s.user.bot && s.presence.status === "offline").size
  let dnd = message.guild.members.cache.filter(s => !s.user.bot && s.presence.status === "dnd").size
  let online = message.guild.members.cache.filter(s => !s.user.bot && s.presence.status === "online").size
  let idle = message.guild.members.cache.filter(s => !s.user.bot && s.presence.status === "idle").size
  let toplam = message.guild.members.cache.filter(member => member.roles.highest.position >= yetkili.position && !member.user.bot);


  message.channel.send(`\`\`\`diff
- #TOPLAM | -AKTIF | #KAPALI | #SESTE | #SESTEDEGIL
------------------------------------------------\n
  ${toplam.size} Kisi | ${dnd + online + idle} Kisi | ${kapalı} Kisi | ${ses.size} Kisi | ${ses2.size} Kisi \`\`\``)
message.channel.send(`
Seste Olmayan Kişiler\n\n${ses2.map(y => y).join(', ') || "Herkes Seste Mükemmel!"}`)
   };

   module.exports.settings = {
    Commands: ["ysay"],
    Usage: "ysay",
    Description: "",
    Category: "Advanced",
    Activity: true
}