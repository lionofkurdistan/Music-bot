const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Express app!');
});

app.listen(3000, () => {
	console.log('\033[32m server started');
});

//=================================

const Discord = require('discord.js');
const client = new Discord.Client();
const disbut = require('discord-buttons')
disbut(client)
const distube = require('distube');
const ms = require('ms')
const fs = require('fs')
client.distube = new distube(client, {
	searchSongs: false,
	emitNewSongOnly: true,
	youtubeDL: true,
	updateYouTubeDL: true,
});
require("@discordjs/opus");
require("ffmpeg-static");
require("ytdl-core");
const lineReply = require("discord-inline-reply");

//=================================

const prefix = "."//prefix

//=======================
client.on('ready', () => {
  console.log(`[NAME] ${client.user.tag}`)
  console.log(`[ID] ${client.user.id}`)
  console.log(`[USERS] ${client.guilds.cache
      .reduce((a, b) => a + b.memberCount, 0)
      .toLocaleString()}`)
  console.log(`[GUILDS] ${client.guilds.cache.size.toLocaleString()}`)
  console.log(`[PING] ${client.ws.ping}`)
  client.user.setStatus("online")
  function msg() {
    let status = [`Type: ${prefix}help | ${client.guilds.cache.size.toLocaleString()} Server | Users ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()}`];
    let S = Math.floor(Math.random() * status.length);
client.user.setActivity(status[S], { type: 'STREAMING' })
  };
  setInterval(msg, 7000)
})

//=================================

client.on('message' , msg=> {
if(msg.content === `<@${client.user.id}>`){    
            let days = Math.floor(client.uptime / 86400000);
 
  let hours = Math.floor(client.uptime / 3600000) % 24;
          let minutes = Math.floor(client.uptime / 60000) % 60;
          let seconds = Math.floor(client.uptime / 1000) % 60;
let embed = new Discord.MessageEmbed()
  .setAuthor(`INFORMATION`, client.user.avatarURL({ dynamic: true }))
  .setDescription(`
> **General**
\`Name: ${client.user.tag}
Id: ${client.user.id}
Server: ${client.guilds.cache.size.toLocaleString()}
Users: ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()}
Node.js: ${process.version}
Version: 1.0.0
discord js: v12.5.3\`
> **Server**
\`Prefix: ${prefix}
Language: English\`
> **System**
\`Ping: ${client.ws.ping}ms
Uptime: ${seconds}s ${minutes}m ${hours}h ${days}d\` 
`)
     .setTimestamp()    
     .setColor(0x2f3136)
.setThumbnail(client.user.avatarURL({ dynamic: true })) 
  .setFooter(`Request by ${msg.author.username}`, msg.author.displayAvatarURL({ dynamic: true}))
     msg.lineReplyNoMention(embed)
}
});

//=================================

client.on("message", message => {
if (message.author.bot) return;
if (message.content.includes(prefix + "ping")) {
    if (message.author.bot)
return
const embed = new Discord.MessageEmbed()
  .setDescription(`Ping ${client.ws.ping}ms`)
    .setColor(0x2f3136)
  message.lineReplyNoMention(embed)
}
})

//=================================





