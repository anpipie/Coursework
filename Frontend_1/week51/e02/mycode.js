// Slot machine. On each refresh, three random fruit images are shown. Displays "you won if all three
// images are the same.

const urls = ['http://koti.tamk.fi/~pohjus/1.png', 'http://koti.tamk.fi/~pohjus/2.png',
  'http://koti.tamk.fi/~pohjus/3.png']
const numbers = []

const checkWin = () => {
  if (numbers[0] === numbers[1] && numbers[0] === numbers[2]) {
    return true
  } else {
    return false
  }
}

while (numbers.length < 3) {
  const number = Math.floor((Math.random() * 3) + 0)
  numbers.push(number)
}

for (let i = 0; i < numbers.length; i++) {
  document.write('<img src="' + urls[numbers[i]] + '"/>')
}

if (checkWin()) {
  document.write('<h2>You Won!</h2>')
}
