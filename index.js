//const fs = require('fs');
const Discord = require('discord.js');


function start_bot() {
	const client = new Discord.Client();
	//var token = fs.readFileSync(process.env.BOT_TOKEN, 'utf8');
	//console.log(token);

	client.on('ready', () => {
		console.log(`Logged in as ${client.user.tag}!`);
	});

	client.on('guildMemberAdd', member => {
		var i = 0;
		if (member.tag.includes("twitter.com") || member.tag.includes("youtube.com") || member.tag.includes("discord.gg")) { // TODO: Replace this with a system that uses a PostgreSQL database
			member.guild.channels.get('channelID').send("A message for " + member.toString() + ": ***Not today, and not tomorrow.***");
			member.guild.members.ban(member);
		}
		//member.guild.channels.get(member.guild.systemChannelID).send("Hello, " + member.toString() + "!");
		//member.roles.add(message.guild.roles.cache.find(role => role.name === "Member")).catch(console.error);
	});

	client.on('message', msg => {
		if (msg.content === '!helloworld') {
			msg.reply('Hello, World!');
		}
	});

	client.login(process.env.BOT_TOKEN);
}

start_bot();