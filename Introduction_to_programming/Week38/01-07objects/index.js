
// 1. Create on object that has keys "firstname” and "lastname”;
// `var myobject = {….};``
// output the firstname and lastname to console.
var myObject = { firstname: 'Mikko', lastname: 'Mallikas' }
console.log(Object.keys(myObject))
console.log(myObject.firstname + ' ' + myObject.lastname)

// 2. Loop all the properties (key value pairs) of your object using for in.
for (const key in myObject) {
  console.log(key + ': ' + myObject[key])
}

// 3. Create an array that contains three objects (three person objects with different names).
// Iterate the array (for of) and print all property values of each given object to console.
const myArray = [{ name: 'Aapo' }, { name: 'Bertta' }, { name: 'Cecilia' }]
for (const value of myArray) {
  console.log(value.name)
}

// 4. Create the person object using function:
// `function Person(fname, lname) { … }`
// use new keyword when invoking the function.  Test by printing the firstname and lastname to console.
function Person (fname, lname) {
  if (!(this instanceof Person)) {
    throw new TypeError('Cannot call a class as a function')
// return new Person(fname, lname)
  } else {
    this.fname = fname
    this.lname = lname
  }
}
const matti = new Person('Matti', 'Kukkaroinen')
console.log(matti.fname + ' ' + matti.lname)

// 5. Modify the Person() function so that new object is created even if you forget the new word:
// `var obj = Person('jack', 'smith');`
//  This this will create a object even without the new keyword.
const pekka = Person('Pekka', 'Nonew')
console.log(pekka.fname + ' ' + pekka.lname)

// 6. Implement the previous so that exception is raised if programmer forgets the new keyword:
// `throw new TypeError("Cannot call a class as a function");`
// Try it out, it should now fail if you forget the new word.

// 7. Instead of using constructor function, use classes defined in EcmaScript 2015.
// Use babel and compile it to older javascript. Notice the checking that throws the exception!
