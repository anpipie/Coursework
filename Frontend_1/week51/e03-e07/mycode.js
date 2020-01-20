var ohMyGod = 'this is global'
delete window.ohMyGod
const url = 'https://developer.mozilla.org/en-US/docs/Web/API/Window/'

document.write('<h1>Window properties</h1>')
let table = '<table><tr><th>Name</th><th>Type</th></tr>'

for (const property in this) {
  if (this[property] instanceof Function || property === 'ohMyGod') {
    table = table + '<tr><td>' + '<a href="' + url + property + '">' + `${property}` +
     '</a>' + '</td><td>' + `${this[property]}` + '</td></tr>'
  }
}

table = table + '</table>'
document.write(table)
const name = prompt('What\'s your name?')
alert('Hello ' + name + '!')
