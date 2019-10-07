// 16. Create node.js project and create an application that reads given file. So you can use the app like:
// node myapp.js filename.txt
// And it will output the content of `filename.txt`. Use `readfile` and `fs`-module which is prebuilt in Node.js.

// 17. Now create a possibility to read text files like following:
// let reader = new Reader("textfile.txt")
// reader.read() // outputs the content of textfile.txt

// 18. Now create your app so that it outputs the content of the file but also the given filename.
// Create two solutions.
// a) One that uses normal functions (not arrow functions)
// b) One that uses arrow functions.

// 19. Create new text-file: `paths.txt` that contains several paths. Use the `paths.txt` as a file name.

const fs = require('fs')

// uses only normal functions
// function Reader1 (path) {
//   this.path = path
//   this.read = function () {
//     fs.readFile(path, 'utf-8', function (err, data) {
//       if (err) throw err
//       console.log(path + ': \n' + data)
//     })
//   }
// }

// uses arrow functions
function Reader2 (dataArray) {
  this.dataArray = dataArray
  this.read = () => {
    dataArray.forEach(readingF)
    function readingF (path) {
      fs.readFile(path, 'utf-8', (err, data) => {
        if (err) throw err
        console.log(path + ': \n' + data)
      })
    }
  }
}

function Reader3 () {
  this.read = () => {
    console.log('paths.txt')
    fs.readFile('paths.txt', 'utf-8', (err, data) => {
      if (err) throw err
      const dataArray = data.split('\n')
      dataArray.splice(0, 1)
      const reader4 = new Reader2(dataArray)
      reader4.read()
    })
  }
}

// const pathInput = process.argv.slice(2).toString()

// const reader1 = new Reader1(pathInput)
// reader1.read()

// let reader2 = new Reader2(pathInput)
// reader2.read()

const reader3 = new Reader3()
reader3.read()
