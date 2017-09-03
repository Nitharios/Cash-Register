console.log('Sanity Test - calculator.js')

// Revealing Module Pattern
// Self-invoking function
var calculator = (function() {

  var balance = 0;
  var total = 0;
  var expressionArray = []

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

  function getExpression() {
    return expressionArray;
  }

  function resetExpression() {
    expressionArray = []
  }

  // pushes the digit and operator to expression array
  function pushToArray(operator, digit) {
    if (operator !== null) {
      expressionArray.push(operator)
    }

    expressionArray.push(parseFloat(digit));
    console.log(expressionArray)
  }

  // handles expression in order of operations
  function expressionEvaluator() {
    var multiplyIndex = expressionArray.indexOf('x') //finds first index of * in the array
    var divideIndex = expressionArray.indexOf('÷') //finds first index of / in the array
    var addIndex = expressionArray.indexOf('+')
    var subtractIndex = expressionArray.indexOf('-')

    // [1, +, 9, /, 3, +, 4, *, 5] expressionArray
    while (multiplyIndex !== -1 || divideIndex !== -1) {

      if (multiplyIndex < divideIndex && multiplyIndex > 0 || divideIndex === -1) {
        expressionArray.splice(multiplyIndex-1, 3, expressionArray[multiplyIndex-1]*expressionArray[multiplyIndex+1]) // splices out 3 items and inserts product of the 3 items
      } else if (divideIndex < multiplyIndex && divideIndex > 0 || multiplyIndex === -1) {
        expressionArray.splice(divideIndex-1, 3, expressionArray[divideIndex-1]/expressionArray[divideIndex+1]) //splices out 3 items and inserts quotient of the 3 items
      }
      
      multiplyIndex = expressionArray.indexOf('x') //finds first index of * in the array
      divideIndex = expressionArray.indexOf('÷') //finds first index of / in the array
    }

    while (addIndex !== -1 || subtractIndex !== -1) {
    
      if (addIndex < subtractIndex && addIndex > 0 || subtractIndex === -1) {
        expressionArray.splice(addIndex-1, 3, expressionArray[addIndex-1]+expressionArray[addIndex+1])
      } else if (subtractIndex < addIndex && subtractIndex > 0 || addIndex === -1) {
        expressionArray.splice(subtractIndex-1, 3, expressionArray[subtractIndex-1]-expressionArray[subtractIndex+1])
      }
      
      addIndex = expressionArray.indexOf('+') // finds first index of + in the array
      subtractIndex = expressionArray.indexOf('-') // finds the first index of - in the array
    }

    total = expressionArray[0] //(Math.round(expressionArray[0] * 100) / 100).toFixed(2) // Rounds the total to nearest 2 decimal places
  }

  return calculator = {
    getBalance: getBalance,
    resetBalance: resetBalance,
    deposit: addToBalance,
    withdraw: subtractFromBalance,
    getTotal: getTotal,
    setTotal: setTotal,
    resetTotal: resetTotal,
    getExpression: getExpression,
    resetExpression: resetExpression,
    pushToArray: pushToArray,
    expressionEvaluator: expressionEvaluator
  }

})()