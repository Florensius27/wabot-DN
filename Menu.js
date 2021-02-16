let handler = async (m, { conn, usedprefix:_p }) => {
  let preview = {}
  try {
   if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Florensius27/Loren-BOT')
  } catch (e) {
    try {
     if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
     } finally {
       let exp = global.DATABASE.data.users[m.sender].exp
       let name = conn.getName(m.sender)
       let d = new Date
       let locale ='id-Id'
       let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d/84600000) % 5]
       let week = d.toLocaleDateString(locale, { weekday: 'long' })
       let date = d.toLocaleDateString(locale, {
         day: 'numeric',
         month: 'long'
         year: 'numeric'
        })
        let time = d.toLocaleTimeString(locale, {
          hour: 'numeric',
          minute: 'numeric'
          second: 'numeric'
        })

        let text = conn.menu ? conn.menu
          .replace(/%p/g, _p)
          .replace(/%exp/g, exp)
          .replace(/%name/g, name)
          .replace(/%weton/g, weton)
          .replace(/%week/g, weton)
          .replace(/%date/g, date)
          .replace(/%time/g, time)
━━━❏ *[_Marxy-BOT_]* ❏━━━

Hai *@%name!* 👋
Bot name : Marxy BOT


⏳waktu = %hour
🔮tanggal = %date

Rules 
*•Telpon/VC = BLOCK
*•spam = BLOCK

Main
> !help
> !menu
> !commands

━━━❏ *[_Commands_]* ❏━━━

┏━━ *[_sticker maker_]*
┃
┣➤ $(_p)sticker *(caption/reply)*
┣➤ $(_p)stickergif *(caption/reply)*
┣➤ $(_p)toimg *(caption/reply)*
┗━━━━━━━━━━

┏━ *[_Downloader_]*
┃
┣➤ $(_p)yta *[url]*
┣➤ $(_p)ytmp3 *[url]*
┣➤ $(_p)ytmp4 *[url]*
┣➤ $(_p)play *[title]*
┣➤ $(_p)joox *[url]*
┗━━━━━━━━

┏━━ *[_Search_]*
┃
┣➤ $(_p)google *[search]*
┣➤ $(_p)googlef  *[search]*
┣➤ $(_p)apkmod *[aplikasi]*
┣➤ $(_p)lirik *[title]*
┗━━━━━━━━━

┏━━ *[_Tools_]*
┃
┣➤ $(_p)harta tahta *[text]*
┣➤ $(_p)nulis *[text]*
┣➤ $(_p)ttp *[text]*
┣➤ $(_p)textpro <effect> <text>|<text>
┣➤ $(_p)attp *[text]*
┣➤ $(_p)glitchtext *[text]*
┣➤ $(_p)tts *[text]*
┣➤ $(_p)avangerslogo *[text]*
┣➤ $(_p)readmore <text>|<text>
┗━━━━━━━━━━━━

┏━ *[_Education_]*
┃
┣➤ $(_p)kbbi *[kata kunci]*
┣➤ $(_p)wiki *[kata kunci]*
┣➤ $(_p)brainly *[query]*
┣➤ $(_p)math *[mode]*
┣➤ $(_p)calc *angkanya* *[+-×+/÷]*
┗━━━━━━━━━━━

┏━ *[_Xp and limit_]*
┃
┣➤ limit = ∞
┣➤ $(_p)mining = +500 xp
┣➤ $(_p)fight = +500 xp
┣➤ $(_p)daily
┣➤ $(_p)claim
┗━━━━━━━━

┏━ *[_other_]*
┃
┣➤ $(_p)tutorial 
┣➤ $(_p)sosmed
┣➤ $(_p)ping
┣➤ $(_p)speed 
┣➤ $(_p)jadibot
┣➤ $(_p)fakta
┗━━━━━━

┏━━ *[_Owner_]*
┃
┣➤ $(_p)banchat
┣➤ $(_p)unbanchat
┣➤ $(_p)broadcast *[text]*
┣➤ $(_p)bc *[text]*
┣➤ $(_p)bcgc *[text]*
┣➤ $(_p)broadcastgroup *[text]*
┣➤ $(_p)setmenu *[menu]*
┣➤ $(_p)setprefix *[prefix]*
┣➤ $(_p)promote *@user*
┣➤ $(_p)demote *@user*
┣➤ $(_p)delete *[reply]*
┗━━━━━━━━

┏━ *[_No Category_]* 
┃
┣➤ $(_p) <>                    
┗━━━━━━━━

*NB* : Apabila bot tidak merespon, silahkan send ulang..

⏳Time : open 24 jam
✨Day : Setiap Hari

╭──────────────────
│I Hope You Have A Good Day..!! ✨
│
╰━━> *꧁Marxy • BOT꧂* ━━
━⋆⃟⊱๑⋆⃟⊱๑⋆⃟⊱๑ ˌ⃟ˌ⃟ˌ⃟ˌ‍⚔ˌ⃟ˌ⃟ˌ⃟ˌ ๑⋆⃟⊱๑⋆⃟⊱๑⋆⃟⊱━

*Simple Whatsapp bot by : Florensius*
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help|\commands)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8026)
const readMore = more.repeat(4001)
