const fetch = require('node-fetch')

function main () {
  const idNumbers = []

  function checkStatus (response) {
    if (response.ok) { 
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
    const fetchResultForID = {
      name: '',
      movies: []
    }
    const pathWithID = 'https://swapi.co/api/people/' + id
    const jsonOfID = await fetchData(pathWithID)
    fetchResultForID.name = jsonOfID.name
    for (let i = 0; i < jsonOfID.films.length; i++) {
      filmsToFetch.push(fetchData(jsonOfID.films[i]))
    }
    const filmsList = await Promise.all(filmsToFetch)
    for (let i = 0; i < filmsList.length; i++) {
      fetchResultForID.movies.push(filmsList[i].title)
    }
    return fetchResultForID
  }

  async function fetchAll (idNumbers) {
    let allNamesAndTitles = []
    const fetchNameAndTitlesForIDs = []
    for (let i = 0; i < idNumbers.length; i++) {
      fetchNameAndTitlesForIDs.push(fetchAllTitles(idNumbers[i]))
    }
    allNamesAndTitles = await Promise.all(fetchNameAndTitlesForIDs)
    return allNamesAndTitles
  }

  function listIDNumbers () {
    for (let i = 2; i < process.argv.length; i++) {
      idNumbers.push(process.argv[i])
    }
  }

  listIDNumbers()

  fetchAll(idNumbers).then(namesAndTitles => console.log(namesAndTitles))
    .catch(err => console.error(err))
}
main()
