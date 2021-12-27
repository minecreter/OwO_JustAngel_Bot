const Discord = require("discord.js");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const reload = require("self-reload-json")
const word = new reload("./json/word.json")
const User = new reload("./json/user.json")

client.on("ready", () => { 
    console.log(`${client.user.tag} 봇에 로그인 하였습니다!`); 
}); 

client.on("message", msg => {
    msg_array = msg.content.split(' ')
    if (msg.author.bot) return;
    if (msg.content === "엔젤") {
        msg.reply("바보");    }
    else if (msg_array[0] === "엔젤아") {
        if (msg_array[1] === "배워") {
            if (!word[msg_array[2]]) {
                word[msg_array[2]] = [msg_array.slice(3,undefined).join(' ')]
            }
            else {
                
                word[msg_array[2]].push(msg_array.slice(3,undefined).join(' '))
                
            }
            word.save()
        }
        else if (word[msg_array[1]]) {
            target = Math.floor(Math.random() * (word[msg_array[1]].length))
            console.log(target)
            let embed = new Discord.MessageEmbed() // var -> let으로 수정하였습니다.
                .setDescription(word[msg_array[1]][target])
            msg.reply(word[msg_array[1]][target])
        }
            
            // msg.reply(word[msg_array[1]][target])
    }
    
});

client.login("OTA5NjE1MzAxODExOTIwOTc5.YZG3Qw.TP3XdP3Pr5dI_tgiHoFut4PV404");