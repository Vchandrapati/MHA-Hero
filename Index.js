const Discord = require('discord.js');

const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION']
});  

const process = require('process');
const WOKCommands = require('wokcommands')

const {
    token,  
    MONGO_URI
} = require(`./Config.json`);

client.once('ready', () => {
    console.log('Bot Start!!!');
    client.user.setUsername("MHA:Hero");
    client.user.setActivity(`Watching for mHelp`);
    client.user.setAvatar('https://i.imgur.com/z5Aq1fc.jpg')
    
    new WOKCommands(client, {
        commandsDir:'Commands',
    })
    
    .setMongoPath(MONGO_URI)
    .setDefaultPrefix('m')
    .setCategorySettings([
    {
        name: 'Guides',
        emoji: '📜'
    },
    {
        name: 'Test',
        emoji: '⚠️'
    },
    {
        name: 'Character Info',
        emoji: '⚔️'
    }])
})

if (process.pid) {
    console.log('This process is your pid ' + process.pid);
}

client.login(token);
