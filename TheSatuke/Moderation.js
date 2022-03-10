const client = global.Client;
const { Client, MessageEmbed } = require("discord.js");
const moment = require("moment");

const disbut = require('discord-buttons');
require("discord-buttons")(client)

const Config = require("./Configuration/Config.json");
const Settings = require("./Configuration/Settings.json");

const _1784 = require("./Managers/EventManager");
_1784.addEvent("Afk")
_1784.addEvent("autoReply")
_1784.addEvent("CommandHandler");
_1784.addEvent("Timer.js");
_1784.addEvent("Penal/OnMemberUpdate");
_1784.addEvent("Penal/OnReady");
_1784.addEvent("Penal/OnVoiceStateUpdate");
_1784.addEvent("Tag/UserUpdate");

require("./Utils/Helper");
require("./Utils/Patch");

client.on("ready", async () => {
client.user.setPresence({ activity: { name: "Isengard ❤️ Satukê." }, status: "dnd" });
let botVoiceChannel = client.channels.cache.get(Config.VoiceChannel);
if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Moderator | Ses Kanalına Bağlanamadı!"))});

client.on('clickButton', async (button) => {
  if (button.id === 'btagrol') {
      let tag = Settings.Tag.Tag;
      let tagrol = Settings.Tag.Role;
      let kek = button.guild.members.cache.filter(member => member.user.username.toLowerCase().includes(tag) && !member.roles.cache.has(tagrol))
  button.reply.send(`Tagı olup rolü olmayan ${kek.size} kullanıcıya rol verildi.")}`)
  button.guild.members.cache.filter(member => member.user.username.toLowerCase().includes(tag) && !member.roles.cache.has(tagrol)).map(x=> x.roles.add(tagrol))                
  }
  if (button.id === 'ecdagit') {
      let çay = {
          "etkinlik": "921402046031216640",
          "cekilis": "921402045158793266",
      }
  let pasta = button.guild.members.cache.filter(member => !member.roles.cache.has(çay.etkinlik) && !member.roles.cache.has(çay.cekilis))
      let emcük = ["921402046031216640","921402045158793266"];
      button.reply.send(`Etkinlik/Çekiliş rolü olmayan ${pasta.size} kullanıcıya etkinlik, çekiliş rolleri verildi !`)
      button.guild.members.cache.filter(member => !member.roles.cache.has(çay.etkinlik) && !member.roles.cache.has(çay.cekilis)).map(x=> x.roles.add(emcük));
  }

});

client.on("message", async message => {
  if (message.content === ".gir") {if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("bunu yok yapamazsıoc");
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});



client.DateCalculator = (date) => {
    const startedAt = Date.parse(date);
    var msecs = Math.abs(new Date() - startedAt);
    const years = Math.floor(msecs / (1000 * 60 * 60 * 24 * 365));
    msecs -= years * 1000 * 60 * 60 * 24 * 365;
    const months = Math.floor(msecs / (1000 * 60 * 60 * 24 * 30));
    msecs -= months * 1000 * 60 * 60 * 24 * 30;
    const weeks = Math.floor(msecs / (1000 * 60 * 60 * 24 * 7));
    msecs -= weeks * 1000 * 60 * 60 * 24 * 7;
    const days = Math.floor(msecs / (1000 * 60 * 60 * 24));
    msecs -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(msecs / (1000 * 60 * 60));
    msecs -= hours * 1000 * 60 * 60;
    const mins = Math.floor((msecs / (1000 * 60)));
    msecs -= mins * 1000 * 60;
    const secs = Math.floor(msecs / 1000);
    msecs -= secs * 1000;
  
    var string = "";
    if (years > 0) string += `${years} yıl ${months} ay`
    else if (months > 0) string += `${months} ay ${weeks > 0 ? weeks+" hafta" : ""}`
    else if (weeks > 0) string += `${weeks} hafta ${days > 0 ? days+" gün" : ""}`
    else if (days > 0) string += `${days} gün ${hours > 0 ? hours+" saat" : ""}`
    else if (hours > 0) string += `${hours} saat ${mins > 0 ? mins+" dakika" : ""}`
    else if (mins > 0) string += `${mins} dakika ${secs > 0 ? secs+" saniye" : ""}`
    else if (secs > 0) string += `${secs} saniye`
    else string += `saniyeler`;
  
    string = string.trim();
    return `\`${string} önce\``;
  };




  client.turkishDate = async (date) => {
    if (!date || typeof date !== "number") return
    let convert = FerhatAYDN(date, {
      verbose: true
    })
      .replace("minutes", "dakika")
      .replace("minute", "dakika")
      .replace("hours", "saat")
      .replace("hour", "saat")
      .replace("seconds", "saniye")
      .replace("second", "saniye")
      .replace("days", "gün")
      .replace("day", "gün")
      .replace("years", "yıl")
      .replace("year", "yıl");
    return convert
  }
  



 client.login(Config.Token).then(x => console.log(`Moderation Başarıyla Giriş Yaptı!
---------------------------------------`)).catch(err => console.error(`Bota Giriş Yapılamadı.!\nHata : ${err}`));
