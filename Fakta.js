let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.fakta)}”`, m)
}
handler.help = ['fakta']
handler.tags = ['pengetahuan']
handler.command = /^(fakta)$/i
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
"Gajah adalah satu-satunya hewan mamalia darat yang tidak dapat melompat dan meloncat, karena struktur kaki gajah tidak untuk melompat dan meloncat, melainkan untuk menahan bobot tubuhnya yang bisa mencapai 2.700 kg hingga 6.000 kg!"
"Paus biru adalah hewan terbesar saat ini, karena memiliki ukuran tubuh yang sangat besar, paus biru dapat memilik berat sekitar 50.000 kg hingga 150.000 kg atau 181 ton, dengan panjang tubuh yang mencapai 33 meter, meskipun memiliki ukuran tubuh yang sangat besar, paus biru dapat berenang dengan kecepatan 20 km/jam sampai dengan 50 km/jam,walau paus biru hidup dilaut, tetapi paus tidak termasuk ikan!"
"Tikus adalah hewan dengan tubuh paling fleksibel, tikus dewasa saja dapat melewati lubang yang berdiameter kurang lebih 2 cm, itu sebabnya tikus dapat bersembunyi atau datang dari mana saja dengan sesuka hati, tak hanya fleksibel, tikus juga memiliki kecerdasan yang luar biasa!"
"Kodok yang dapat mendeteksi gempa adalah kodok L'Aqila, kodok L'Aqila adalah satu-satunya kodok yang dapat mendeteksi gempa"
"Ayam adalah keturunan langsung dari Tyrannosaurus rex, dan ayam memiliki jumlah yang jauh melebihi jumlah manusia yang hidup dibumi yaitu 19 miliar lebih, sedangkan manusia hanya 7 miliar (memurut data tahun 2011)"
"Semut adalah hewan dengan jumalah terbanyak didunia, dengam jumlah kurang lebih 10.000.000 triliun (sepuluh juta triliun), dengan jumlah yang fantastis itu, diperkirakan bahwa berat seluruh semut didunia sama dengan berat seluruh manusia di bumi"
"Kodok terbesar saat ini adalah kodok Goliath yang memiliki berat bisa mencapai 3,3 kg dengan panjang 34 cm (lebih besar dari ukuran telapak tangan orang dewasa)"
"Maklukh terkecil didunia adalah tardigrada, ukuran nya hanya sekitar 0,00005 mm, tardigrada juga adalah satu-satunya hewan yang mampu bertahan di keadaan yang ekstrim, seperti lingkungan beku (0°C) hingga bersuhu sangat panas (151°C) bahkan bertahan di radiasi sebesar 500.700 Rad, 1.000 kali lebih tinggi dari makhluk hidup lain dalam bertahan, tardigrada juga bisa hidup tanpa oksigen dan berumur sekitar 10-100 tahun"
