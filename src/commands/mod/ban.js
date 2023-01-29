module.exports.run = async(client, message, args) =>{
    if(!message.member.hasPermission('BAN_MEMBERS'))
    {
        return message.reply("T'as pas les droits frer");
    }
    else {
        try 
    {
        let bannedMember = await message.guild.members.ban(args);
        if(bannedMember)
            console.log(bannedMember.tag + " was banned.");
    } catch (err)
    {
        console.log(err);
        message.channel.send("Il y a eu une erreur, soit je n'ai pas les droits soit le membre n'a pas été trouvé");
    }
    }
}
