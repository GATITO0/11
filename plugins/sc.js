//Codigo by ZenBot
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
let who = m.sender
let pp = await(await fetch('https://imgur.com/O1J4KJ7.jpg')).buffer()
let kai = await(await fetch('https://imgur.com/O1J4KJ7.jpg')).buffer()
let text = `*https://github.com/ALBERTO9883/ZenBot*`.trim()
conn.reply(m.chat, text, m, { thumbnail: kai, contextInfo: {
mentionedJid: [who],
externalAdReply: {
title: '𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: 'Aʟʙᴇʀᴛᴏ ʏ Asʜʟʏ🌹',
thumbnail: pp
}}})}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^script|repositorio|repobot|scbot$/i
module.exports = handler
