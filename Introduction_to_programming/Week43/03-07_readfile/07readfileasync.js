const readlineSync = require('readline-sync')
const fs = require('fs')

function parseJson (data) {
  async function func (resolve, reject) {
    const jsonData = JSON.parse(data)
    if (Object.prototype.hasOwnProperty.call(jsonData, 'name')) {
      resolve(jsonData.name)
    } else {
      reject ('file ' + fileName + ' contains json but not property name')
    }
  }
  const p = new Promise(func)
  return p
}

function readFile (file) {
  async function func (resolve, reject) {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  }
  const p = new Promise(func)
  return p
}

async function readFileAndParse () {
let data = await readFile(fileName)
let jsonData = await parseJson(data)
return jsonData
}

let fileName = readlineSync.question('Give file name: ')
readFileAndParse(fileName).then((name) => console.log(name)).catch(msg => console.log(msg))

// !! The case when there is file, but it is not a json file, is not handled. (for example text.txt)
// To solve this I would make a separate parseJson(data) which would catch if the data is not json and getName(jsonData) which
// would catch if there is no name property in the json object. However in the assignment these two functions were combined and I don't
// know how to catch these errors in that case.