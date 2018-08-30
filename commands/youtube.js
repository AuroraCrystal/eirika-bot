const YouTube = require("discord-youtube-api");
const youtube = new YouTube("AIzaSyDZ9TIyy_xApBffeBnZLeARZMeRv24rLng");

exports.run = async (client, message, args) => {
    const videoLink = await youtube.searchVideos(args[0]);
    message.channel.send("Thí chủ muốn tìm cái video này? " + videoLink.url);
}