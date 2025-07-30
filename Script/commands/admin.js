const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞      : 𝐒𝐤 𝐡𝐚𝐛𝐢𝐛  ッ
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝐂𝐨𝐦𝐩𝐥𝐢𝐜𝐚𝐭𝐞𝐝
┃ 🎂 𝐀𝐠𝐞       : 19
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐀𝐥𝐥 𝐩𝐚𝐬𝐬
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝐇𝐨𝐨𝐠𝐡𝐥𝐲 , 𝐊𝐨𝐥𝐤𝐚𝐭𝐚
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎭𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 : 𝐢 𝐚𝐦 𝐬𝐤 𝐡𝐚𝐛𝐢𝐛
┃ 📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : 𝐬𝐤 𝐡𝐚𝐛𝐢𝐛
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐄𝐃𝐈𝐓𝐈𝐍𝐆 𝐙𝐍𝐗 
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://graph.facebook.com/100082962740878/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
