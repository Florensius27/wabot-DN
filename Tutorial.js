let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Simple Whatsapp Bot :
Credit: *Floren*

For TERMUX user
1) $pkg install git
2) $pkg install nodejs
3) $pkg install ffmpeg
4) $pkg install imagemagick
5) $git clone https://github.com/Florensius27/Loren-BOT
7) $cd Loren-BOT
8) $npm install

note : lambang *$* tidak usah ditulis!

For WINDOWS/VPS/RDP User
1) git clone https://github.com/Florensius27/Loren-BOT
2) cd Loren-BOT
3) npm install

`.trim(), m)
}
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

