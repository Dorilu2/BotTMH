const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require('./config.json');

bot.on('ready', function () {
  console.log("TMH est en ligne")
  bot.user.setActivity('Se configure...');
})

bot.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

// Informations sur le serveur
if (command === `${prefix}infoserv`) {
  let servIcon = message.guild.iconURL;
  let servEmbed = new Discord.RichEmbed()
   .setDescription(`Informations sur le serveur`)
   .setColor('#be0eee')
   .setThumbnail(servIcon)
   .addField('Nom du serveur', message.guild.name)
   .addField('Nombre total de membre', message.guild.memberCount)
   .addField('Créer le', message.guild.createdAt)
   .addField('Vous avez rejoint le', message.member.joinedAt);
   
  return message.channel.send(servEmbed);
}

//Message de bienvenue 

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

// Informations sur le bot
  if (command === `${prefix}info`) {
    
    let botIcon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
     .setDescription('Informations sur le bot')
     .setColor('#be0eee')
     .setThumbnail(botIcon)
     .addField('Ce bot a été créer par Dorilu2. Gérant de la communauté TMH. Lien du discord : https://discord.gg/U7BuKHt', bot.user.username)
     .addField('Commande', 'Le préfix pour les commandes du bot est %')
     .addField(`${prefix}info`, 'Renvoie des informations sur le bot');

    
    
    return message.channel.send(embed);
  }

});

bot.login('NTg2NTEyNjgyNzQwNjEzMTM5.XP-i_g.vYAwVGLbVRTwgueg_WAKnqlp9Ic');