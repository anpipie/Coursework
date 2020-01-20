
const main = () => {
  const button = document.getElementById('button')
  const result = document.getElementById('result')
  const weight = document.getElementById('weight')
  const height = document.getElementById('height')
  const categories = [
    { category: 'Severely underweight', minimum: 0, maximum: 16 },
    { category: 'Underweight', minimum: 16, maximum: 18.5 },
    { category: 'Normal', minimum: 18.5, maximum: 25 },
    { category: 'Overweight', minimum: 25, maximum: 30 },
    { category: 'Moderately obese', minimum: 30, maximum: 35 },
    { category: 'Severely obese', minimum: 35, maximum: 100 }
  ]

  const findCategory = function (BMI) {
    let category = 'out of range'
    categories.forEach(function (range) {
      if (BMI >= range.minimum && BMI < range.maximum) {
        category = range.category
      }
    })
    return category
  }

  const showResult = function () {
    const BMI = weight.value / (height.value * height.value)
    const category = findCategory(BMI)
    result.textContent = 'Your BMI is ' + Math.round(BMI * 100) / 100 + ': ' + category
  }

  button.addEventListener('click', showResult)
  weight.addEventListener('keyup', showResult)
  height.addEventListener('keyup', showResult)
}

window.addEventListener('load', () => {
  main()
})
