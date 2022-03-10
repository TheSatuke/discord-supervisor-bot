const { Message, Client, MessageEmbed, Discord, Application, MessageFlags} = require("discord.js");
const Settings = require("../../Configuration/Settings.json");

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */

let satuke = Settings.Roles.ToplantıPerm;

module.exports.execute = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR") && !Settings.Roles.Owner.some(authRole => message.member.roles.cache.has(authRole)))
return message.lineReply(`${Settings.emojiler.iptal} Bu komudu kullanmaya yetkin yetmiyor :c`).then(x => x.delete({timeout: 7500}));
let embed = new MessageEmbed()
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setFooter(Config.Status)
.setColor(Config.EmbedColor)
    
let x = args[0];
if(!x) return message.channel.send(embed.setDescription(`Bir işlem belirtiniz. **.toplantı yoklama / katıldıal / unmuteall / mute**`)).catch(e => { })

if(x === "katıldıal"){
    let membr = message.guild.members.cache.filter(member => member.roles.cache.has(satuke)  && !member.user.bot);
    membr.array().forEach((member, index) => {
      setTimeout(() => {
        member.roles.remove(satuke).catch();
      }, index * 1250)
    });
    return message.channel.send(embed.setDescription(`
    Rol Alınmaya Başlandı.
    Katıldı Rolü *Alınacak* Yetkili Sayısı: \`${membr.size}\``)) 
}

if(x === "yoklama"){
    let katıldı = message.member.voice.channel.members.filter(member => !member.roles.cache.has(satuke) && !member.user.bot)
    katıldı.array().forEach((member, index) => {
        setTimeout(async() => {
            member.roles.add(satuke)
        }, index * 750)
    })
    
    return message.channel.send(embed.setDescription(`
    Rol Dağıtılmaya Başlandı.
    Katıldı Rolü *Verilecek* Yetkili Sayısı: \`${katıldı.size}\``))
}

if(x === "unmuteall"){
  let channel = message.member.voice.channel.id
  if(!channel) return message.channel.send(`Bir ses kanalında değilsin.`)
  if(!message.guild.channels.cache.get(channel).members.array().filter(x => x.id !== message.member.id).size <= 0) return message.channel.send(`Ses Kanalında Sadece Sen Varsın nabi10amkqwe?`)
  let channelMembers = message.guild.channels.cache.get(channel).members.array().filter(x => x.id !== message.member.id);
  channelMembers.forEach((x, i) => {
    setTimeout(async () => {
      x.voice.setMute(false)
    }, i*200)
  })
  await message.channel.send(embed.setDescription(`**${message.guild.channels.cache.get(channel).name}** Adlı kanaldaki \`${channelMembers.length}\` adet üyenin susturulması kaldırıldı!`))
}

if(x === "mute"){
  let channel = message.member.voice.channel.id

  if(!channel) return message.channel.send(`Bir ses kanalında değilsin.`)
  if(!message.guild.channels.cache.get(channel).members.array().filter(x => x.id !== message.member.id).size <= 0) return message.channel.send(`Ses Kanalında Sadece Sen Varsın nabi10amkqwe?`)

  let channelMembers = message.guild.channels.cache.get(channel).members.array().filter(x => x.id !== message.member.id);

  channelMembers.forEach((x, i) => {
    setTimeout(async () => {
      x.voice.setMute(true)
    }, i*200)
  })

  await message.channel.send(embed.setDescription(`**${message.guild.channels.cache.get(channel).name}** Adlı kanaldaki \`${channelMembers.length}\` adet üye susturuldu!`))
}
}

module.exports.settings = {
    Commands: ["t","toplantı"],
    Usage: "toplantı",
    Description: "",
    Category: "Advanced",
    Activity: true
}