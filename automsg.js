const automsgs = require('./bot_data/auto.json');
// const utils = require('./commands/utils')

exports.run = (message, invoker) => {
  // const { getRandomItem } = utils;
  // const rd = getRandomItem(automsgs, automsgs.length);
  const rd = Math.floor(Math.random() * Math.floor(automsgs.length - 1));
  // console.log(current);
  // console.log(turns);
  if (
    invoker <= Math.sqrt(Math.floor(rd / 100)) ||
    invoker === Math.random() * Math.floor(rd / 2)
  ) {
    // console.log('abcd');
    message.channel.send(automsgs[rd].content).catch('abcd');
  }
};
