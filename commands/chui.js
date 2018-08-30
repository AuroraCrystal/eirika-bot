const chui = require('../bot_data/chui.json');
const utils = require('./utils');

exports.run = (client, message, args) => {
  if (message.author.id === '361861985622556672') {
    const { insult } = utils;
    insult(chui, args, message);
  } else {
      message.channel.reply('Chuỵ chỉ nghe lệnh admin thôi. Biến đi cưng.');
  }
};
