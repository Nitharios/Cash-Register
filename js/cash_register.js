var calculator = new calculator()

// Retrieves key input from index
var keys = document.querySelectorAll('#cashRegister span')
var operations = ['+', '-', 'x', '÷']

// Create onclick event for keys
for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    // Retrieve input and key values
    var input = document.querySelector('.userInput')
    var inputVal = input.innerHTML     // current input on screen
    var keyVal = this.innerHTML        // key-stroke

    if (keyVal === '=') {
      var equation = inputVal

      /*if (equation) {
        input.innerHTML = eval(equation)
      }*/

    } else if (keyVal === 'reset') {
      calculator.resetTotal()
      input.innerHTML = ''

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

      if (inputVal.indexOf(0) === 0) {
        input.innerHTML = ''
      }
      
      input.innerHTML += keyVal
    }
  }
}

/*
 var calculatorFlux = function() {

    var memory = 0, total = 0;

    return calculatorNO = {
      load: setTotal,
      getTotal: getTotal,
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide,
      recallMemory: recallMemory,
      saveMemory: saveMemory,
      clearMemory: clearMemory
    }

    function setTotal(x) {
      validate(x)
      total = x
      return total
   }

    function getTotal() {
      return total
   }

    function add(x) {
      validate(x)
      total += x
    }

    function subtract(x) {
      validate(x)
      total -= x
    }

    function multiply(x) {
      validate(x)
      total *= x
    } 

    function divide(x) {
      validate(x)
      total /= x
    }

    function recallMemory() {
      return memory
    }

    function saveMemory() {
      memory = total
    }

    function clearMemory() {
      memory = 0
    }

    function validate(x) {
      if (typeof x !== 'number') {
        throw new Error('Invalid')
      }
    }
}
*/