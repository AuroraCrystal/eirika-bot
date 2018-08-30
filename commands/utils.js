function getRandomItem(array, len){
    if (len <= 0) len = array.length;
    var item = Math.floor(Math.random()*len--);
    var x = array[item];
    array[item] = array[len];
    array[len] = x;
    return array[len];
}

function loadJSONParams(param, str) {
  return str.replace(/param/g, param);
}

function uniqRandom(num, data) {
  const rd = Math.floor(Math.random() * Math.floor(data.length - 1))
  return (rd !== num) ? rd : uniqRandom(num, data);
}

function insult(data, args, message) {
  let r_num = 0;

  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if (args[1]) {
    if(!member) {
      for (let i = 0; i < args[1]; i++) {
        r_num = uniqRandom(r_num, data);
        message.channel.send(loadJSONParams(args[0], data[r_num].content));
      }
    } else {
      for (let i = 0; i < args[1]; i++) {
        r_num = uniqRandom(r_num, data);
        message.channel.send(loadJSONParams(member.nickname || member.displayName, data[r_num].content));
      }
    }
  } else {
    if (!member) {
      r_num = uniqRandom(r_num, data);
      message.channel.send(loadJSONParams(args[0], data[r_num].content));
    } else {
      r_num = uniqRandom(r_num, data);
      message.channel.send(loadJSONParams(member.nickname || member.displayName, data[r_num].content));
    }
  }
}

module.exports = {
  insult,
  uniqRandom,
  loadJSONParams,
  getRandomItem,
}
