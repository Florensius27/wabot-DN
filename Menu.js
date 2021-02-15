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
┣➤ !sticker *(caption/reply)*
┣➤ !stickergif *(caption/reply)*
┣➤ !toimg *(caption/reply)*
┗━━━━━━━━━━

┏━ *[_Downloader_]*
┃
┣➤ !yta *[url]*
┣➤ !ytmp3 *[url]*
┣➤ !ytmp4 *[url]*
┣➤ !play *[title]*
┣➤ !joox *[url]*
┗━━━━━━━━

┏━━ *[_Search_]*
┃
┣➤ !google *[search]*
┣➤ !googlef  *[search]*
┣➤ !apkmod *[aplikasi]*
┣➤ !lirik *[title]*
┗━━━━━━━━━

┏━ *[_Quotes_]*
┃
┣➤ !bucin
┣➤ !katabijak
┣➤ !fakta
┣➤ !pantun
┗━━━━━━

┏━━ *[_Tools_]*
┃
┣➤ !harta tahta [text]
┣➤ !textpro <effect> <text> | text
┣➤ !glitchtext *[text]*
┣➤ !avangerslogo *[text]*
┣➤ !nulis *[text]*
┗━━━━━━━━━━━

┏━ *[_Education_]*
┃
┣➤ !kbbi *[kata kunci]*
┣➤ !brainly *[query]*
┣➤ !math *[mode]*
┣➤ !calc *angkanya* *[+-×+/÷]*
┗━━━━━━━━━━━

┏━ *[_Xp and limit_]*
┃
┣➤ !limit = ∞
┣➤ !mining = +500 xp
┣➤ !fight = +500 xp
┣➤ !daily
┣➤ !claim
┗━━━━━━━

┏━ *[_other_]*
┃
┣➤ !tutorial 
┣➤ !sosmed
┣➤ !ping
┣➤ !speed 
┣➤ !jadibot
┗━━━━━━

┏━━ *[_Owner_]*
┃
┣➤ !banchat
┣➤ !unbanchat
┣➤ !broadcast *[text]*
┣➤ !bc *[text]*
┣➤ !bcgc *[text]*
┣➤ !broadcastgroup *[text]*
┣➤ !setmenu *[menu]*
┣➤ !setprefix *[prefix]*
┣➤ !promote *@user*
┣➤ !demote *@user*
┣➤ !delete *[reply]*
┗━━━━━━━━

┏━ *[_No Category_]* 
┃
┣➤ ! <>                    
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
