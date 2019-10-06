/* Tehtävä 8. Tee kertolaskujen harjaannuttamisohjelma. 
Ohjelma arpoo 5 kertolaskua, jossa luvut ovat 0-10 välillä. Laskut tulostetaan näytölle. 
Tämän jälkeen käyttäjä vastaa laskuihin yksi kerrallaan ja painaa enter. 
Lopuksi ohjelma tulostaa laskut ja oikeat vastaukset, palautteen (esim hymynaama ;-) sekä kertoo, moniko meni oikein.  */


// Arvotaan kerrottavat luvut
let luvut = []
for (i=0; i<10; i++){
    let luku = Math.floor (Math.random() * 11)
    luvut.push(luku)
}

// Tulostetaan kertolaskut
for (i=0; i<5; i++){
    console.log('Lasku ' + i + ': ' + luvut[i] + ' * ' + luvut[i+1])
}

// Kysytään vastaukset
const rl = require('readline-sync')
let vastaukset = []
for (i=0; i<5; i++){
    let vastaus = rl.questionInt('Anna vastaus ' + i + ': ')
    vastaukset.push(vastaus)
}

// Tarkistetaan vastaukset
let oikeitaVastauksiaYht = 0

for (i=0; i<5; i++){
    let oikeaVastaus = (luvut[i] * luvut[i+1])
    if (oikeaVastaus == vastaukset[i]){
        oikeitaVastauksiaYht++
        console.log (luvut[i] + ' * ' + luvut[i+1] + ' = ' + oikeaVastaus + ' :)')
    }
    else {
        console.log (luvut[i] + ' * ' + luvut[i+1] + ' = ' + oikeaVastaus + ' :(')
    }
    
}

console.log('Sait ' + oikeitaVastauksiaYht + '/5 oikein!')