const ytdl = require('ytdl-core'); 

module.exports.run = async(client, message, args) =>
{
    console.log(args)
    const voiceChannel = message.member.voice.channel; 
    if(!voiceChannel) return message.reply("You need to be in a voice channel to play music");
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if(!permissions.has('CONNECT')) return message.channel.send("I don't have the persmissions to connect to the voice channel");
    if(!permissions.has('CONNECT')) return message.channel.send("I don't have the persmissions to speak to the voice channel");
    try{
        var connection = await voiceChannel.join();

    }catch(err)
    {
        console.log("There was an error connecting to the voice channel : ${err}")
        return message.channel.send("There was an error connecting to the voice channel : ${err}")
    }
    const dispatcher = connection.play(ytdl(args))
    .on('finish', () =>{
        voiceChannel.leave()
    })
    .on('error', error=>{
        console.log(error)
    })
    dispatcher.setVolumeLogaritmic(5 / 5)
}   
