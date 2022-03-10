const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.execute = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (!member) return message.channel.send(embed.setDescription(`Geçerli bir üye belirtmelisiniz.`)).then(qwe => qwe.delete({ timeout: 5000 }));

if (member.user.presence.status == "offline") return message.channel.send(embed.setDescription(`${member} kullanıcısı offline olduğu için cihazına bakılamıyor.`))
let cihaz = ""
let ha = Object.keys(member.user.presence.clientStatus)
if (ha[0] == "mobile") cihaz = "Mobil Telefon"
if (ha[0] == "desktop") cihaz = "Masaüstü Uygulama"
if (ha[0] == "web") cihaz = "İnternet Tarayıcısı"


message.lineReply(embed.setDescription(`${member} kullanıcısı \`${cihaz}\` cihazından bağlanıyor.
`))
};

module.exports.settings = {
    Commands: ["c", "cihaz"],
    Usage: "cihaz",
    Description: "Sunucuda tagı tarar tagı var ise rol yoksa rolünü verir tagı yoksa rolü varsa rolünü alır.",
    Category: "General",
    Activity: true
}