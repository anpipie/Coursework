// 5. Basic Node.js File Handling with Promises

const util = require('util');
const readlineSync = require('readline-sync')
const fs = require('fs')
const readFile = util.promisify(fs.readFile)

let fileName = readlineSync.question('Give file name: ')

readFile(fileName, 'utf-8')
  .then(parseJson)
  .then((name) => console.log(name)).catch(msg => console.log(msg))

function parseJson (data) {
  function func (resolve, reject) {
    const jsonData = JSON.parse(data)
    if (Object.prototype.hasOwnProperty.call(jsonData, 'name')) {
      resolve(jsonData.name)
    } else {
      reject('property name not found.')
    }
  }
  const p = new Promise(func)
  return p
}