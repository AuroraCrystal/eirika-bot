exports.run = (client) => {
    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
    client.user.setActivity("Dark Souls 69", { type: "PLAYING" }).catch(console.error);
  }
