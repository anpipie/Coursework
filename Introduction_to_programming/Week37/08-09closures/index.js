
// 8. Take the following code:
// let f = doIt()
// f()
// Look closely line 2, the f should be a function. In line 2 the app should output “hello world”.
// Implement the `doIt` function.

function doIt () {
  function sayHello () {
    console.log('hello world')
  }
  return sayHello
}
let f = doIt()
f()

//  9. Implement now makeAdder - function. The usage is like following:
// var add5 = makeAdder(5);
// var add10 = makeAdder(10);
// console.log(add5(2));  // 7
// console.log(add10(2)); // 12

function makeAdder (firstNumber) {
  function add (secondNumber) {
    return firstNumber + secondNumber
  }
  return add
}
var add5 = makeAdder(5)
var add10 = makeAdder(10)
console.log(add5(2))
console.log(add10(2))
