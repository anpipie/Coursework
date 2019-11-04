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

async function fetchAllTitles (id) {
  const filmsToFetch = []
  const filmTitles = []
  const fetchResult = {
    name: '',
    movies: []
  }
  const pathID = 'https://swapi.co/api/people/' + id
  const jsonID = await fetchData(pathID)
  fetchResult.name = jsonID.name

  for (let i = 0; i < jsonID.films.length; i++) {
    filmsToFetch.push(fetchData(jsonID.films[i]))
  }
  const films = await Promise.all(filmsToFetch)
  for (let i = 0; i < films.length; i++) {
    filmTitles.push(films[i].title)
  }
  fetchResult.movies = filmTitles
  return fetchResult
}

fetchAllTitles(id).then((fetchResult) => console.log(fetchResult))
  .catch(err => console.error(err))
