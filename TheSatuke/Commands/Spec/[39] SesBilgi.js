const { MessageEmbed } = require("discord.js");
module.exports.execute = async (client, message, args, durum, kanal) => {
            if (!message.guild) return;
            

            let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
            if (!user) return message.lineReply("Ses bilgisine bakmak istediğin kullanıcıyı düzgünce belirt ve tekrar dene!", message.author, message.channel)
            if (!user.voice.channel) return message.lineReply("<@" + user.id + "> bir ses kanalına bağlı değil.", message.author, message.channel)
            let mic = user.voice.selfMute == true ? "Kapalı" : "Açık"
            let hop = user.voice.selfDeaf == true ? "Kapalı" : "Açık"
            await message.lineReply(`${user} kişisi <#${user.voice.channel.id}> kanalında. **Mikrofonu: ${mic}, Kulaklığı: ${hop}**`)
}

module.exports.settings = {
    Commands: ["ses-bilgi"],
    Usage: "ses",
    Description: "Bahsettiğin kişiyi sunucudan atarsın.",
    Category: "Penal",
    Activity: true
}