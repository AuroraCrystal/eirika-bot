exports.run = (client, message, args) => {
  if (message.author.id === '361861985622556672') {
    // console.log(args[0].substring(2, args[0].length - 1));
    const chan = message.guild.channels.get(
      args[0].substring(2, args[0].length - 1),
    );
    // console.log(chan);
    if (chan) {
      // Check if that channel exists
      // console.log(args.shift());
      args.shift();
      chan.send(args.join(' '));
    } else {
      console.log('invalid channel');
      message.channel.send(args.join(' '));
    }
  } else {
    message.channel.reply('Chuỵ chỉ nghe lệnh admin thôi. Biến đi cưng.');
  }
};
