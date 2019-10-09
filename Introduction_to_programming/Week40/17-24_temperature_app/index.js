
const rl = require('readline-sync')
const fetch = require('node-fetch')
const navigator = require('./navigator.js')

function main () {
  const apikey = '' // add your apikey here
  class Weather {
    constructor (city) {
      this.city = city
      this._latitude = ''
      this._longitude = ''
    }

    fetchTemperature (funct) {
      let path = ''
      if (this._latitude === '') {
        path = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&APPID=' + apikey + '&units=metric'
      } else {
        path = 'http://api.openweathermap.org/data/2.5/weather?lat=' + this.latitude + '&lon=' + this.longitude + '&APPID=' + apikey + '&units=metric'
      }
      fetch(path)
        .then((res) => res.json())
        .then((json) => funct(json.main.temp))
        .catch(function (error) {
          console.log(error)
        })
    }

    set latitude (latitude) {
      if (isNaN(latitude) || latitude < -90 || latitude > 90) {
        throw new Error('Not a valid coordinate')
      } else {
        this._latitude = latitude
      }
    }

    get latitude () {
      return this._latitude
    }

    set longitude (longitude) {
      if (isNaN(longitude) || longitude < -180 || longitude > 180) {
        throw new Error('Not a valid coordinate')
      } else {
        this._longitude = longitude
      }
    }

    get longitude () {
      return this._longitude
    }
  }

  // fetch by city
  const fetchByCity = function () {
    function askCities () {
      const userChoises = []
      console.log('Give the name of the city (type "end" when ready):')
      while (userChoises.length < 20) {
        const city = rl.question()
        if (city === 'end') {
          break
        } else {
          userChoises.push(city)
        }
      }
      return userChoises
    }
    function getTemperatures (listOfCities) {
      const cityTempList = []
      listOfCities.forEach((city) => {
        const weather = new Weather(city)
        weather.fetchTemperature((celsius) => {
          cityTempList.push([city, celsius])
          if (cityTempList.length === listOfCities.length) {
            cityTempList.sort(function (a, b) { return a[1] - b[1] })
            cityTempList.forEach((value) => {
              console.log(value[0] + ':  ' + value[1] + '\xB0C')
            })
          }
        })
      })
    }

    const cities = askCities()
    getTemperatures(cities)
  }

  // fetch by latitude & longitude
  const fetchByCoordinates = function () {
    function askCoordinate (type) {
      const coordinate = rl.questionFloat(type + ': ')
      // it would be good to check here that coordinate is valid
      return coordinate
    }

    const weather = new Weather()
    weather.latitude = askCoordinate('latitude')
    weather.longitude = askCoordinate('longitude')
    weather.fetchTemperature((celsius) => console.log(celsius + '\xB0C'))
  }

  // fetch by currentlocation
  function fetchByLocation () {
    function showPosition (position) {
      const weather = new Weather()
      weather.latitude = position.coords.latitude
      weather.longitude = position.coords.longitude
      weather.fetchTemperature((celsius) => console.log('Latitude: ' + weather.latitude + '\xB0, Longitude: ' + weather.longitude + '\xB0\nTemperature: ' + celsius + ' \xB0C'))
    }
    navigator.geolocation.getCurrentPosition(showPosition)
  }

  function askSearchType () {
    console.log('TEMPERATURES \n Do you want to get the current temperature \n 1 - by city names \n 2 - by coordinates \n 3 - by current location ')
    const selection = rl.questionInt('Select:')
    if (selection === 1) {
      fetchByCity()
    }
    if (selection === 2) {
      fetchByCoordinates()
    }
    if (selection === 3) {
      fetchByLocation()
    }
  }

  askSearchType()
}
main()
