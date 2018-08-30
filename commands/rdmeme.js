const Request = require('request');

exports.run = (client, message, args) => {
  Request.get('https://api.imgflip.com/get_memes', (error, response, body) => {
    if (error) {
        // return console.log(error);
        message.channel.send(error);
        return console.log(error);
    }
    const memes = JSON.parse(body).data.memes;  
    const seed = Math.floor(Math.random() * Math.floor(memes.length - 1));
    // console.log(memes[seed].url);
    // console.log(memes.length);
    message.channel.send({
        file: memes[seed].url
    });
  });
};
