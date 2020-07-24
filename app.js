;(function () {
  const body = document.querySelector('body')
  const button = document.querySelector('button')
  const h1 = document.querySelector('h1')
  const hexValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ]

  function changeHex() {
    let hex = '#'

    for (let i = 0; i < 6; i++) {
      const index = parseInt(Math.random() * hexValues.length)
      hex += hexValues[index]
    }

    h1.textContent = hex
    body.style.backgroundColor = hex
  }

  button.addEventListener('click', changeHex)

  changeHex()
})()
