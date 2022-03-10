const { Client, Message } = require("discord.js");
const Settings = require("../../Configuration/Settings.json");

const PenalManager = require("../../Managers/PenalManager");
const Penal = require("../../Models/Database/Penal");

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {Array<String>} args 
 */
module.exports.execute = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR") && !Settings.Penals.VoiceMute.AuthRoles.some(authRole => message.member.roles.cache.has(authRole))) return message.reply("Bunu yapmaya yetkin yetmiyor :c");

    let victim = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.getUser(args[0]);
    if (!victim) return message.reply(`Geçerli Bir **@Satuke/ID** Belirtmelisin.`);

    let penals = await PenalManager.getPenals({ User: victim.id, Activity: true, $or: [{ Type: PenalManager.Types.TEMP_VOICE_MUTE }, { Type: PenalManager.Types.VOICE_MUTE }] });
    if (penals.length <= 0) return message.reply(`${victim}(${victim.username}) Bu kullanıcının hiç **Susturma** cezası yok.`);

    let member = await message.guild.getMember(victim.id);
    if (member && member.roles.highest.position >= message.member.roles.highest.position) return message.reply("senin rolünden üstte ya da aynı roldeki birisini susturamazsın.");

    let cezaNumaraları = penals.map(penal => penal.Id);

    let msg = await message.reply(`${victim} kişisinin toplam **${penals.length}** adet sesli susturması var. Cezalardan hangisin kaldırmak istiyorsunuz? \`(${cezaNumaraları.map(e => "#" + e).join(", ")})\``);

    let messages = await msg.channel.awaitMessages((m) => m.author.id == message.author.id && cezaNumaraları.some(cevap => m.content.toLowerCase().includes(cevap)), {
        max: 1,
        time: 15000
    });

    if (messages.size <= 0) {
        return message.reply(`${member}, (\`${victim.id}\`) için başlatmış olduğun ceza kaldırma işlemi cevap vermediğin için iptal ediliyor.`);
    }

    let reply = messages.first();
    let penalId = cezaNumaraları.find(e => reply.content.includes(e));
    if (penalId) {
        penalId = Number(penalId);
        await Penal.updateMany({ Id: penalId }, { $set: { Activity: false } }).exec();
        if (member && member.roles.cache.has(Settings.Penals.VoiceMute.Role)) member.roles.remove(Settings.Penals.VoiceMute.Role).catch();
        if(member && member.voice.channelID) member.voice.setMute(false).catch();

        message.reply(`${member} kullanıcısının \`#${penalId}\` numaralı \`Voice Mute\` cezasını kaldırdın ${Settings.emojiler.tik}`);
        message.react(Settings.emojiler.onayID)
    }
    else message.reply(`${member} ${victim} (${victim.id}) sesli susturma cezası kaldırma işlemi iptal edildi.`);
};

module.exports.settings = {
    Commands: ["unvoicemute"],
    Usage: "unvoicemute <@user|id>",
    Description: "Bahsettiğin kişinin sesli susturmalarından herhangi birisin kaldırabilirsin.",
    Category: "Penal",
    Activity: true
}