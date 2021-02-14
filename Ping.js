let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  await m.reply('*⏳ ᴡᴀɪᴛ ꜱᴇᴅᴀɴɢ memᴩʀᴏꜱᴇꜱ...*')
  let neww = performance.now()
  m.reply(neww - old + 'ms')
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^('ping|speed')$/i
module.exports = handler
