const Discord = require('discord.js');
const Settings = require("../../Configuration/Settings.json");
const Config = require("../../Configuration/Config.json");
const afk = require("../../Models/Database/Afk");
  
module.exports.execute = async (client, message, args) => {
    const reason = args.join(" ") || "Sebep belirtilmedi.";
    await afk.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $set: { reason, date: Date.now() } }, { upsert: true });
    message.lineReply(`Başarıyla afk moduna girdin.`).then((x) => x.delete({ timeout: 5000 }));
    if (message.member.manageable) message.member.setNickname(`[AFK] ${message.member.displayName}`);

} 
    
module.exports.settings = {
    Commands: ["afk"],
    Usage: "afk <sebep>",
    Description: "Etiketlediğin kişinin aktif olan susturma cezalarından herhangi birini kaldırabilirsin.",
    Category: "General",
    permlevel: 0,
    Activity: true
}
