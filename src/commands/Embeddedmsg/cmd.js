const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) =>
{
        const embed = new MessageEmbed();
        embed.setColor('#f1c40f')
        .setTitle('BOT Loup-Garou Commandes')
        .setDescription("Voici la liste de toutes les commandes, si vous voulez ajouter d'autres commandes signalez @Tabasqueau:")
        .addFields(
            { name: '!ping', value: 'Vous voulez jouer au ping pong avec le bot ?'},
            { name: '!roll', value: 'Cela vous donne un chiffre entre 1 et 100'},
            { name: '!kick', value: "Pour kicker quelqu'un qui le mérite, **utilisable seulement pour les privilégiés**"},
            { name: '!ban', value: "Si il l'a vraiment mérité alors mais lui un ban, **utilisable seulement pour les privilégiés**"},
            { name: '!joke', value: "Tout est dans le nom de la commande:"},
            { name: 'Bonjour', value: "Dites Bonjour, il vous repondra peut-être"},
        )
        .setFooter('Bot fait par Tabasqueau', 'https://www.shinyhunters.com/images/shiny/132.gif');
        message.channel.send(embed);
 
}
