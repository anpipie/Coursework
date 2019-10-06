
/* Tehtävä 5. Funktiot. 
Tee ohjelma, joka arpoo kaksi satunnaista lukua väliltä 0-10 ja sitten tulostaa niiden summan. 
Tee summan tulostuksesta oma funktio, jolle välitetään kaksi parametria (em. arvotut luvut) 
ja sitten tulostetaan parametrien summa funktiossa. Esim tulostus:
Lukujen 9 ja 1 summa on: 10 */

/* Lukujen arvonta 
Tehtävänanto on hieman ristiriitainen: kehotetaan arpomaan satunnaiset luvut, mutta esimerkkitulostuksessa
 on satunnaiset kokonaisluvut. Tein arvonnan niin että saadaan kokonaisluvut.
*/
let eka = Math.floor (Math.random() * 11)
let toka = Math.floor (Math.random() * 11)

function summa (a, b) {
   console.log('Lukujen ' + a + ' ja ' + b + ' summa on: '  + (a + b))
}
summa (eka, toka)