module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "BABU ☢️_𖣘 -𝐁𝐎𝐓 ⚠️",
	description: " bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["61575796191555", "61575796191555"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ ERR ] You don't have permission to use this command, This Command Only For ULLASH", event.threadID, event.messageID);
  api.sendMessage(`[ OK ] ${global.config.BOTNAME} Bot are now turned off.`,event.threadID, () =>process.exit(0))
}
