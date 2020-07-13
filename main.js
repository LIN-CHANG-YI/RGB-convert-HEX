const slider = document.querySelector('.slider')
const rnumber = document.querySelector('.R-number')
const gnumber = document.querySelector('.G-number')
const bnumber = document.querySelector('.B-number')
const rinput = document.querySelector('.red-slider')
const ginput = document.querySelector('.green-slider')
const binput = document.querySelector('.blue-slider')
const output = document.querySelector('.output')

//滑條
slider.addEventListener('input', function (event) {
  if (event.target.matches('.red-slider')) {
    rnumber.innerText = rinput.value
  }
  if (event.target.matches('.green-slider')) {
    gnumber.innerText = ginput.value
  }
  if (event.target.matches('.blue-slider')) {
    bnumber.innerText = binput.value
  }
  rgbTohex()
})

//加減click
slider.addEventListener('click', function (event) {
  if (event.target.matches('.fa-plus-circle') || event.target.matches('.fa-minus-circle')) {
    if (event.target.matches('.fa-plus-circle')) {
      const inputValue = event.target.previousElementSibling
      const addinnerText = event.target.parentElement.lastElementChild
      let addNumber = Number(addinnerText.innerText)
      addNumber += 1
      addinnerText.innerText = addNumber
      inputValue.value = addNumber
      if (addNumber > 255) {
        addinnerText.innerText = 255
      }
    } else {
      const inputValue = event.target.nextElementSibling
      const minusinnerText = event.target.parentElement.lastElementChild
      let minusNumber = Number(minusinnerText.innerText)
      minusNumber -= 1
      minusinnerText.innerText = minusNumber
      inputValue.value = minusNumber
      if (minusNumber < 0) {
        minusinnerText.innerText = 0
      }
    }
    rgbTohex()
  }
})

// RGB轉HEX
function rgbTohex() {
  let rvalueNumber = Number(rinput.value)
  let gvalueNumber = Number(ginput.value)
  let bvalueNumber = Number(binput.value)
  let rvaluehex = rvalueNumber.toString(16)
  let gvaluehex = gvalueNumber.toString(16)
  let bvaluehex = bvalueNumber.toString(16)
  if (rvaluehex.length < 2) {
    rvaluehex = '0' + rvaluehex
  }
  if (gvaluehex.length < 2) {
    gvaluehex = '0' + gvaluehex
  }
  if (bvaluehex.length < 2) {
    bvaluehex = '0' + bvaluehex
  }
  output.innerText = `#${rvaluehex}${gvaluehex}${bvaluehex}`
  document.body.style.backgroundColor = `rgb(${rinput.value},${ginput.value},${binput.value})`
}