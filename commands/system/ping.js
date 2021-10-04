const Discord = require("discord.js")


module.exports = { //creating an export module and setting the properties
	name: 'ping',
	aliases: ["pong"],
	execute(client, message) { //the execute function which will be running when command will be called
		message.channel.send("Pinging...").then(m =>{
        var ping = m.createdTimestamp - message.createdTimestamp; //counting time between
		const pingEmbed = new Discord.MessageEmbed()
				.setColor('#E03C19')
				.setTitle('Ping info')
				.addField(`🏓 Ping: ${ping} ms`, "** **")
		m.delete()
        m.channel.send(pingEmbed)
        })
	},
};