/* // 9. What is the meaning of this inside of the function? 
function doIt () {
  console.log(this === global)
}
doIt()

// Answer: 'this' refers to global, hence 'this===global' prints 'true'.

// Modify the code so that it outputs “hello world”. Make modifications only in the doIt - function.
function doIt2 () {
  this.x = 'hello world'
}
doIt2()
console.log(x)

// 10. Invoke the `sayHello()` function from `user` - object. It should output “Hello Jack”.

let user = {
  name: "Jack",
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  }
}
user.sayHello()

let myfunc = user.sayHello
myfunc()

// What do you get and why?
// Answer: It prints 'Hello, undefined!'. 'this' does not refer to 'user' but to myfunc function object.
// Myfunc does not have parameter called 'name', hence this.name returns undefined.

// 11. Invoke by using the new keyword:

function Person (name) {
  this.name = name
}
let jackObject = new Person('jack smith')
let tinaObject = new Person('tina smith')

// What is the meaning of `this` when using the `new` - keyword?
// Answer: 'this' refers to the new object (jackObject and tinaObject)

// Try to call the function without the `new` keyword? What is `this` now and where is the `name` stored now? 
// Answer: 'this' refers to global and hence name is stored as global variable.
let adamObject = Person('Adam')
console.log(name)

// Print the `name` to console (outside of the Person - function)
Person('tina')
console.log(jackObject.name)
console.log(name)

// 12.

function doIt3() {
  console.log('hello')
}
doIt3() // hello
let doIt4 = new Function("", "console.log('hello')")
doIt4.call() // hello

function sum1 (a, b) {
  return a + b
}
let s1 = sum1(5, 5)
console.log(s1) // 10

let sum2 = new Function("a", "b", "return a + b")
let s2 = sum2.call({}, 5, 5)
console.log(s2) // 10

function doIt5 (a, b) {
  console.log(a + b)
}
doIt5(5, 5) // 10
doIt5.call({}, 5, 5) // 10

function doIt6 (a, b) {
  console.log(this)
}
// doIt6(5, 5) // global object
doIt6.call({}, 5, 5) // {}

function doIt7 (a, b) {
  console.log(this)
}
let object = { "key": "value" }
doIt7.call(object, 5, 5)
// Answer: {} is empty object

// 13. & 14.
function Person1 (name) {
  this.name = name
  this.sayHello = function () { console.log('hello ' + name) }
  this.sayDelayedHello = function () { setTimeout(this.sayHello, 1000) }
}

let jack = new Person1('jack smith')
console.log(jack.name)
jack.sayHello()
jack.sayDelayedHello() // prints "hello jack smith" after 1 sec

let tina = new Person1('tina smith')
tina.sayDelayedHello() // prints "hello tina smith" after 1 sec

// Comment/Answer: The sayDelayedHello -function seems to work well. I can't see why to add the helper
// function...? I assume it should have not worked, and hence all the stuff with helper function, but I can't recreate
// that situation.
 */

// 15.
function Person1 (name) {
  this.name = name
  this.sayHello = function () { console.log('hello ' + name) }
  this.sayDelayedHello = () => { setTimeout(this.sayHello, 1000) }
}

let jack = new Person1('jack smith')
console.log(jack.name)
jack.sayHello()
jack.sayDelayedHello() // prints "hello jack smith" after 1 sec

let tina = new Person1('tina smith')
tina.sayDelayedHello() // prints "hello tina smith" after 1 sec
