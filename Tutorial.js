let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Simple Whatsapp Bot :
Credit: *Floren*

Hai *%name!* 👋

Tutorial Simple Bot Whatsapp

_*Note :* Kalau mau ambil script bot tidak perlu mengatasnamakan github saya gpp kok! Tapi izin dulu ya 👌_

*For Termux User*
```$pkg update && pkg upgrade```
```$pkg install git```
```$pkg install ffmpeg```
```$pkg install imagemagick```
```$pkg install nodejs```
```$git clone https://github.com/Florensius27/Loren-BOT```
```$ls```
```$cd Loren-BOT```
```$npm install```

*Run*
```$node index.js```

*Note :* [Y/n] = Y
            [Default=N] = Y

*For Windows/Vpn/Rdp User*
> ```git clone https://github.com/Florensius27/Loren-BOT```
```> cd Loren-BOT```
```> npm install```

Follow Social media Creator
*instagram = @Loren_27*
*Github : Florensius27*
*Youtube : Florensius_27*

Social media owner
*Instagram = @Bernadetta_Hutabarat*

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

