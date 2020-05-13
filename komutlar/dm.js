const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const mesaj = args.slice(0).join(' ');
    if (message.author.id != "kullanıcı id") return message.channel.send(`Üzgünüm, yetkin yok.`) 
    if(mesaj.length < 1) return message.channel.send(`Bir şey yazmalısın.`);
      try {
        message.guild.members.forEach(m=> {
        m.send(mesaj)
          }) 
        message.channel.send(`Mesaj başarıyla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gönderildi.`);
          }
        catch(e) {
        return console.log(`Hata`)
      }     
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dm',
  description: 'dm mesajı atar.',
  usage: 'dm'
};