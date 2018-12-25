var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on("ready", () => {
  console.log("DM Bot is online | dm.message <message> ");
});
3
bot.on('message', msg => {
var suffix = msg.content.split(' ').slice(1);
if (msg.content.startsWith("dm.message")) {
        var tospam = msg.content.split(' ').slice(1).join(' ');
        console.log(tospam)
		for(user of bot.users){
			console.log(user[1].username);
			user[1].sendMessage(tospam);
		}
    }
});

bot.login("TOKEN");
