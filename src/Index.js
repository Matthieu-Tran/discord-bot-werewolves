require('dotenv').config();
const{ Client, WebhookClient} = require('discord.js');
const client = new Client({
    partials: ['MESSAGE', 'REACTION']
});
const PREFIX = "!";
const fs = require('fs').promises;                  ///We will be able to get into other javascript files
const path  = require('path');                      /// to be able to resolve path    
client.commands = new Map();                        /// we are adding the commands proprieties to the client object and this propertie is a map because i want all the cmd to be register in this map
client.on('ready', () =>{
    console.log(`${client.user.tag} has logged in.`);
});
client.on('message', async (message) => 
{
    console.log(`[${message.author.tag}]: ${message.content}`);
    
    if(message.author.bot) return;
    if (message.content === 'Bonjour')
    {
        message.reply('Hola');
    }
    if (message.content.startsWith(PREFIX))
    {
    let cmdName = message.content.substring(message.content.indexOf(PREFIX)+1).split(new RegExp(/\s+/)).shift();
    let argsToParse = message.content.substring(message.content.indexOf(' ')+1);
    if(client.commands.get(cmdName)){
        console.log("Command exists.");
        client.commands.get(cmdName).run(client, message, argsToParse);                                    ///cmdName are the key in the map, we are trying to get the function
    }
    else{
        console.log("Command does not exists.");
        message.reply("Veuillez tapez une commande valide, **!cmd** pour voir la liste des commandes")
    }    
    }   
});


client.on('messageReactionAdd', (reaction, user) =>
{
    console.log('Hello');
    const {name} = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);  /// pour lui donner un role il  nous faut l'objet membre
    if (reaction.message.id === '811368861055582268')       ///ID du message dans le channel role
    {  
        switch (name){
            case '🦄':                              /// pour avoir cela on fait dans le channel discord "\:nom de l'emoji:"
                member.roles.add('811271571083231262')
                break;                
            case '🐴':
                member.roles.add('811368160430784532')
                break;
            case '🦁':
                member.roles.add('811368343856611408')
                break;
        }
    }
});

    client.on('messageReactionRemove', (reaction, user) =>
    {
        console.log('GoodBye');
        const {name} = reaction.emoji;
        const member = reaction.message.guild.members.cache.get(user.id);  /// pour lui donner un role il  nous faut l'objet membre
        if (reaction.message.id === '811368861055582268')        ///ID du message dans le channel role
        { 
            switch (name){
                case '🦄':                              /// pour avoir cela on fait dans le channel discord "\:nom de l'emoji:"
                    member.roles.remove('811271571083231262');
                    break;                
                case '🐴':
                    member.roles.remove('811368160430784532');
                    break;
                case '🦁':
                    member.roles.remove('811368343856611408');
                    break;
            }
        }
});


(async function registerCommands(dir = 'commands') {
    /// console.log(path.join(__dirname, 'commands')) it's joining the current directory with the command folder
;    
    // Read the directory/file.
    let files = await fs.readdir(path.join(__dirname, dir));        ///we are joinning the current directory to the commands directory so we can build out the relative path ('dir' is command)
    // Loop through each file.
    for(let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));   ///lstat function give you information about the file 
        if(stat.isDirectory()) // If file is a directory, recursive call recurDir
            registerCommands(path.join(dir, file));
        else {
            // Check if file is a .js file.
            if(file.endsWith(".js")) {
                    let cmdName = file.substring(0, file.indexOf(".js"));
                    let cmdModule = (require(path.join(__dirname, dir, file)));
                    client.commands.set(cmdName, cmdModule);
                }
            }
        }
    
})()


        client.login(process.env.DISCORDJS_BOT_TOKEN);