client.on("message", message => {
		if (message.content.startsWith(prefix + "help")) {
    if (message.author.bot) return
   message.react('🎶')   
const embed = new Discord.MessageEmbed()
	  .setAuthor(`COMMAND HELP`, client.user.avatarURL({ dynamic: true }))   .setThumbnail(client.user.avatarURL({ dynamic: true }))
    .setFooter(`Request by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true}))
    .setColor(0x2f3136)
    .setTimestamp()
    .addField(`${prefix}play`,`Add a song to queue and plays it`,true)
  
    .addField(`${prefix}stop`,`Stop the current song and clears the entire music queue`,true)
  
    .addField(`${prefix}skip`,`Skip the current song.`,true)
  
    .addField(`${prefix}pause  `,`Pauses the currently playing track`,true)
  
    .addField(`${prefix}resume `,` Resumes the currently paused track`,true)
    .addField(`${prefix}queue`,`Display the queue of the current tracks in the playlist`,true)
  
    .addField(`${prefix}now playing`,`Shows what is song that the bot is currently playing`,true)
    .addField(`${prefix}loop`,`Toggles the repeat mode`,true)
    .addField(`${prefix}volume`,`Changes/Shows the current volume`,true)
    .addField(`${prefix}`)
  
.addField(`${prefix}ping`,`Test the bots response time`,true)
     let button = new disbut.MessageButton()
.setStyle('url')
.setLabel('Invite Me')
.setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
message.channel.send(embed , {buttons : [button]})
	} 
  
//=================================
  
	if (message.content.startsWith(prefix + "play")){
    if (message.author.bot) return;
		const args = message.content
      .split(' ')
      .slice(1)
      .join(' ');
        if (!message.member.voice.channel)
		return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must join a voice channel to use that!`)           .setColor(0x2f3136)                        );
if (message.guild.me.voice.channel && message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.lineReplyNoMention(new Discord.MessageEmbed()                       .setDescription(`You must be listening in <#${message.guild.me.voice.channel.id}> to use that!`)                       .setColor(0x2f3136)
 ),                    message.member.voice.channel.join()
        let embedd = new Discord.MessageEmbed()
.setAuthor(`COMMAND PLAY`, client.user.avatarURL({ dynamic: true }))
.setDescription(`Add a song to queue and plays it`)
.addField(`**Aliases:**`, `${prefix}p`)
.addField(`**Usage:**`, `${prefix}play [song title] - plays the first result from Youtube
${prefix}play [URL] - plays the provided song, playlist, or stream`)
.addField(`**Examples:**`, `${prefix}play Marwan pablo
${prefix}play https://youtu.be/AM5jgcj1TJc`)
.setThumbnail(client.user.avatarURL({ dynamic: true })) 
  .setFooter(`Request by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true}))
    .setColor(0x2f3136)
    .setTimestamp()
		if(!args) return message.lineReplyNoMention(embedd);
		try {		client.distube.play(message, args).then(song => {
            console.log(song.name)
        })  
         
		} catch (e) { 
const embed = new Discord.MessageEmbed()
.setColor(0x2f3136)
.setDescription(e)
message.lineReplyNoMention(embed)
  } 
	}
  
//=================================
  
	if (message.content.startsWith(prefix + "stop")) {
    if (message.author.bot) return;
        if (!message.member.voice.channel)
					return message.lineReplyNoMention(new Discord.MessageEmbed()                   .setDescription(`You must join a voice channel to use that!`)           .setColor(0x2f3136)                        );
            if (message.guild.me.voice.channel && message.guild.me.voice.channel.id !== message.member.voice.channel.id) 
              	return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must be listening in <#${message.guild.me.voice.channel.id}> to use that!`)           .setColor(0x2f3136)                        );
	const queue = client.distube.getQueue(message)
        if (!queue)
          return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`The player has stopped and the queue has been cleared`)           .setColor(0x2f3136)                       );      message.member.voice.channel.leave()
		client.distube.stop(message)
	    return message.lineReplyNoMention(new Discord.MessageEmbed()                     .setDescription(`The song has been successfully Stoped`)           .setColor(0x2f3136)                       );
	}
  
//=================================

	if (message.content.startsWith(prefix + "skip")) {
    if (message.author.bot) return;
        if (!message.member.voice.channel)
								return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must join a voice channel to use that!`)           .setColor(0x2f3136)                        );
            if (message.guild.me.voice.channel && message.guild.me.voice.channel.id !== message.member.voice.channel.id) 				return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must be listening in <#${message.guild.me.voice.channel.id} >to use that!`)           .setColor(0x2f3136)                        );
const queue = client.distube.getQueue(message)
        if (!queue) 	return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`The player has stopped and the queue has been cleared.`)           .setColor(0x2f3136)                        ), message.member.voice.channel.leave()
		client.distube.skip(message);
	return message.lineReplyNoMention(new Discord.MessageEmbed()                  .setDescription(`The song has been successfully Skiped`)           .setColor(0x2f3136)                        );
	}

//=================================
  
	if (message.content.startsWith(prefix + "loop")) {
  if (message.author.bot) return;
const args = message.content.split(" ")
        if (!message.member.voice.channel)
				return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must join a voice channel to use that!`)           .setColor(0x2f3136)                        );
            if (message.guild.me.voice.channel && message.guild.me.voice.channel.id !== message.member.voice.channel.id) 
              return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must be listening in <#${message.guild.me.voice.channel.id} >to use that!`)           .setColor(0x2f3136)                        );
const queue = client.distube.getQueue(message)
        if (!queue)   return message.lineReplyNoMention(new Discord.MessageEmbed()                 .setDescription(`There is nothing in the queue right now!`)           .setColor(0x2f3136)                        );
        let mode = null
        switch (args[0]) {
            case "off":
                mode = 0
                break
            case "song":
                mode = 1
                break
            case "queue":
                mode = 2
                break
        }
        mode = client.distube.setRepeatMode(message, mode)
        mode = mode ? mode === 2 ? "repeat queue" : "repeat song" : "off"
	       return message.lineReplyNoMention(new Discord.MessageEmbed()                 .setDescription(`Set repeat mode to ${mode}`)           .setColor(0x2f3136)                        );
	}
	
