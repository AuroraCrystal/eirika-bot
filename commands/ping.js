exports.run = (client, message, args) => {
    const m = await message.channel.send("Ping?");
    m.edit(`Cưng chơi được ${m.createdTimestamp - message.createdTimestamp} giây hay ${Math.round(client.ping)} giây? Cỡ nào chuỵ cũng chơi hết.`);
}