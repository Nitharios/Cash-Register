
var calculator = (function() {

  var balance = 0;
  var total = 0;

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

  function add(num) {
    total += num;
  }

  function subtract(num) {
    total -= num;
  }

  function multiply(num) {
    total *= num;
  } 

  function divide(num) {
    total /= num;
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