var calculator = new calculator()

// Retrieves key input from index
var keys = document.querySelectorAll('#cashRegister span')
var operationArr = ['+', '-', 'x', '÷']
var result

// Create onclick event for keys
for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    // Retrieve input and key values
    var input = document.querySelector('.userInput')
    var inputVal = input.innerHTML     // current input on screen before key-stroke
    var keyVal = this.innerHTML        // key-stroke

    if (keyVal === '=') {
      var tempResult = 0
      var equation = inputVal.split(' ')

      while (equation.indexOf('x') !== -1 || equation.indexOf('÷') !== -1) {

        var multiplyIdx = equation.indexOf('x')
        var divideIdx = equation.indexOf('÷')

        if (multiplyIdx < divideIdx && multiplyIdx > 0 || divideIdx === -1) {
          tempResult = equation[multiplyIdx-1] * equation[multiplyIdx+1]
          equation.splice(multiplyIdx-1, 3, tempResult)

        } else if (divideIdx < multiplyIdx && divideIdx > 0 || multiplyIdx === -1) {
          tempResult = equation[divideIdx-1] / equation[divideIdx+1]
          equation.splice(divideIdx-1, 3, tempResult)
        }
      }

      while (equation.indexOf('+') !== -1 || equation.indexOf('-') !== -1) {

        var addIdx = equation.indexOf('+')
        var subIdx = equation.indexOf('-')

        if (addIdx < subIdx && addIdx > 0 || subIdx === -1) {
          tempResult = parseFloat(equation[addIdx-1]) + parseFloat(equation[addIdx+1])
          equation.splice(addIdx-1, 3, tempResult)

        } else if (subIdx < addIdx && subIdx > 0 || addIdx === -1) {
          tempResult = equation[subIdx-1] - equation[subIdx+1]
          equation.splice(subIdx-1, 3, tempResult)
        }
      }

      input.innerHTML = tempResult

    } else if (keyVal === 'reset') {
      calculator.resetTotal()
      input.innerHTML = '0'

    } else if (keyVal === 'clear') {
      input.innerHTML = ''

    } else if (keyVal === 'balance') {
      input.innerHTML = calculator.getTotal()

    } else if (keyVal === 'deposit') {
      calculator.add(parseFloat(inputVal))
      input.innerHTML = ''

    } else if (keyVal === 'withdraw') {
      calculator.subtract(parseFloat(inputVal))
      input.innerHTMl = ''

    } else {

      if (inputVal.indexOf(0) === 0 && operationArr.indexOf(keyVal) === -1 && keyVal !== 0) {
        input.innerHTML = keyVal

      } else if (inputVal.indexOf(0) === 0 && keyVal === 0) {
        input.innerHTML = 0
      
      } else if (keyVal.search('[0-9]+') !== -1) {
        input.innerHTML += keyVal

      } else {
        input.innerHTML += ' ' + keyVal + ' '

      }
    }
  }
}