//=================================

	if (message.content.startsWith(prefix + "queue")) {
    if (message.author.bot) return;
        if (!message.member.voice.channel)
			return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must join a voice channel to use that!`)           .setColor(0x2f3136)                        );
            if (message.guild.me.voice.channel && message.guild.me.voice.channel.id !== message.member.voice.channel.id)        return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must be listening in <#${message.guild.me.voice.channel.id} >to use that!`)           .setColor(0x2f3136)                        );
		let queue = client.distube.getQueue(message);
		if(!queue) return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`There is nothing in the queue right now!`)           .setColor(0x2f3136)                        );		const embed = new Discord.MessageEmbed()
			.setAuthor(`CURRENT QUEUE`, client.user.avatarURL({ dynamic: true }))	    .setFooter(`${queue.songs.length} Songs in queue | Volume: ${queue.volume}%`)
  .setColor(0x2f3136)    .setDescription(queue.songs.map((song, id) =>
				`**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
			).slice(0, 10).join("\n"))
		message.lineReplyNoMention(embed)       
	}

//=================================
  
	if (message.content.startsWith(prefix + "now playing")) {
    if (message.author.bot) return;
        if (!message.member.voice.channel)
			return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must join a voice channel to use that!`)           .setColor(0x2f3136)                        );
            if (message.guild.me.voice.channel && message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must be listening in <#${message.guild.me.voice.channel.id} >to use that!`)           .setColor(0x2f3136)                        );
		let queue = client.distube.getQueue(message);
		if(!queue) return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`There is nothing in the queue right now!`)           .setColor(0x2f3136)                        );
		const embed = new Discord.MessageEmbed()			.setAuthor(`NOW PLAYING`, client.user.avatarURL({ dynamic: true }))  
  .setDescription(queue.songs.map((song, id) =>
				`[${song.name}](${song.url})`).slice(0, 1).join("\n"))   
    .setFooter(`${queue.songs.length} Songs in queue | Volume: ${queue.volume}%`)
    .setColor(0x2f3136)
		message.lineReplyNoMention(embed)    }

//=================================
  
	if (message.content.startsWith(prefix + "volume")) {
    if (message.author.bot) return;
            if (!message.member.voice.channel)
			return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must join a voice channel to use that!`)           .setColor(0x2f3136)                        );
            if (message.guild.me.voice.channel && message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must be listening in <#${message.guild.me.voice.channel.id} >to use that!`)           .setColor(0x2f3136)                        );
const args = message.content.split(" ")
if(!args) return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`Please type number to set volume!`)           .setColor(0x2f3136)                        ); 
const queue = client.distube.getQueue(message)
        if (!queue) return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`There is nothing in the queue right now!`)           .setColor(0x2f3136)                        );
  const volume = parseInt(args[1])
if (isNaN(volume)) return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`Please enter a valid number!`)           .setColor(0x2f3136)                        );
if(volume > 100) return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`The Max Volume is 100`)
   .setColor(0x2f3136)                      );	    client.distube.setVolume(message, volume)
return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`Volume set to ${volume}`)           .setColor(0x2f3136)                      );
	}

//=================================

	if (message.content.startsWith(prefix + "pause")) {
        if (!message.member.voice.channel) return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must join a voice channel to use that!`)           .setColor(0x2f3136)                        );
            if (message.guild.me.voice.channel && message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must be listening in <#${message.guild.me.voice.channel.id} >to use that!`)           .setColor(0x2f3136)                        );
const queue = client.distube.getQueue(message)
        if (!queue) return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`There is nothing in the queue right now!`)           .setColor(0x2f3136)                        );
if (queue.pause) {
return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`The player is already paused! Use \`${prefix}resume\` to unpause!`)           .setColor(0x2f3136)                        )            
        }
    client.distube.pause(message)
    		const embed = new Discord.MessageEmbed()			.setAuthor(`PAUSED`, client.user.avatarURL({ dynamic: true }))	.setThumbnail(client.user.avatarURL({ dynamic: true }))
    .setFooter(`Request by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true}))
  .setColor(0x2f3136)
  .setTimestamp()      .setDescription(`${queue.songs.map((song, id) => `${song.name}`).slice(0,1).join("")}. Type ${prefix}resume to unpause!`)
		message.lineReplyNoMention(embed)
	}

  //=================================

	if (message.content === prefix +"resume") {
    if (message.author.bot) return;
        if (!message.member.voice.channel)
	 return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must join a voice channel to use that!`)           .setColor(0x2f3136)                        );
            if (message.guild.me.voice.channel && message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`You must be listening in <#${message.guild.me.voice.channel.id} >to use that!`)           .setColor(0x2f3136)                        );
