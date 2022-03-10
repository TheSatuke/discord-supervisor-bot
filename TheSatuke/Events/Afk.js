const { MessageEmbed } = require("discord.js");
const afk = require("../Models/Database/Afk");
const moment = require("moment");
require("moment-duration-format");
moment.locale("tr");

module.exports = async (message) => {
  if (message.author.bot || !message.guild) return;
  const data = await afk.findOne({ guildID: message.guild.id, userID: message.author.id });
  if (data) {
    await afk.deleteOne({ guildID: message.guild.id, userID: message.author.id });
    if (message.member.displayName.includes("[AFK]") && message.member.manageable) await message.member.setNickname(message.member.displayName.replace("[AFK]", ""));
    message.channel.send("Afk modundan çıktın.").then((x) => x.delete({ timeout: 5000 }));
  }  
  const member = message.mentions.members.first();
  if (!member) return;
  const afkData = await afk.findOne({ guildID: message.guild.id, userID: member.user.id });
  if (!afkData) return;
  message.channel.send(`${member.toString()} kullanıcısı, \`${afkData.reason}\` Sebebiyle, **${moment.duration(Date.now() - afkData.date).format("d [gün] H [saat], m [dakika] s [saniye]")}** Önce afk moduna giriş yaptı.`).then((x) => x.delete({ timeout: 10000 }));
};

module.exports.config = {
    Event: "message"
};
