module.exports.config = {
  name: "goiadmin7",
    version: "1.0.0",
    permission: 0,
    credits: "nazrul",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100082346106643") {
    var aid = ["100082346106643"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["nazrul er chipai", "বিয়া হয়ে গেছে", "নজরুল কে পটাতে গেছে", "নজরুল এর চিপায়", "আমার বস এর চিপায়"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
                 }
