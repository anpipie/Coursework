/* Tehtävä 3. Vertailu ja satunnaisuus. 
Tee ohjelma, joka arpoo satunnaisesti kaksi lukua väliltä 1-10 ja kertoo suuruusjäjestyksen */

let a = Math.floor(Math.random() * 10) + 1
let b = Math.floor(Math.random() * 10) + 1
if (a == b) {
    console.log(a + ' on yhtäsuuri ' + b)
}
else if (a < b) {
    console.log(a + ' on pienempi kuin ' + b)
}
else {
    console.log(a + ' on suurempi kuin ' + b)
}