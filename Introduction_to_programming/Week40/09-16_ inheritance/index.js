// TEHTÄVÄT 9-16

// 9.
/*
String.prototype.isPalindrome = function () {
  let reverseString = Array.from(this).reverse().toString().replace(/,/g, '')
  return (this == reverseString)
}
console.log("saippuakauppias".isPalindrome()) // outputs true
console.log("abc".isPalindrome()) // outputs false
*/

// 10.
/*
Object.prototype.hello = function () {
  console.log('hello world!')
}
"moi".hello()
new Array().hello()
new Date().hello() */

// 11 - 13., 16.
class Mammal {
  constructor (name, gender) {
    this.name = name
    this.gender = gender
  }

  giveBirth () {
    if (this.gender !== 'female') {
      throw new Error('Only females can give birth!')
    } else {
      console.log(this.name + ' gives birth')
    }
  }
}

class Human extends Mammal {
  constructor (name, gender, iq) {
    super(name, gender)
    this.learningDone = this.learningDone.bind(this)
    this._iq = iq
  }

  get iq () {
    return this._iq
  }

  set iq (value) {
    if (value < 0) {
      throw new TypeError('IQ cannot be negative!')
    } else {
      this._iq = value
    }
  }

  createArt () {
    console.log(this.name + ' creates art')
  }

  learningDone () {
    console.log(this.name + ' has learned every feature of JavaScript')
  }

  startToLearnJavaScript () {
    console.log(this.name + ' starts to learn JavaScript')
    setTimeout(this.learningDone, 25000 - this._iq * 100)
  }
}

class Dog extends Mammal {
  constructor (name, gender) {
    super(name, gender)
  }

  bark () {
    console.log(this.name + ' barks')
  }
}

class Cat extends Mammal {
  constructor (name, gender) {
    super(name, gender)
  }

  meow () {
    console.log(this.name + ' meows')
  }
}

let spot = new Dog('Spot')
spot.bark() // "Spot barking"

/*
let jack = new Human('jack')
jack.createArt() // "Jack creating art"
 */

let mirri = new Cat('Mirri')
mirri.meow() // "Mirri makes meow sound"

let vilma = new Dog('Vilma', 'female')
vilma.giveBirth()

let viljo = new Cat ('Viljo', 'male')
// viljo.giveBirth() // throws error

/*
let jack = new Human('Jack', 'male')
jack.startToLearnJavaScript() // "Jack starts to learn JavaScript" */

let jack = new Human('jack', 'male', 100)
// jack.startToLearnJavaScript()

let tina = new Human('tina', 'female', 180)
tina.startToLearnJavaScript()

tina.iq = 190  // set function
console.log(tina.iq) // get function
tina.startToLearnJavaScript()

// 14.
/*  Create some object and try out using Object.defineProperty…:
- Make some property non-enumerable and try it out in 'for in'
- Add non-writable property and try to change values
- Try out Object.seal and Object.freeze. What is the difference?
 */

/*
  let house = {
  key: 'Abloy',
  window: 'Pihla'
}

Object.defineProperty(house, 'door', { value: 'Jeld-Wen', enumerable: true })
console.log(house)
console.log(house.key)
console.log(house.door)
Object.defineProperty(house, 'numberOfExits', { value: 3, enumerable: false })
let item
for (item in house) {
  console.log(item + ': ' + house[item])
}
Object.defineProperty(house, 'address', { value: 'Home street 123', writable: false })
house.address = 'Other street 456'
console.log(house.address)

// Object.seal(house)
// prevents new properties from being added to it and marking all existing properties as non-configurable
// Object.defineProperty(house, 'toilets', { value: 3 }) // cannot add property
// Object.defineProperty(house, 'numberOfExits', { value: 3, enumerable: true }) // cannot redifine property
// house.numberOfExits = 4 // can change value of existing property

Object.freeze(house)
// A frozen object can no longer be changed, not even the existing property values
// Object.defineProperty(house, 'toilets', { value: 3 }) // cannot add property
// Object.defineProperty(house, 'numberOfExits', { value: 3, enumerable: true }) // cannot redifine property
house.numberOfExits = 4
console.log(house.numberOfExits) // 3 => no error message, but cannot change value of existing property
 */

// 15. Create some object and try out using Object.defineProperty how get and set functions work.
/*
let fruit = {
  _seeds: 17
}
Object.defineProperty(fruit, 'seeds', {
  get: function () { return this._seeds },
  set: function (newAmount) {
    if (newAmount < 0) {
      throw new TypeError('Negative amount not allowed')
    } else {
      this._seeds = newAmount
    }
  }
})
fruit.seeds = 13
console.log(fruit.seeds) */
