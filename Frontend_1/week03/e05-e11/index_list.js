// ***********list version***********

const main = () => {
  const addBtn = document.getElementById('addbtn')
  const delBtn = document.getElementById('deletebtn')
  let ul = ''

  const add = function () {
    if (document.getElementsByTagName('ul')[0] === undefined) {
      createUl()
    }
    const li = document.createElement('li')
    const deleteLink = document.createElement('a')
    ul = document.getElementsByTagName('ul')[0]
    li.textContent = document.getElementById('itemtext').value + ' | '
    deleteLink.innerHTML = ('delete')
    ul.appendChild(li)
    li.appendChild(deleteLink)
    deleteLink.addEventListener('click', () => removeItem(deleteLink))
  }

  const createUl = function () {
    const ul = document.createElement('ul')
    const body = document.getElementsByTagName('body')[0]
    body.appendChild(ul)
  }

  const removeLast = function () {
    ul.removeChild(ul.lastChild)
  }

  const removeItem = function (link) {
    const li = link.parentElement
    li.parentElement.removeChild(li)
  }

  addBtn.addEventListener('click', add)
  delBtn.addEventListener('click', removeLast)
}

window.addEventListener('load', () => {
  main()
})
