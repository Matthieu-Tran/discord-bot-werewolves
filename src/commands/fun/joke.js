const { nbAleatoire } = require('../../utils/nbAlea');
module.exports.run = async(client, message, args) =>{
    const nb = nbAleatoire();
    switch (nb) {
        case 1:
            message.channel.send("C’est l’histoire de Why \nWhy est bûcheron,\ncar depuis tout petit,\nWhy aime scier (Y-M-C-A).");
            break;
        case 2:
            message.channel.send("Quelle mamie fait peur aux voleurs ? \nMamie Traillette.")
            break;
        case 3:
            message.channel.send("Pourquoi est-ce c'est difficile de conduire dans le Nord ? \nParce que les voitures arrêtent PAS DE CALER.")
            break;
        case 4:
            message.channel.send("Comment est-ce que la chouette sait que son mari fait la gueule ? \nParce qu’HIBOUDE")
            break;
        case 5:
            message.channel.send("Pourquoi est-ce qu'on dit que les bretons sont tous frères et sœurs ? \nParce qu’ils n’ont Quimper.")
            break;
        case 6:
            message.channel.send("Pourquoi est-ce qu'on met tous les crocos en prison ? \nParce que les crocos dealent.")
            break;
        case 7:
            message.channel.send("Comment fait-on pour allumer un barbecue breton ? \nOn utilise des breizh.")
            break;          
        default:
            message.channel.send("Erreur")
    }
}
