// TEHTÄVÄT 6-8

/* function Person (name) {
  this.name = name
}

Person.prototype.sayHello = function () {
  console.log('hello from ' + this.name)
}

let jack = new Person('jack')
jack.sayHello()
let tina = new Person('tina')
tina.sayHello()

console.log(Object.getPrototypeOf(jack) === Person.prototype)
console.log(Object.getPrototypeOf(tina) === Person.prototype)

Person.prototype.drinkBeer = function () {
  console.log(this.name + ' drinks beer')
}
tina.drinkBeer()
jack.drinkBeer() */

/* class Person {
  constructor (name) {
    this.name = name
  }

  drinkBeer () {
    console.log(this.name + ' drinks beer')
  }

  sayHello () {
    console.log('hello from ' + this.name)
  }
}
let jack = new Person('jack')
jack.sayHello()
let tina = new Person('tina')
tina.sayHello()

Person.prototype.sayHello()
Person.prototype.drinkBeer()

// Is drinkBeer and sayHello now twice in memory or only one time? 
// Answer: one time.

 */

/* class Person {
  constructor (name) {
    this.name = name
    this.drinkBeer = function () {
      console.log(this.name + ' drinks beer')
    }
  }

  sayHello () {
    console.log('hello from ' + this.name)
  }
}
let jack = new Person('jack')
jack.sayHello()
let tina = new Person('tina')
tina.sayHello()
// Is now drinkBeer two times in memory or only one time?
// Answer: twice
 */

function Person (name) {
  this.name = name
}
Person.prototype.drinkBeer = function () {
  console.log(this.name + ' drinks beer')
}

function Programmer (name, salary) {
  Person.call(this, name)
  this.salary = this.salary
}
Programmer.prototype.codeApps = function () {
  console.log(this.name + ' implements apps')
}
Object.setPrototypeOf(Programmer.prototype, Person.prototype)

let jack = new Person('jack')
jack.drinkBeer()

let tina = new Person('tina')
tina.drinkBeer()

let hannah = new Programmer('hannah', 4000)
hannah.codeApps()
hannah.drinkBeer()
