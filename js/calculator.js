// Revealing Module Pattern
// Self-invoking function
var calculator = (function() {

  var balance = 0;
  var total = 0;
  
  var addUsed = false;
  var subUsed = false;
  var multiUsed = false;
  var diviUsed = false;

  function getBalance() {
    return balance;
  }

  function resetBalance() {
    balance = 0;
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

  function setTotal(num) {
    total = num;
  }


  function resetTotal() {
    total = 0;
    resetOperators();
  }

  function add(num) {
    subUsed = false;
    multiUsed = false;
    diviUsed = false;

    if (total === 0) {
      total = parseFloat(num);
    } else if (addUsed === false) {
      addUsed = true;
    } else {
      total += parseFloat(num);
    }
  }

  function subtract(num) {
    addUsed = false;
    multiUsed = false;
    diviUsed = false;

    if (total === 0) {
      total = parseFloat(num);
    } else if (subUsed === false) {
      subUsed = true;
    } else {
      total -= parseFloat(num);
    }
  }

  function multiply(num) {
    addUsed = false;
    subUsed = false;
    diviUsed = false;

    if (total === 0) {
      total = parseFloat(num);
    } else if (multiUsed === false) {
      multiUsed = true;
    } else {
      total *= parseFloat(num);
    }
  }

  function divide(num) {
    addUsed = false;
    subUsed = false;
    multiUsed = false;

    if (total === 0) {
      total = parseFloat(num);
    } else if (diviUsed === false) {
      diviUsed = true;
    } else {
      total /= parseFloat(num);
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
    setTotal: setTotal,
    resetTotal: resetTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  }

})()