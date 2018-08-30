exports.run = (client, message, args) => {
  if (message.author.id === '361861985622556672') {
    if (!args || args.size < 1)
      return message.reply('Must provide a command name to reload.');
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`The command ${args[0]} has been reloaded`);
  } else {
    message.channel.reply('Chuỵ chỉ nghe lệnh admin thôi. Biến đi cưng.');
  }
};
