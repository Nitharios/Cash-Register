// Revealing Module Pattern
// Self-invoking function
var calculator = (function() {

  var balance = 0;
  var total = 0;
  var tempTotal = 0;

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
    total = tempTotal;
    tempTotal = 0;
    return total;
  }

  function getTempTotal() {
    return tempTotal;
  }

  function resetTotal() {
    total = 0;
    tempTotal = 0;
  }

  function add(num) {
    if (tempTotal === 0) {
      tempTotal = parseFloat(num);
    } else {
      tempTotal += parseFloat(num);
    }
  }

  function subtract(num) {
    if (tempTotal === 0) {
      tempTotal = parseFloat(num);
    } else {
      tempTotal -= parseFloat(num);
    }
  }

  function multiply(num) {
    if (tempTotal === 0) {
      tempTotal = parseFloat(num);
    } else {
      tempTotal *= parseFloat(num);
    }
  }

  function divide(num) {
    if (tempTotal === 0) {
      tempTotal = parseFloat(num);
    } else {
      tempTotal /= parseFloat(num);
    }
  }

  return calculator = {
    getBalance: getBalance,
    resetBalance: resetBalance,
    deposit: addToBalance,
    withdraw: subtractFromBalance,
    getTotal: getTotal,
    getTempTotal: getTempTotal,
    resetTotal: resetTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  }

})()