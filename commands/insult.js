const insults = require("../bot_data/insult.json");
const utils = require("./utils");

exports.run = (client, message, args) => {
    const { insult } = utils;
    // console.log(utils);
    insult(insults, args, message);
}