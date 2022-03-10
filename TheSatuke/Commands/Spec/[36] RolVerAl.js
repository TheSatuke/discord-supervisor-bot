const Config = require("../../Configuration/Config.json");
const Settings = require("../../Configuration/Settings.json");
const moment = require("moment");
require("moment-duration-format")
moment.locale("tr")

const { Client, Message, Guild, MessageEmbed } = require("discord.js");
client = global.client;

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */
 module.exports.execute = async (client, message, args) => {
    let embed = new MessageEmbed().setAuthor(message.guild.iconURL({dynamic: true})).setColor("GREEN")
    let kullanici = message.mentions.users.first() || message.guild.members.cache.get(args[1])
    let x = message.guild.member(kullanici);
    let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]) || message.guild.roles.cache.find(a => a.name == args.slice(2).join(' '));
    if(!message.member.hasPermission("ADMINISTRATOR") && !Settings.Roles.Owner.some(authRole => message.member.roles.cache.has(authRole)))
    if(args[0] !== "ver" && args[0] !== "al") return message.lineReply(`Hata: Bir üyeye rol verip almak için lütfen __argümanları__ doldurun Örn: \`.rol ver/al @satuke/ID <EtiketRol/RolID>\``).then(x => x.delete({timeout: 5000}));
    if(!kullanici) return message.lineReply('Hata: Bir üyeye rol verip almak için lütfen __argümanları__ doldurun Örn: \`.rol ver/al @satuke/ID <EtiketRol/RolID>\`').then(x => x.delete({timeout: 5000}));
    if(!rol) return message.lineReply('Hata: Bir üyeye rol verip almak için lütfen __argümanları__ doldurun Örn: \`.rol ver/al @satuke/ID <EtiketRol/RolID>\`').then(x => x.delete({timeout: 5000}));
    if (message.member.roles.highest.comparePositionTo(rol) < 1) {
      return message.lineReply(`Hata: \`Vermek istediğiniz rol sizin rollerinizden üstün!\` hatası sebebiyle işlem yapılamadı!`).then(x => x.delete({timeout: 6000}));
    }
    if(Settings.Roles.blokluRoller.some(roltara => rol.id === roltara)) {
    return message.lineReply(`Hata: \`(Özel Rol) Bu rolü vermezsin veya alamazsın!\` hatası sebebiyle işlem yapılamadı!`).then(x => x.delete({timeout: 6000}));
    }

const Settings = require("../../Configuration/Settings.json");

    if(args[0] === "ver") {
      try{
        
        await (x.roles.add(rol.id).catch())
              message.lineReply(`${Settings.emojiler.tik} ${kullanici} (\`${kullanici.id}\`) isimli üyeye \`${rol.name}\` adlı rolü __başarıyla__ verdin.`).then(x => x.delete({timeout: 5000}));
              let logKanali = client.channels.cache.find(a => a.name == "rol-log")
              const embed = new MessageEmbed().setDescription(`${message.author} (\`${message.author.id}\`) adlı yetkili ${rol} adlı rolü ${kullanici} (\`${kullanici.id}\`) kişisine verdi.`)
              logKanali.send(embed)

              message.react(Settings.emojiler.tik)
         } catch (e) {
            console.log(e);
            message.lineReply('Hata: \`Sistemsel olarak hata oluştu lütfen @satuke yetkilisine başvurunuz\`!').then(x => x.delete({timeout: 5000}));
          }
    };
  
    if(args[0] === "al") {
      try{
        await (x.roles.remove(rol.id).catch())
      message.lineReply(`${Settings.emojiler.tik} ${kullanici} (\`${kullanici.id}\`) isimli üyeden \`${rol.name}\` adlı rolü __başarıyla__ aldın.`).then(x => x.delete({timeout: 5000}));

      let logKanali = client.channels.cache.find(a => a.name == "rol-log")
      const embed = new MessageEmbed().setDescription(`${message.author} (\`${message.author.id}\`) adlı üye ${rol} adlı rolü ${kullanici} (\`${kullanici.id}\`) kişisinden rolü geri aldı.`)
      logKanali.send(embed);

        message.react(Settings.emojiler.tik)
       
          } catch (e) {
            console.log(e);
            message.lineReply('Hata: \`Sistemsel olarak hata oluştu lütfen @acar yetkilisine başvurunuz\`!').then(x => x.delete({timeout: 5000}));
          }
      }
  }


module.exports.settings = {
    Commands: ["r"],
    Usage: "r",
    Activity: true,
    permLevel: 7,   
    Category: "Owner",
    cooldown: 10000
}