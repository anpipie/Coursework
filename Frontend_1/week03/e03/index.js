
const main = () => {
  const button = document.getElementById('button')
  const firstP = document.querySelector('p')
  const secondP = document.getElementsByTagName('p')[1]
  const thirdP = document.getElementById('third')

  const showTexts = function () {
    firstP.textContent = 'first'
    secondP.textContent = 'second'
    thirdP.textContent = 'third'
  }

  button.addEventListener('click', showTexts)
}

window.addEventListener('load', () => {
  main()
})
