const smacktalk = require("../bot_data/smacktalk.json");
const utils = require("./utils");

exports.run = (client, message, args) => {
    const { insult } = utils;
    insult(smacktalk, args, message);
}