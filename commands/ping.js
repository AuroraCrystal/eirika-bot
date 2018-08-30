exports.run = (client, message, args) => {
    const m = await message.channel.send("Ping?");
    m.edit(`Tốc độ ném ball của chuỵ là ${m.createdTimestamp - message.createdTimestamp} giây. Nhưng để đấm vỡ mặt cưng chỉ mất có ${Math.round(client.ping)} giây thôi.`);
}