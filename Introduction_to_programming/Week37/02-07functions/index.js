// 1.
var generate = require('project-name-generator')
console.log(generate().dashed)

// 2. Define a function `max()` that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. Test it by giving some numbers.

function max (a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}
console.log(max(3, 4))

// 3. Create function `isPositiveInteger(value, onSuccess, onError)`. Function checks if given argument is positive,
// if so it will call `onSuccess` function provided as argument. Otherwise it will call onError function.
// Test. So function will get a function as an argument.

function isPositiveInteger (value, onSuccess, onError) {
  if (value > 0) {
    return onSuccess()
  } else {
    return onError()
  }
}
function positive () {
  return console.log('positive')
}
function notPositive () {
  return console.log('not positive')
}
isPositiveInteger(-5, positive, notPositive)

// 4. Use anonymous functions when making the `isPositiveInteger` method invocation.

isPositiveInteger(-5, function () { return console.log('positive') }, function () { return console.log('not positive') })

// 5. Use EcmaScript 2015 arrow syntax in anonymous functions.

isPositiveInteger(-5, () => { return console.log('positive') }, () => { return console.log('not positive') })

// 6. Try out the following. What is the result, why?
// Answer: It displays 'function' and 'true'. In the first line function called doIt is defined, and thus 'typeof' operator
// returns 'function'. With 'instanceof' operator we find out that doIt is 'descendant' (child) of Function constructor.
// Hence 'true' is logged on the console.
function doIt () {
  console.log('hello')
}
console.log(typeof doIt)
console.log(doIt instanceof Function)

// 7. Try out following:
// What do you think happens in here?
// Answer: A new function object is created using function constructor and stored in variable myFunc. It takes nothing ''
// as an argument and in its function body is 'console.log("hello"). '.call' is used to invoke myFunc and 'hello' is
// printed.
var myFunc = new Function('', 'console.log("hello")')
myFunc.call()
