// const utils = require("./utils");

exports.run = (client, message, args) => {
    const mockContent = args.join(' ');
    // console.log(args);
    // console.log(mockContent);
    // if (lastMsg.startsWith('+'))
    const arr = mockContent.toUpperCase().split('');
    for (let i = 0; i < arr.length; i += 2) {
        arr[i] = arr[i].toLowerCase();
    }
    console.log(arr);
    const mockedStr = arr.join('');
    // console.log(mockedStr);
    message.channel.send(mockedStr, {
      file: "https://imgflip.com/s/meme/Mocking-Spongebob.jpg"
    });
    // console.log(lastMsg);
}
