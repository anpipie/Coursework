class Math {
  static abs (value) {
    const x = Number(value)
    if (isNaN(x)) {
      throw new TypeError('value must be number')
    }
    if (x < 0) {
      return x * -1
    } else {
      return x
    }
  }
}
module.exports = Math
