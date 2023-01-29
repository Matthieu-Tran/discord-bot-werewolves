const { MessageEmbed } = require("discord.js");
const { Client } = require("discord.js-commando");

module.exports.run = async(client, message, args) =>
{
        const embed = new MessageEmbed();
        embed.setColor('#c0392b')
        .setTitle('BOT Loup-Garou Help')
        .setDescription('Le jeu des Loups-Garous de Thiercelieux est un jeu unique en son genre et qui peut se jouer jusqu’à 18 joueurs. Le but du jeu est de découvrir qui est le loup-garou. Si vous voulez en savoir plus cliquez [ici](https://www.regledujeu.fr/loup-garou-regle/)')
        .setImage('https://i0.wp.com/www.kanoshi.fr/wp-content/uploads/2012/09/LGT.jpg')
        .setFooter('Bot fait par Tabasqueau', 'https://www.shinyhunters.com/images/shiny/132.gif');
        message.channel.send(embed);
 
}
