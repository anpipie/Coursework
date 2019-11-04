// Tehtävä 3. Tiedoston luku on tyypillinen tilanne, jossa voidaan hyödyntää asynkronisuutta. Tallenna oheiset
// tiedostot omaan hakemistoosi ja tee index.js tiedosto, joka lukee toisen synkronisesti (sync.txt)
// ja toisen asynkronisesti (async.txt). Tulosta tekstit näytölle.

const fs = require('fs')

console.log(fs.readFileSync('sync.txt', 'utf8'))

fs.readFile('async.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})
