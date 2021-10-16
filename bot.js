const { Client, Intents, Collection } = require('discord.js');
const config = require('./config.json');

const fs = require('fs')


const commandFolders = fs.readdirSync('./commands');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] }); //creating discord client

client.commands = new Collection()


for (const folder of commandFolders) { //loop that fethches all js files
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.on('ready', () => { //event when ready
	console.log('Your bot is up!');
});

client.on('messageCreate', async message =>{ //event when message has been sent
	if (!message.content.startsWith(config.prefix) || message.author.bot) return; //checking if the message author is not bot and it starts with a prefix
		const args = message.content.slice(config.prefix.length).trim().split(/ +/); //slicing message into arguments
		const command = args.shift().toLowerCase();	

		if (!client.commands.has(command)) return;

		try {
			client.commands.get(command).execute(client, message); //executing the command
		} catch (error) {
			console.error(error);
			message.reply(`An error occurred when sending commands to the program!`);
		}
})

client.login(config.dtoken)
