const ytdl = require('ytdl-core'); 

module.exports.run = async(client, message, args) =>
{
    const voiceChannel = message.member.voice.channel; 
    if(!voiceChannel) return message.reply("You need to be in a voice channel to stop the music");
    message.member.voice.channel.leave();
    return undefined;
}   
