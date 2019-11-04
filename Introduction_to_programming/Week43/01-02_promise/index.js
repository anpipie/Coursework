/* // 1. & 2.
var sum = null

function makeCalculation () {
  console.log('2) calculating sum...')
  sum = 5 + 5
  console.log('3) sum is ' + sum)
  setTimeout(sendStuffToBackend, 1000)
}

function sendStuffToBackend () {
  console.log('4) sending ' + sum + ' to backends database')
  console.log('5) ending the calculation and sending')
}

console.log('1) starting the calculation and sending')
setTimeout(makeCalculation, 2000)
 */

// 3.

/* const calculationPromise = new Promise(asynFunc)

function asynFunc (resolve, reject) {
  setTimeout(() => {
    console.log('calculating stuff')
    let division = 5 / 5
    resolve(division)
  }, 1000)
}

function ready (result) {
  console.log(`result is ${result}`)
}

// calculationPromise.then(ready)
calculationPromise.then((result) => { console.log(`result is ${result}`) }) */


function makeCalculation (a, b) {
  function asynFunc (resolve, reject) {
    if (b === 0) {
      reject('Cannot divide with zero.')
    } else {
      setTimeout(() => {
        console.log('calculating stuff')
        const division = a / b
        resolve(division)
      }, 1000)
    }

  }
  const p = new Promise(asynFunc)
  return p
}

// make the calculation that takes time and when ready, invoke the
// arrow function.
// makeCalculation().then(result => console.log(`result = ${result}`))

function sendStuffToBackend (result) {
  const random = Math.floor(Math.random() * 2)
  function asynFunc (resolve, reject) {
    if (random === 0) {
      reject('failed to connect to backend')
    } else {
      setTimeout(() => {
      console.log(`sending to backend ${result}`)
      resolve('done')
      }, 1000)
    }
  }
  const p = new Promise(asynFunc)
  return p
}

/* makeCalculation()
    .then(division => sendStuffToBackend(division))
        .then(msg => console.log(msg))
 */

/* makeCalculation(10, 5)
.then(division => sendStuffToBackend(division))
    .then(msg => console.log(msg))
 */

makeCalculation(10, 5)
  .then(division => sendStuffToBackend(division))
  .then(msg => console.log(msg))
  .catch(errormsg => console.log(errormsg))

/* makeCalculation(10, 0)
.then(division => sendStuffToBackend(division))
.then(msg => console.log(msg))
.catch(errormsg => console.log(errormsg)) */