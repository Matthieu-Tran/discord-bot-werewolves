const { rollDice } = require('../../utils/rolldice');

module.exports.run = async(client, message, args) =>{
    message.reply(" a lancé un dé et a obtenu:  " + rollDice());
}

