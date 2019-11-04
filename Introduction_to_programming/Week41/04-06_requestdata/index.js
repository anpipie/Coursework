// Tehtävä 4. Haetaan nyt aitoa dataa APIn kautta. Tee ohjelma, joka hakee viimeisimmän sääaseman mittaustiedon
// osoitteesta:
// https://webapi19sa-1.course.tamk.cloud/v1/weather/latest
// Käytä request-moduulia datan hakuun

/* const request = require('request')
console.log('Onko dataa?')
request('https://webapi19sa-1.course.tamk.cloud/v1/weather/latest', function (error, response, body) {
  if (error) {
    return console.log('Error:', error)
  }
  console.log('Dataa on: ' + body)
})
 */
// Tehtävä 5. Tee ohjelma, joka hakee työntekijät, osastot ja projektit asynkronisesti API poluista:
// http://home.tamk.fi/~poypek/iosapi/index.php/employees
// http://home.tamk.fi/~poypek/iosapi/index.php/departments
// http://home.tamk.fi/~poypek/iosapi/index.php/projects

// Käytä samaa request-modulia kuin edellisessä tehtävässä. Tee myös synkronointifunktio checkDone
// (saa parametrinaan valmiin haun nimen), jossa tarkastetaan, että kaikki haut ovat valmiit
// ja sitten tulostetaan datat näytölle.

/* const requestEmployees = require('request')
const paths = [['employees', 'http://home.tamk.fi/~poypek/iosapi/index.php/employees'],
  ['departments', 'http://home.tamk.fi/~poypek/iosapi/index.php/departments'],
  ['projects', 'http://home.tamk.fi/~poypek/iosapi/index.php/projects']]

const resultsList = []

function requestData (item) {
  requestEmployees(item[1], function (error, response, body) {
    if (error) {
      return console.log('Error:', error)
    }
    resultsList.push(body)
    checkDone(item[0])
  })
}

function checkDone (requestName) {
  console.log('Phase:' + requestName)
  if (resultsList.length === paths.length) {
    console.log('All done :-)')
    resultsList.forEach(function (item) { console.log(item) })
  }
}

paths.forEach(requestData)
 */

// Tehtävä 6. Hidasta tarkoituksella employees-hakua esim kahdella sekunnilla.
// Missä järjestyksessä vaiheet nyt tulevat checkDone funktioon?
// Entä missä järjestyksessä data tulostuu?
//
// Vastaus: tulostusjärjestys ennen: departments, employees, projects
// Hidastuksen jälkeen: projects, departments, employees. Data tulostuu samassa järjestyksessä kuin vaiheet.

const requestEmployees = require('request')
const paths = [['employees', 'http://home.tamk.fi/~poypek/iosapi/index.php/employees'],
  ['departments', 'http://home.tamk.fi/~poypek/iosapi/index.php/departments'],
  ['projects', 'http://home.tamk.fi/~poypek/iosapi/index.php/projects']]

const resultsList = []

function requestData (item) {
  if (item === 'employees') {
    setTimeout(requestEmployees(item[1], function (error, response, body) {
      if (error) {
        return console.log('Error:', error)
      }
      resultsList.push(body)
      checkDone(item[0])
    }), 2000)
  } else {
    requestEmployees(item[1], function (error, response, body) {
      if (error) {
        return console.log('Error:', error)
      }
      resultsList.push(body)
      checkDone(item[0])
    })
  }
}

function checkDone (requestName) {
  console.log('Phase:' + requestName)
  if (resultsList.length === paths.length) {
    console.log('All done :-)')
    resultsList.forEach(function (item) { console.log(item) })
  }
}

paths.forEach(requestData)
