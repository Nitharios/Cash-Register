
var calculator = (function() {

  var total = 0;

  function getTotal() {
    return total;
  }

  function resetTotal() {
    total = 0;
    return total;
  }

  function addToTotal(num) {
    total += num;
  }

  function subtractFromTotal(num) {
    total -= num;
  }

  function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }

  function multiply(x, y) {
    return x * y;
  } 

  function divide(x, y) {
    return x / y;
  }

  return calculator = {
    getTotal: getTotal,
    reset: resetTotal,
    deposit: addToTotal,
    withdraw: subtractFromTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  }

})()