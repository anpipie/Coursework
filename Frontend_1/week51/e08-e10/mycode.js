const objects = [{ name: 'The current URL', object: window.location },
  { name: 'The user\'s screen', object: window.screen },
  { name: 'Information about the browser itself', object: window.navigator },
  { name: 'URLs visited by a user', object: window.history }]

for (const item of objects) {
  let table = '<table><caption>' + item.name + '</caption><tr><th>Name</th><th>Type</th></tr>'
  for (const key in item.object) {
    table = table + '<tr><td>' + key + '</td><td>' + item.object[key] + '</td></tr>'
  }
  table = table + '</table>'
  document.write(table)
}

const agent = navigator.userAgent

if (agent.indexOf('Chrome') !== -1) {
  alert('Google')
  setTimeout(function () {
    location.href = 'https://google.com'
  }, 1000)
} else if (agent.indexOf('Safari') !== -1) {
  alert('Apple')
  setTimeout(function () {
    location.href = 'https://www.apple.com'
  }, 1000)
} else if (agent.indexOf('Edge') !== -1 || agent.indexOf('MSIE') !== -1) {
  alert('Microsoft')
  setTimeout(function () {
    location.href = 'https://www.microsoft.com'
  }, 1000)
}
