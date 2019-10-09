class Position {
  constructor () {
    this.coords = {
      latitude: Math.floor(Math.random() * 181 - 90),
      longitude: Math.floor(Math.random() * 361 - 180)
    }
  }
}

const geolocation = {
  getCurrentPosition: function (funktio) {
    const position = new Position()
    setTimeout(funktio, 1000, position)
  }
}

const navigator = {
  geolocation
}
module.exports = navigator
