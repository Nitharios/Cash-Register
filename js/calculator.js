// Revealing Module Pattern
// Self-invoking function
var calculator = (function() {

  var balance = 0;
  var total = 0;
  var tempTotal = 0;
  var addUsed = false;
  var subUsed = false;
  var multiUsed = false;
  var diviUsed = false;

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
    subUsed = false;
    multiUsed = false;
    diviUsed = false;

    if (tempTotal === 0) {
      tempTotal = parseFloat(num);
    } else {
      tempTotal += parseFloat(num);
    }
  }

  function subtract(num) {
    addUsed = false;
    multiUsed = false;
    diviUsed = false;

    if (tempTotal === 0) {
      tempTotal = parseFloat(num);
    } else {
      tempTotal -= parseFloat(num);
    }
  }

  function multiply(num) {
    addUsed = false;
    subUsed = false;
    diviUsed = false;

    if (tempTotal === 0) {
      tempTotal = parseFloat(num);
    } else if (multiUsed === false) {
      multiUsed = true;
    } else {
      tempTotal *= parseFloat(num);
    }
  }

  function divide(num) {
    addUsed = false;
    subUsed = false;
    multiUsed = false;

    if (tempTotal === 0) {
      tempTotal = parseFloat(num);
    } else {
      tempTotal /= parseFloat(num);
    }
  }

  function resetOperators() {
    addUsed = false;
    subUsed = false;
    multiUsed = false;
    diviUsed = false;
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