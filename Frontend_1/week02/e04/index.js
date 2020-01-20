console.log('Hello JavaScript!')
// Custom code begins
const mylist = document.getElementById('mylist')
const handleClick = function (event) {
  if (event.target === event.currentTarget) {
    alert('parent element clicked')
    return // ??? Tarviiko tähän return statementin ja miksi ???
    // vrt. ohje 'Use return statement to exit from the function.'
  } else {
    event.target.textContent = 'ITEM ' + event.detail
  }
}
mylist.addEventListener('click', handleClick)