const queue = client.distube.getQueue(message)
        if (!queue) return message.lineReplyNoMention(new Discord.MessageEmbed()                    .setDescription(`There is nothing in the queue right now!`)           .setColor(0x2f3136)                        );
client.distube.resume(message);   		const embed = new Discord.MessageEmbed()			.setAuthor(`RESUMED`, client.user.avatarURL({ dynamic: true }))	.setThumbnail(client.user.avatarURL({ dynamic: true }))
    .setFooter(`Request by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true}))
  .setColor(0x2f3136)
  .setTimestamp()      .setDescription(`${queue.songs.map((song, id) => `${song.name}`).slice(0,1).join("")}.`)
		message.lineReplyNoMention(embed)
  }  
});

//=================================

const status = queue =>
	`Volume: \`${queue.volume}%\` | Filter: \`${queue.filter ||
		'Off'}\` | Loop: \`${
		queue.repeatMode
			? queue.repeatMode == 2
				? 'All Queue'
				: 'This Song'
			: 'Off'
	}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``;

client.distube

  
//=================================

.on("finish", message =>
  setTimeout(() => {
message.guild.me.voice.channel.leave()
},100000)
 ) 

//=================================
  
.on("empty", message =>   setTimeout(() => {
message.guild.me.voice.channel.leave()
},100000)
 )

//=================================
  
.on("initQueue", queue => {
  queue.autoplay = false;//false,true
  queue.volume = 100;
})
  
//=================================
  
	.on("noRelated", message =>
message.lineReplyNoMention(new Discord.MessageEmbed()                       .setDescription(`Can't find related video to play. Stop playing music.`)                       .setColor(0x2f3136)
 ))

//=================================

	.on('playSong', (message, queue, song) =>    message.lineReplyNoMention(new Discord.MessageEmbed() .setAuthor(`PLAY SONG`, client.user.avatarURL({ dynamic: true }))           
.addField(`Song name`,`[${song.name}](${song.url})`,true)                  .addField(`Duration`,`${song.formattedDuration}`,true)         .addField(`Requested By `,`<@${message.author.id}>`,true)         .setThumbnail(song.thumbnail)
    .setFooter(`${queue.songs.length} Songs in queue | Volume: ${queue.volume}%`)
   .setColor(0x2f3136)
      ))           
  
//=================================	

.on('addSong', (message, queue, song) => 
   message.lineReplyNoMention(new Discord.MessageEmbed()
.setAuthor(`ADD SONG`, client.user.avatarURL({ dynamic: true }))  
.addField(`Song name`,`[${song.name}](${song.url})`,true)                 .addField(`Queue list`,queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join("\n"),true)         .addField(`Requested By `,`<@${message.author.id}>`,true)         .setThumbnail(song.thumbnail)
    .setFooter(`${queue.songs.length} Songs in queue | Volume: ${queue.volume}%`)
   .setColor(0x2f3136)
      ))
 
//=================================
  
	.on("playList", (message, queue, playlist, song) =>
  message.lineReplyNoMention(new Discord.MessageEmbed() .setAuthor(`PLAY LIST`, client.user.avatarURL({ dynamic: true }))           
.addField(`Playlist name`,`[${playlist.name}](${playlist.url})`,true)        .addField(`Now playing`,`${song.name}`,true)        .addField(`Duration`,`${song.formattedDuration}`,true)          .addField(`Requested By `,`<@${message.author.id}>`,true)     .setThumbnail(playlist.thumbnail.url)
.setFooter(`${playlist.songs.length} Songs in queue | Volume: ${queue.volume}%`)
   .setColor(0x2f3136)
      )) 
  
//=================================
  
	.on("addList", (message, queue, playlist, song) =>
message.lineReplyNoMention(new Discord.MessageEmbed() .setAuthor(`ADD LIST`, client.user.avatarURL({ dynamic: true }))           
.addField(`Playlist name`,`[${playlist.name}](${playlist.url})`,true)               .addField(`Queue list`,queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join("\n"),true)              .addField(`Requested By `,`<@${message.author.id}>`,true)     .setThumbnail(playlist.thumbnail.url)
.setFooter(`${playlist.songs.length} Songs in queue | Volume: ${queue.volume}%`)
   .setColor(0x2f3136)
      ))
  
//=================================
  
	.on('error', (message, e) => {
		console.error(e);
		message.lineReplyNoMention(new Discord.MessageEmbed()
    .setDescription('An error encountered: ' + e)
        )
	});

//=================================

client.login(process.env.token).catch((err) => {
	console.warn("\033[31m Token Invalid")
})