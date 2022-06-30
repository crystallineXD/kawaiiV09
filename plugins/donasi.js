let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0857-1559-0172]
│ •  wa.me/6285715590172
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
