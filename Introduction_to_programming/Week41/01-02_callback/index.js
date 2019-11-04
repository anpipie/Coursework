// Tehtävä 1. Tee kaksi summa-funktiota, toinen synkroninen ja toinen asynkroninen (callback).
// Kutsu niitä ja kirjoita summat näytölle.
// esim kutsut:
// console.log('sync', sum1(2, 4) ) // synkroninen
// sum2(5,5, result => console.log('async', result)) // asynkroninen

function sum1 (a, b) {
  return a + b
}

function sum2 (a, b, callback) {
  const result = a + b
  return callback(result)
}

console.log('sync ' + sum1(2, 4))
sum2(5, 5, result => console.log('async', result))

// Tehtävä 2. Tee callbackTest niminen funktio, jolle annetaan parametrina logIt-niminen funktio ja jonkun henkilön nimi.
// callbackTest odottaa kaksi sekunttia ja kutsuu logIt-funktiota ja välittää sille henkilön nimen.
// Sitten kysytään 'mitä kuuluu'.  logIt tulostaa tervehdyksen henkilön nimelle. Missä järjestyksessä tulostukset tulevat?
// Esim kutsu:
// callbackTest(logIt, 'Keke')

function callbackTest (callback, name) {
  setTimeout(callback, 2000, name)
  console.log('Mitä kuuluu?')
}
function logIt (name) {
  console.log('Hei ' + name)
}
callbackTest(logIt, 'Keke')
