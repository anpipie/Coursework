// 8.

var rls = require('readline-sync')
const fetch = require('node-fetch')

const id = rls.questionInt('give id: ')

function checkStatus (response) {
  if (response.ok) { // res.status >= 200 && res.status < 300
    return response
  } else {
    throw response.statusText
  }
}

async function fetchData (path) {
  const response = await fetch(path)
  const data = await checkStatus(response)
  const json = await data.json()
  return json
}

async function fetchTitle (id) {
  const pathID = 'https://swapi.co/api/people/' + id
  const jsonID = await fetchData(pathID)
  const pathFilm = jsonID.films[0]
  const jsonFilm = await fetchData(pathFilm)
  return jsonFilm.title
}

fetchTitle(id).then((title) => console.log(title))
  .catch(err => console.error(err))
