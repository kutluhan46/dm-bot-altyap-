const Discord = require("discord.js");
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== ayarlar.sahip)
    return message.channel.send("Üzgünüm yetkin yok.");

  message.channel.send(`Bot yeniden başlatılıyor..`);
  message.delete(60).then(msg => {
    console.log(`Bot yeniden başlatılıyor..`);
    process.exit(0);
  });
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reboot"],
  permLevel: 0
};

module.exports.help = {
  name: "reboot",
  description: "Botu yeniden başlatır.",
  usage: "reboot"
};
