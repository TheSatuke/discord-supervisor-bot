const { MessageEmbed } = require('discord.js')
const Config = require("../../Configuration/Config.json");
const Settings = require("../../Configuration/Settings.json");

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */

module.exports.execute = async (client, message, args) => {
    var TopMember = message.guild.memberCount;
    var BotVoice = message.guild.channels.cache.filter(c => c.type === "voice").map(c => c.members && c.members.filter(x => x.user.bot).size).reduce((a,b) => a+b) || 0;
    var OnlineUser = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size
    var Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
    var Tagges = message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.username.includes(Settings.Tag.Tag)).size;
    let sesli = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b);
    const Embed = new MessageEmbed()
.setColor(Config.EmbedColor)
.setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
.setDescription(`
\`•\` Sesli sohbetlerde toplam **${Voice}** (**+${BotVoice} bot**) kişi var.
\`•\` Sunucumuzda şuanda toplam **${TopMember}** üye bulunmakta. (**${OnlineUser} aktif**)
\`•\` Tagımızı alarak ailemize destek olan **${Tagges}** kişi bulunmaktadır.
\`•\` Toplam **${message.guild.premiumSubscriptionCount}** adet boost basılmış! (**${message.guild.premiumTier}.** Seviye)`)
message.channel.send(Embed)}

module.exports.settings = {
    Commands: ["say","SAY","Say"],
    Usage: "say",
    Description: "Sunucunun Güncel Verilerini Atar.",
    Category: "Advanced",
    Activity: true
}
