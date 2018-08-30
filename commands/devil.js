exports.run = (client, message, args) => {
  if (message.author.id === '361861985622556672') {
    message.channel.send('Nhìn mặt tao giống quan tâm không?', {
      file:
        'https://media.discordapp.net/attachments/463162377618325505/470529445749456907/image-7.jpg',
    });
  } else {
    message.channel.reply('Chuỵ chỉ nghe lệnh admin thôi. Biến đi cưng.');
  }
};
