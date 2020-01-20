console.log('Hello JavaScript!')
// Custom code begins

const mylist = document.getElementById('mylist')
const handleClick = function (event) {
  if (event.target === event.currentTarget) {
    alert('parent element clicked')
    return // ??? Tarviiko tähän return statementin ja miksi ???
    // vrt. ohje 'Use return statement to exit from the function.'
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
mylist.addEventListener('click', handleClick)
