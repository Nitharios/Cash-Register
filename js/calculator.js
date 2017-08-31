// Revealing Module Pattern
// Self-invoking function
var calculator = (function() {

  var balance = 0;
  var total = 0;
  // var used for add and subtract functions
  var a = 0;
  var b = 0;
  // var used for multiply and divide functions
  var x = 0;
  var y = 0

  function getBalance() {
    return balance;
  }

  function resetBalance() {
    balance = 0;
    return balance;
  }

  function addToBalance(num) {
    balance += num;
  }

  function subtractFromBalance(num) {
    balance -= num;
  }

  function getTotal() {
    return total;
  }

  function resetTotal() {
    total = 0;
    return total;
  }

  function equals(num) {
    y = num;
  }

  function add(num) {
    x = num;
  }

  function subtract(num) {
    x = num;
  }

  function multiply(num) {
    a = num;
  } 

  function divide(num) {
    b = num;
  }

  return calculator = {
    getBalance: getBalance,
    resetBalance: resetBalance,
    deposit: addToBalance,
    withdraw: subtractFromBalance,
    getTotal: getTotal,
    resetTotal: resetTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  }

})()