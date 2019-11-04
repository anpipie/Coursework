// 3. & 4. Basic Node.js filehandling without promises

var readlineSync = require('readline-sync')
var fs = require('fs')

var fileName = readlineSync.question('Give file name: ')

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.log(fileName + ' does not exist')
  } else {
    try {
      const jsonData = JSON.parse(data)
      if (Object.prototype.hasOwnProperty.call(jsonData, 'name')) {
        console.log(jsonData.name)
      } else {
        console.log('file ' + fileName + ' contains json but not property name')
      }
    } catch (err) {
      console.log(`file ${fileName} does not contain json`)
    }
  }
})
