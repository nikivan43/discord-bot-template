const { Client, Intents } = require('discord.js');
const { dtoken } = require('./config.json');
const fs = require('fs')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Your bot is up!');
});

client.once('message', async message =>{

})

client.login(dtoken)