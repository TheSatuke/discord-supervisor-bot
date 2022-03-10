const { Message, Client, Application, MessageFlags} = require("discord.js");
const Discord = require("discord.js");
const Settings = require("../../Configuration/Settings.json");
const Helper = require("../../Utils/Helper");
const Config = require("../../Configuration/Config.json");

const moment = require("moment");
require("moment-timezone");
require("moment-duration-format")
moment.locale("tr")

const PM = require("../../Managers/PenalManager");

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */
module.exports.execute = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") && !Settings.Penals.Ban.AuthRoles.some(authRole => message.member.roles.cache.has(authRole))) 
    return message.lineReply("Bunu yapmaya yetkin yetmiyor :c");

    let victim = message.mentions.users.first() || client.users.cache.get(args[0]) || await Helper.GetUser(args[0]);
    if(!victim) 
    return message.lineReply(`${Settings.emojiler.iptal} Kickleyeceğin bir kullanıcı belirtmelisin.`);
    
    let reason = args.splice(1).join(" ");
    if(!reason) 
    return message.lineReply("Geçerli \`Kick\` sebebi belirtmelisin.");

    let member = await message.guild.getMember(victim.id);
    if(!member) return message.lineReply(`${victim} Bu kullanıcı sunucuda bulamıyorum!`);

    if(member && member.roles.highest.position >= message.member.roles.highest.position) 
    return message.lineReply("Senin rolünden üstte ya da aynı roldeki birisini sunucudan atamazsın!");

    if(member && !member.kickable)
    return message.lineReply("Botta Bir Hata Var \`Satuke'ye\` Ulaşınız.");

    member.kick(`Sebep: ${reason}`).catch();
    let document = await PM.addPenal(victim.id, message.author.id, PM.Types.KICK, reason);

    message.channel.send(`${victim} (\`${victim.id}\`), ${message.author} Tarafından **__${reason}__** Sebebiyle sunucudan \`Atıldı\`, Ceza Numarası - (\`#${document.Id}\`) ${Settings.emojiler.tik}`)
    message.react(Settings.emojiler.onayID)

    let time = args[1];
    let cıkaralım = time + Date.parse(new Date());
    let şuanki = moment(Date.now()).format("LLL");
    let sonraki = moment(cıkaralım).format("LLL");
    let logKanali = client.channels.cache.find(a => a.id == Settings.Penals.Kick.Log)

    const embed = new Discord.MessageEmbed()
    .setDescription(`${victim} Kullanıcısı, ${message.author} tarafından **Ban** adlı ceza ile cezalandırıldı.`)
    .addField(`Ceza Numarası`,`${document.Id}`, true)
    .addField(`Ceza Sebebi`,`${reason}`, true)
    .addField(`Ceza Türü`,`Ban`, true)
    .addField(`Yetkili`,`${message.author}`, true)
    .addField(`Kullanıcı`,`${victim}`, true)
    .addField(`Ceza Başlangıc`,`${şuanki}`, true)
    .addField(`Ceza Bitiş`,`Geçici`, true)
    .setColor(Config.EmbedColor).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setFooter(Config.Status)
    //client.channels.cache.get(Log.Log.TransporterLog).send(embed)    
    logKanali.send(embed)


//    message.guild.log(message.author, victim, document, Settings.Penals.Kick.Log);
}

module.exports.settings = {
    Commands: ["kick", "at"],
    Usage: "kick <@member/id> [reason]",
    Description: "Bahsettiğin kişiyi sunucudan atarsın.",
    Category: "Criminal",
    Activity: true
}