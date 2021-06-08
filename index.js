//const fs = require('fs');
const Discord = require('discord.js');


function start_bot() {
	const client = new Discord.Client();
	//var token = fs.readFileSync(process.env.BOT_TOKEN, 'utf8');
	//console.log(token);

	client.on('ready', () => {
		console.log(`Logged in as ${client.user.tag}!`);
	});

	client.on('message', msg => {
		if (msg.content === '!helloworld') {
			msg.reply('Hello, World!');
		}
	});

	client.login(process.env.BOT_TOKEN);
}

start_bot();