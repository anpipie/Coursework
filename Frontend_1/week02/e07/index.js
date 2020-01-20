console.log('Hello JavaScript!')
// Custom code begins
const plusbtn = document.getElementById('plusbtn')
const minusbtn = document.getElementById('minusbtn')
const mylist = document.getElementById('mylist')
const h1 = document.getElementsByTagName('h1')

const handleClick = function (event) {
  if (event.target === event.currentTarget) {
    alert('parent element clicked')
    return
  } else {
    const childrenArray = Array.from(event.currentTarget.children)
    const childrenSet = new Set()
    event.target.textContent = event.detail
    childrenArray.forEach((item) => {
      childrenSet.add(item.textContent)
    })
    if (childrenSet.size === 1) {
      alert('all list elements equal')
      for (let i = 0; i < childrenArray.length; i++) {
        childrenArray[i].textContent = 'ITEM ' + (i + 1)
      }
    }
  }
}
const addItem = function () {
  const li = document.createElement('li')
  const textNode = document.createTextNode('ITEM ' + (mylist.children.length + 1))
  li.appendChild(textNode)
  mylist.appendChild(li)
}
const removeItem = function () {
  mylist.removeChild(mylist.lastChild)
}

const changeTitle = function () {
  const width = window.innerWidth
  const height = window.innerHeight
  h1[0].innerHTML = 'Window size: ' + width + ' x ' + height
}

mylist.addEventListener('click', handleClick)
minusbtn.addEventListener('click', removeItem)
plusbtn.addEventListener('click', addItem)
window.addEventListener('resize', changeTitle)
