
const printObjectInTable = (title, object, baseurl) => {
  document.write(`<h1>${title}</h1>`)
  document.write('<table class="pure-table pure-table-bordered">')
  document.write(`<thead>
  <tr>
      <th>Key</th>
      <th>Type</th>
  </tr>
  </thead>`)
  for (const key in object) {
    document.write(`<tr>
                      <td>
                        <code>
                          <a href="${baseurl}/${key}">${key}</a>
                        </code>
                      </td>
                      <td>
                        <code>${typeof object[key]}</code>
                      </td>
                    </tr>`)
  }
  document.write('</table>')
}

const testBasicDocumentFunctionality = () => {
  console.dir(document.URL)
  console.dir(document.title)
  console.dir(document.body)
  console.log(document.body)
  // Firefoxilla näkyy samoin molemmat
  console.log(document.links)
  const links = document.links
  for (const key in links) {
    console.log(links[key])
  }
}

const testAdvancedDocumentFunctionality = () => {
  // console.log(document.all[0])
  // console.dir(document.all)
  // console.log(document.all[6])
  // console.log(document.all[6].firstChild)
  // console.log(typeof document.all[6].firstChild) //object
  // console.log(document.all[6].firstChild.textContent)
  // console.log(typeof document.all[6].firstChild.textContent) //string
  // document.all[6].firstChild.textContent = '<i>A</i>' // not italic
  // document.all[6].innerHTML = '<i>A</i>' // textcontent => tagien väliin tekstinä tulostuva sisältä, innerHTML => tagien väliin tulevaa html-koodi
  console.dir(document.all[9])
  console.log(document.all[9].firstElementChild.textContent)
  console.dir(document.all[9].firstElementChild.nextElementSibling.textContent)
  console.log(document.links)
  const links = document.links
  for (const key in links) {
    console.log(links[key])
  }
  console.log(links[1])
  links[1].textContent = 'DOM Documentation from Mozilla'
  links[1].href = 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model'
}

const main = () => {
  // printObjectInTable('HTML DOM', document, 'https://developer.mozilla.org/en-US/docs/Web/API/Document')
  // testBasicDocumentFunctionality()
  printObjectInTable('Element', document.documentElement, 'https://developer.mozilla.org/en-US/docs/Web/API/Element')
  testAdvancedDocumentFunctionality()
}

main()
