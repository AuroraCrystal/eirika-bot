const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const config = require('./config.json');
const rdseed = require('./bot_data/auto.json').length;
let mute = false;

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split('.')[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on('message', message => {
  console.log(mute);

  if (!mute) {
    console.log('abcd');
    const rd = Math.floor(Math.random() * Math.floor(rdseed));
    require('./automsg.js').run(message, rd);
  }
  if (message.author.bot) return;

  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    if (command === 'mutebot' && args[0] === 'mute') {
      mute = true;
      message.channel.send('Lu ơi, chị thấy không ổn lắm...').catch('abcd');
      console.log(mute);
    }
    else if (command === 'mutebot' && args[0] === 'unmute') {
      mute = false;
      message.channel.send('I\'M BACK, BITCHES!').catch('abcd');
      console.log(mute);
    }
    else if (command !== 'mutebot') {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
      if (message.author.id === '361861985622556672') {
        message.delete(100).catch(console.error);
      }
    }
  } catch (err) {
    console.error(err);
  }
});

client.login(config.token);
