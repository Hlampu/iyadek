// S C R I P T  O R I  B Y  @BochilGaming ๐ญ
// M A D E  B Y  Letta - Sama ๐ฐ  
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -
// โข Allah SWT
// โข Nurutomo
// โข Bochilgaming
// โข Rominaru
// โข Kannachann
// โข The.Sad.Boy01
// โข Rasel comel
// โข Xtreshe (Beban)
// โข Dll

//[!] Jangan Dihapus, mending ditambahin 

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
global.sig = ''
global.sgh = ''
global.sgc = ''
global.sdc = '-'
global.snh = '-'

/*============== PAYMENT ==============*/
global.pdana = '083181085070'
global.povo = '083181085070'
global.pgopay = '083181085070'
global.ppulsa = '083181085070'
global.ppulsa2 = '083181085070'
global.psaweria = '083181085070'

/*============== NOMOR ==============*/
global.nomorbot = '79806608435'
global.nomorown = '436507000206999'
global.namebot = '๐ป๐๐๐๐๐-แดแดแญเฟ'
global.nameown = '๐ป๐๐๐๐๐-แดแดแญเฟ'


/*============== STAFF ==============*/
global.owner = [
  ['436507000206999'],
  ['436507000206999'],
  ['436507000206999'],
  ['436507000206999', '๐ป๐๐๐๐๐-แดแดแญเฟ', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = ['436507000206999'] // Want some help?
global.prems = ['436507000206999'] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '282b5bc387bca446',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Deffbotz',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'APIKEY',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'WYUWu27O',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/
//GANTI SETERAH MU
global.wm = '                ใ ๐ป๐๐๐๐๐-แดแดแญเฟ ใ' //Main Watermark
global.wm2 = '๊ท๏ธถ๊ท๊ฅ๊ท โงโห ๊ฐเธห๐ป๐๐๐๐๐-แดแดแญเฟหเธ ๊ฑ โงโห๊ท๏ธถ๊ท๊ฅ๊ท'
global.wm3 = 'โซนโซบ  ๐ป๐๐๐๐๐-แดแดแญเฟ'
global.botdate = `โซนโซบ ๐๐ฎ๐๐ฒ: ${week} ${date}`
global.bottime = `๐ง ๐ ๐? ๐ : ${wktuwib}`
global.titlebot = '๐ฑ ๐ป๐๐๐๐๐-แดแดแญเฟ Whatsapp Bot By Romli'
global.author = '                ใ ๐ป๐๐๐๐๐-แดแดแญเฟ ใ'


/*============== LOGO ==============*/
// INI JUGA GANTI SETERAH MU
global.thumb = 'https://telegra.ph/file/e52b9c120b83437eb894b.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/e52b9c120b83437eb894b.jpg'
global.thumbbc = 'https://telegra.ph/file/ca65ae84ea60f45a64133.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

/*============== TEXT ==============*/
global.wait = '```ใโฐโฐโฐโฑโฑโฑโฑโฑโฑโฑใLoading...```'
global.eror = '```404 error```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/e52b9c120b83437eb894b.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'โโโโโโฉ' //top
global.dmenub = 'โโ' //body
global.dmenub2 = 'โ' //body for info cmd on Default menu
global.dmenuf = 'โโโโโโโ' //footer

// COMMAND MENU
global.dashmenu = 'โโโโโโโโโโ *DASHBOARD* โโโโโโโโโโ'
global.cmenut = 'โโโโโโโใ'                       //top
global.cmenuh = 'ใโโโโโโ'                        //header
global.cmenub = 'โโ '                            //body
global.cmenuf = 'โโโโโโโโโโโโเน\n'                //footer
global.cmenua = '\nโ โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ โ\n     ' //after
global.pmenus = 'โ'                              //pembatas menu selector

global.htki = 'โโโโโโใ' // Hiasan Titile (KIRI)
global.htka = 'ใโโโโโโ' // Hiasan Title  (KANAN)
global.lopr = 'โ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'โ' //LOGO FREE ON MENU.JS
global.htjava = 'โซนโซบ'    //hiasan Doang :v
global.hsquere = ['โถ','โ','โซนโซบ']

/*============== STICKER WM ==============*/
global.stickpack = '๐ป๐๐๐๐๐-แดแดแญเฟ'
global.stickauth = `By ๐ป๐๐๐๐๐-แดแดแญเฟ`

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '๐',
      limit: '๐ซ',
      health: 'โค๏ธ',
      exp: 'โจ',
      money: '๐น',
      bank: '๐ฆ',
      potion: '๐ฅค',
      diamond: '๐',
      common: '๐ฆ',
      uncommon: '๐๏ธ',
      mythic: '๐',
      legendary: '๐๏ธ',
      superior: '๐ผ',
      pet: '๐',
      trash: '๐',
      armor: '๐ฅผ',
      sword: 'โ๏ธ',
      pickaxe: 'โ๏ธ',
      fishingrod: '๐ฃ',
      wood: '๐ชต',
      rock: '๐ชจ',
      string: '๐ธ๏ธ',
      horse: '๐ด',
      cat: '๐ฑ',
      dog: '๐ถ',
      fox: '๐ฆ',
      petFood: '๐',
      iron: 'โ๏ธ',
      gold: '๐ช',
      emerald: 'โ๏ธ',
      upgrader: '๐งฐ'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
