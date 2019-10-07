// Create application where you ask from user an id of star wars character.
// Then fetch information about that character from the backend and display that for the end user.

const fetch = require('node-fetch')
const rl = require('readline-sync')
function main () {
  // ask id
  const id = rl.questionInt('Please, give id:')

  // make path
  const path = 'https://swapi.co/api/people/' + id + '/'

  // fetch and print
  fetch(path)
    .then(res => res.json())
    .then(json => show(json))

  function show (json) {
    console.log(json.name + ' has ' + json.eye_color + ' eyes.')
  }
}
main()
