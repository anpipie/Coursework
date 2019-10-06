/* Tehtävä 6. Käyttäjän syöte komentoriviltä. 
Tee ohjelma, joka arpoo satunnaisen luvun väliltä 1-100 ja arvuuttelee sitä käyttäjältä. 
Jos käyttäjän syöte on pienempi kuin luku, niin vastataan suurempi. 
Jos syöte on suurempi, niin vastataan pienempi.
Kun käyttäjä vastaa oikein, lopetetaan ja kerrotaan montako arvausta meni.  */

// otetaan readline-sync käyttöön ja annetaan nimeksi rl. 
// Huom! Editorissa näkyvä pisteviiva require:n tarkoittaa, että se ei ole ES6 mukainen.

const rl = require('readline-sync')

// arvotaan arvuuteltava luku
const luku = Math.floor(Math.random() * 101) + 1

// arvauskertojenlaskuri
let lkm = 0

// käyttäjän arvaus
let arvaus = 0

// kysytään arvauksia kunnes vastaa oikein
do {
arvaus = rl.questionInt('Anna luku 1-100 \n')
lkm++
if (arvaus < luku) {
    console.log('Suurempi')
}
if (arvaus > luku ){
    console.log('Pienempi')
}

}
while (arvaus != luku)

console.log ('Oikein! Arvasit ' + lkm + ' kerralla')



