// See weather map api. Create account. Create you ask a city from the user.
// App displays the current temperature of that city in celsius.

const rl = require('readline-sync')
const fetch = require('node-fetch')
const apikey = '' // add your apikey here

function main () {
  console.log('Current weather data')
  const city = rl.question('Give name of the city: \n')
  const path = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + apikey + '&units=metric'

  fetch(path)
    .then(res => res.json())
    .then(json => console.log('Temperature in ' + city + ' is ' + json.main.temp + ' \xB0C'))
}

main()
