let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *~Florensius*

User TERMUX Android
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs
5) $git clone https://github.com/Florensius27/Loren-BOT
6) $ls
7) $cd Loren-BOT
8) $npm i
9) $node index.js

note : lambang *$* tidak usah ditulis!

User WINDOWS/VPS/RDP dll
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

