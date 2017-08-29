
var calculator = (function() {

  total = 0;

  return calculator = {
    getTotal: getTotal,
    resetTotal: resetTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  }

  function getTotal() {
    return total
  }

  function resetTotal() {
    total = 0
  }

  function add(x) {
    // validate(x)
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

  function validate(x) {
    if (typeof x !== 'number') {
      throw new Error('Invalid')
    }
  }
})