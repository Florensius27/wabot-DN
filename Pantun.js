let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pantun)}”`, m)
}
handler.help = ['pantun']
handler.tags = ['quotes']
handler.command = /^(pantun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.pantun = [
" *PANTUN:*\nAda anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur",
" *PANTUN:*\nTanam kacang di pagi hari,\nTumbuh enam layu sebatang,\nKeburukan orang jangan dicari,\nBila kalian sedang puasa",
" *PANTUN:*\nAkhir bulan mendapat gaji,\nGaji untuk membeli ketupat,\nRajin-rajinlah sholat dan mengaji,\nJanganlah lupa puasa dan zakat",
" *PANTUN:*\nIkan hiu makan tomat,\nI Love You So Much
" *PANTUN:*\nWaktu daftar hari terakhir,\nWaktu terasa banyak terbuang,\nKamu nggak perlu khawatir,\ncintaku hanya untukmu seorang",
" *PANTUN:*\nAda anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur",
" *PANTUN:*\nSeribu bebek di kandang singa,\nhanya satu berwarna belang,\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang",
" *PANTUN:*\nHari minggu pergi ke pasar,\nBeli sayur dan juga beras,\nTiap hari harus belajar,\nPasti akan menjadi cerdas",
" *PANTUN:*\nAyam goreng setengah mateng,\nBelinya di depan tugu.\nAbang sayang, abangku ganteng,\nlneng di sini setia menunggu",
" *PANTUN:*\nApi kecil dari tungku,\nApinya kecil habis kayu.\nSudah lama kutunggu-tunggu,\nkapan kamu bilang I love you",
" *PANTUN:*\nSeribu bebek di kandang singa,\nhanya satu berwarna belang\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang",
" *PANTUN:*\nPergi memancing saat fajar,\nPulang siang membawa ikan\nSiapa yang rajin belajar\nJadi orang sukses kemudian",
" *PANTUN:*\nBeli computer itu biasa\nSupaya belajar jadi semangat\nMari kita belajar puasa\nAgar kita jadi kuat",
" *PANTUN:*\nMinum sekoteng hangat rasanya,\nminum segelas ada yang minta.\nLaki-laki ganteng siapa yang punya?\nBolehkah aku jatuh cinta",
]
