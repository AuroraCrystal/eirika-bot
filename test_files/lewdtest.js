const Request = require('request');

exports.run = (client, message, args) => {
  if (message.author.id === '361861985622556672') {
    Request.get(
      'http://rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&limit={}&tags={}',
      // Request.post({
      //   // url: 'https://rule34.xxx/index.php',
      //   url: 'https://rule34.paheal.net/',
      //   body: {
      //     page: "post",
      //     s: "list",
      //     tags: "cynthia_(pokemon)"
      //   }
      (error, response, body) => {
        if (error) {
          // return console.log(error);
          // message.channel.send(error);
          return console.log(error);
        }
        console.log(response);
        // const memes = JSON.parse(body).data.memes;
        // const seed = Math.floor(Math.random() * Math.floor(memes.length - 1));
        // // console.log(memes[seed].url);
        // // console.log(memes.length);
        // message.channel.send({
        //     file: memes[seed].url
        // });
      },
    );
  } else {
    message.channel.reply('Chuỵ chỉ nghe lệnh admin thôi. Biến đi cưng.');
  }
};
