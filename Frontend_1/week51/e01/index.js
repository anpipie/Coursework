
const rl = require('readline-sync')
const Student = require('./student.js')
const fs = require('fs')

function saveData (data) {
  var jsonContent = '{"students" :' + JSON.stringify(data) + '}'
  try {
    fs.writeFileSync('studentdb.json', jsonContent)
  } catch (err) {
    console.error(err)
  }
  console.log('Data saved')
}

function readFile (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, 'utf8', function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(JSON.parse(data))
      }
    })
  })
}

function initDB (jsonData) {
  const db = []
  for (let i = 0; i < jsonData.students.length; i++) {
    const firstName = jsonData.students[i]._fname
    const lastName = jsonData.students[i]._lname
    const id = jsonData.students[i]._idNumber
    const newStudent = new Student(firstName, lastName, id)
    db.push(newStudent)
  }
  return db
}

const isValidName = (name) => {
  if ((typeof name === 'string') && (name.length > 1)) {
    return true
  } else {
    return false
  }
}

const isValidID = (id) => {
  if (id >= 0) {
    return true
  } else {
    return false
  }
}

const createStudent = () => {
  const newName = rl.question('Give firstname lastname \n')
  const newIdNumber = rl.questionInt('Give idNumber \n')
  const newFirstName = newName.split(' ')[0]
  const newLastName = newName.split(' ')[1]
  if (!isValidName(newFirstName) || !isValidName(newLastName)) {
    console.log('Problem with user input: TypeError: name must be a string longer than one character')
    createStudent()
  } else if (!isValidID(newIdNumber)) {
    console.log('Problem with user input: TypeError: id number must be positive number')
    createStudent()
  } else {
    const newStudent = new Student(newFirstName, newLastName, newIdNumber)
    return newStudent
  }
}

const printView = (data) => {
  const printText = []
  function createPrintString (student) {
    printText.push('Lastname: ' + student.lastname + ', firstname: ' + student.firstname + ', id number: ' + student.idNumber)
  }
  function print (text) {
    console.log(text)
  }
  data.forEach(createPrintString)
  printText.sort()
  printText.forEach(print)
}

const mainMenu = (studentDB) => {
  let keepAsking = true
  while (keepAsking === true) {
    const selection = rl.questionInt('1) add, 2) view, 3) save 4) end \n')

    if (selection === 1) {
      const newStudent = createStudent()
      studentDB.push(newStudent)
    }

    if (selection === 2) {
      printView(studentDB)
    }

    if (selection === 3) {
      saveData(studentDB)
    }

    if (selection === 4) {
      keepAsking = false
    }
  }
}

function init () {
  const fileName = process.argv[2]
  if (fileName === undefined) { // vanhemmilla selaimilla ei välttämättä kai toimi...
    mainMenu([])
  } else {
    const getData = readFile(fileName)
    getData.then(initDB)
      .then(mainMenu)
  }
}

const main = () => {
  init()
}

main()
