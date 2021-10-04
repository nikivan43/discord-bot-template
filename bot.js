const { Client, Intents } = require('discord.js');
const { dtoken } = require('./config.json');
const fs = require('fs')
client.commands = new Collection()

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Your bot is up!');
});

client.once('message', async message =>{

})

client.login(dtoken)