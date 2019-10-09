/* // 2.
function doIt () {
  console.log(this)
}

let obj = { key: 'value' }

let x = doIt.bind(obj)
x()

// 3.
let user = {
  firstName: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.firstName}!`)
  }
}
let myFunction = user.sayHello
myFunction()

// By using function binding,
// create a copy of the user.sayHello and set this to refer to user. Then call the function, it should work.

let kopio = user.sayHello.bind(user)
kopio()

// 4.
let user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`)
  },
  sayDelayedHello: function () {
    let f = this.sayHello.bind(this)
    setTimeout(f, 1000)
  }
}
user.sayHello()
user.sayDelayedHello()
 */

// 5.

function Person (name) {
  this.name = name
  this.sayHello = function () {
    console.log(this.name + ' hi!')
  }
  this.sayDelayedHello = function () {
    let delayedHi = this.sayHello.bind(this)
    setTimeout(delayedHi, 1000)
  }
}
let jack = new Person('jack')
jack.sayDelayedHello()
let tina = new Person('tina')
tina.sayDelayedHello()
