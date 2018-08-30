const names = require('../bot_data/names.json');
// const utils = require('../commands/utils');

exports.run = (client, message, args) => {
  // const { uniqRandom } = utils;

  message.channel
    .send(
      'Hãy chọn tên cho nhân vật của bạn theo mẫu ;name + <tên NV>. (hoặc gõ "rd" để tạo ngẫu nhiên)',
    )
    .then(() => {
      message.channel
        .awaitMessages(
          response =>
            response.content.startsWith(';name') ||
            response.content.startsWith('rd'),
          {
            max: 1,
            time: 20000,
            errors: ['time'],
          },
        )
        .then(collected => {
          //   console.log(collected.first());
          if (collected.first().content === 'rd') {
            const name =
              names.first[
                Math.floor(Math.random() * Math.floor(names.first.length))
              ] +
              ' ' +
              names.last[
                Math.floor(Math.random() * Math.floor(names.last.length))
              ];
            console.log(name);
            message.channel
              .send('Tên của bạn sẽ là ' + name)
              .catch(console.error);
          } else {
            const tmp = collected.first().content.split(' ');
            tmp.shift();
            const name = tmp.join(' ');
            message.channel
              .send('Tên của bạn sẽ là ' + name)
              .catch(console.error);
          }
        })
        .catch(() => {
          message.channel.send(
            'Nhân vật gì lại méo có tên thế? Tạo lại đi cưng.',
          );
        });
    })
    .then(() => {
      message.channel.send(
        'Hãy chọn class cho nhân vật. (knight, paladin, mage, ranger, summoner) (hoặc gõ "rd" để chọn ngẫu nhiên)',
      ).then(() => {
        message.channel
        .awaitMessages(
          response =>
            response.content.startsWith('knight') ||
            response.content.startsWith('paladin') ||
            response.content.startsWith('mage') ||
            response.content.startsWith('ranger') ||
            response.content.startsWith('summoner') || 
            response.content.startsWith('rd'),
          {
            max: 1,
            time: 20000,
            errors: ['time'],
          },
        ).then((collected) => {
          if (collected.first().content === 'rd') {
            console.log('ahihi');
          }
        });
      });
    });
};
