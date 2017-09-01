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
    total = parseFloat(num);
  }

  function resetTotal() {
    total = 0;
  }

  function add(num) {
    total += parseFloat(num);
  }

  function subtract(num) {
    total -= parseFloat(num);
  }

  function multiply(num) {
    total *= parseFloat(num);
  }

  function divide(num) {
    total /= parseFloat(num);
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