// Assignment: Create lotto app  with Node.js. Ask lotto numbers from the user. Calculate seven random numbers between 1 - 40.
// If user lotto numbers were the same than lotto, display “you won”.
// Use iteration, calculate random lotto until user wins. If one lotto is calculated in real life in one week,
// how many years does it take to win the lottery? Divide your app into functions. Use ESLint.

// Note: In the example output given along with the assignment the lotto results we displayed for each week. In practice,
// this much console.logging may result in running out of memory when running this app.

const rl = require('readline-sync')

// Asks 7 numbers from the user. Returns list of numbers user picked, sorted in ascending order.
function askNumbers () {
  const userNumbers = []
  function askNumber () {
    const number = rl.questionInt('Give a number between 1 and 40 \n')
    if (Number.isInteger(number) && number <= 40 && number > 0 && !checkDoubles(number, userNumbers)) {
      userNumbers.push(number)
    } else {
      console.log('Invalid number. Try again.')
    }
  }
  do {
    askNumber()
  }
  while (userNumbers.length < 7)
  userNumbers.sort(function (a, b) {
    return a - b
  })
  return userNumbers
}

// Draws 7 random lotto numbers. Returns list of lotto numbers, sorted in ascending order.
function drawLotto () {
  const lottoNumbers = []
  function getRandomNumber () {
    const number = Math.floor(Math.random() * (41 - 1)) + 1
    return number
  }
  do {
    const number = getRandomNumber()
    if (!checkDoubles(number, lottoNumbers)) {
      lottoNumbers.push(number)
    }
  } while (lottoNumbers.length < 7)
  lottoNumbers.sort(function (a, b) {
    return a - b
  })
  return lottoNumbers
}

// Checks if a number already is on the list. Returns true/false.
function checkDoubles (number, list) {
  if (list.includes(number)) {
    return true
  } else {
    return false
  }
}

// Compares lotto numbers with the user numbers. Returns the number of matching lotto numbers.
function compare (lottoNumbers, userNumbers) {
  let numbersMatch = 0
  for (let i = 0; i < 7; i++) {
    if (userNumbers.includes(lottoNumbers[i])) {
      numbersMatch++
    }
  }
  return numbersMatch
}

// Weekly lottery, repeats until won (7 correct numbers).
function weeklyLotto (userNumbers) {
  const weekCounter = counterMaker()
  let numbersMatch = 0
  do {
    const lottoNumbers = drawLotto()
    numbersMatch = compare(lottoNumbers, userNumbers)
    weekCounter(1)
    printOutput(userNumbers, lottoNumbers, numbersMatch, weekCounter)
  } while (numbersMatch < 7)
}

// Output printer.
function printOutput (userNumbers, lottoNumbers, numbersMatch, weekCounter) {
  const printUserNumbers = listToString(userNumbers)
  const printLottoNumbers = listToString(lottoNumbers)
  console.log('User lotto ' + '\t' + printUserNumbers + '\n' + 'Random lotto ' + '\t' + printLottoNumbers)
  if (numbersMatch < 7) {
    console.log(numbersMatch + ' correct\n' + weekCounter(0) + ' weeks')
  } else {
    console.log(numbersMatch + ' correct - you won!\n' + weekCounter(0) + ' weeks')
  }
}

// Converts list to string for output printing. Uses space as a separator and adds 0 in front of the single digit
// numbers. Returns a string.
function listToString (numberList) {
  let newString = ''
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] >= 10) {
      newString = newString + numberList[i] + ' '
    } else {
      newString = newString + '0' + numberList[i] + ' '
    }
  } return newString
}

// Makes counter. Returns counter function.
function counterMaker () {
  let counter = 0
  return function (add) {
    counter = counter + add
    return counter
  }
}

// Main
function main () {
  const userNumbers = askNumbers()
  weeklyLotto(userNumbers)
}

main()
