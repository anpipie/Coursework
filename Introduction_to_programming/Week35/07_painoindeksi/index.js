/* Tehtävä 7. Tee painoindeksilaskentaohjelma. 
Anna syötteenä pituus sentteinä ja painon kiloina. Ohjelma tulostaa painoindeksin ja analyysin */

// otetaan readline-sync käyttöön ja annetaan nimeksi rl 
const rl = require('readline-sync')

//funktio painoindeksin laskentaan
function painoindeksi (paino, pituus){
    let indeksi = paino/ ((Math.pow((pituus/100), 2)))
    //pyöristys yhteen desimaaliin
    pyoristettyindeksi = (Math.round(indeksi*10))/10
    return (pyoristettyindeksi)
}

// kysytään oma paino ja pituus
let omapaino = rl.questionInt('Anna painosi (kg):\n')
let omapituus = rl.questionInt('Anna pituutesi (cm):\n')

let omaindeksi = painoindeksi(omapaino, omapituus)

// oman painoindeksin analyysi
let analyysi = ''
if (omaindeksi <= 14.9){
    analyysi = 'Sairaalloinen alipaino'
}
else if (omaindeksi <= 17.9){
    analyysi = 'Merkittävä alipaino'
}
else if (omaindeksi <= 18.9){
    analyysi = 'Lievä alipaino'
}
else if (omaindeksi <= 24.9){
    analyysi = 'Normaali paino'
}
else if (omaindeksi <= 29.9){
    analyysi = 'Lievä ylipaino'
}
else if (omaindeksi <= 34.9){
    analyysi = 'Merkittävä ylipaino'
}
else if (omaindeksi <= 29.9){
    analyysi = 'Vaikea ylipaino'
}
else {
    analyysi = 'Sairaalloinen ylipaino'
}

// muutetaan desimaalipiste pilkuksi suomalaisen lukujen esittämiskäytännön mukaisesti
let omaindeksisuomi = (omaindeksi.toString()).replace('.' , ',')

console.log ('Painoindeksi: ' + omaindeksisuomi + ', ' + analyysi)