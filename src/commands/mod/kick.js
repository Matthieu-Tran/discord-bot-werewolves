module.exports.run = async(client, message, args) =>{
    if(!message.member.hasPermission('KICK_MEMBERS'))
    {
        return message.reply("Tu n'as pas les droits");
    }
    if(args.length === 5)
    {
        return message.reply("Veuillez mettre un ID");
    }
    else 
    {
        let member = message.guild.members.cache.get(args);  /// guild=server
        console.log(member);
        if (member)
        {
            try
            {
                await member.kick();
                console.log('A member was kicked.');
                message.channel.send(member.user.tag + " was kicked.");
            }catch(err){
                console.log("erreur");
                message.reply("Il y a eu une erreur, mp @Tabasqueau");
            }
        }
    }
}
