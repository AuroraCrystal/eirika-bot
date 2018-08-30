// const Request = require('request');
const limitTemps = [10, 8, 100];
const rateQuotes = require('../bot_data/rate_quotes.json');

exports.run = (client, message, args) => {
  // if (message.author.id === '361861985622556672') {
  const statement = args.join(' ');

  const rSeed = Math.floor(Math.random() * 101);
  const lSeed = Math.floor(Math.random() * 3);

  const rate = Math.floor((rSeed * limitTemps[lSeed]) / 100);

  let ratetype;
  if (rSeed < 33) ratetype = 'bad';
  else if (rSeed >= 33 && rSeed < 66) ratetype = 'medium';
  else ratetype = 'good';

  const qSeed = Math.floor(Math.random() * rateQuotes[ratetype].length);
  // console.log(args);

  message.channel.send(` :lips: ${statement}: ${rate}/${limitTemps[lSeed]}. ${rateQuotes[ratetype][qSeed].content}`);
  // } else {
  //   message.channel.reply('Chuỵ chỉ nghe lệnh admin thôi. Biến đi cưng.');
  // }
};
