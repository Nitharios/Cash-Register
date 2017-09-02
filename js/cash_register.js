/*
KNOWN BUGS:
<> Solved: Adding a 0 to a digit mid calculation will set digit to 0
      !! PROBLEM --> operatorChecker() was overwriting input
      <> SOLUTION --> removed operatorChecker() and wrote added Boolean to check for operator used and to reset operator if multiple digits input
<> SOLVED: '='' requires 2x clicks to evaluate properly
      !! PROBLEM --> If innerHTML starts from 0, function will add first digit to total but not second because of if-else logic
<> SOLVED: If an operator is selected, it will apply function to the number in userInput
      !! PROBLEM --> ex. 200 (operator: +) = 400 ...
<> SOLVED: If operator has already been selected and a different operator is selected, the operator function will perform function on total and current innerHTML variables
      <> SOLUTION --> Boolean variables in each math function to 'flip the switch'
<> SOLVED: When consecutively pressing operator key, userInput resets to 0
<> SOLVED: Add function does not appear to add properly and returns only the first number
      only works if (operator = '+')) || (operator section of balanceChecker is removed)
      !! PROBLEM --> document.querySelector(.userInput).innerHTML = '' operation section of balanceChecker is interferring with add()
          --> balanceChecker() is setting the .innerHTML when the operator key is pressed
      <> SOLUTION --> removed operation section of balanceChecker & added line: input.innerHTML = calculator.getTotal() to bottom of add()
*/

// Self-invoking function
var registerLogic = (function () {
  // Creates a nodeList of all the keys under #cashRegister
  var digits = document.querySelectorAll('.digit');
  var specialKeys = document.querySelectorAll('.special');
  var operations = document.querySelectorAll('.operation');
  var options = document.querySelectorAll('.option');
  var decimalAdded = false;
  var zeroZeroAdded = false;
  var placeCounter = 0;
  var balanceSelected = false;
  var operator = null;
  var operatorUsed = false;
  
  // Loop to assign event function for each digit
  for (var i = 0; i < digits.length; i++) {
    digits[i].onclick = registerDigit;
  }

  // Loop to assign event function for each special key
  for (var j = 0; j < specialKeys.length; j++) {
    specialKeys[j].onclick = registerSpecialKey;
  }

  // Loop to assign event function for each operation
  for (var k = 0; k < operations.length; k++) {
    operations[k].onclick = registerOperation;
  }

  // Loop to assign event function for each option
  for (var l = 0; l < options.length; l++) {
    options[l].onclick = registerOption;
  }

  function registerDigit(event) {
    var input = document.querySelector('.userInput');
    var keyChoice = this.innerHTML;

    balanceChecker();

    if (operatorUsed === true) {
      operatorUsed = false;
      input.innerHTML = '';
    }

    // Inputs the key in the userInput section of the UI
    if (input.innerHTML.indexOf(0) === 0 && decimalAdded === false) {
      input.innerHTML = keyChoice;
      
    } else if (placeCounter < 2 && decimalAdded === true) {
      placeCounter += 1;
      input.innerHTML += keyChoice;
      
    } else if (placeCounter < 2 && decimalAdded === false) {
      input.innerHTML += keyChoice;

    }
  // end of registerDigit function  
  }

  function registerSpecialKey(event) {
    var input = document.querySelector('.userInput');
    var keyChoice = this.innerHTML;

    balanceChecker();

    if (keyChoice === '.' && decimalAdded === false) {
      decimalAdded = true;
      input.innerHTML += keyChoice;

    } else if (keyChoice === '00' && decimalAdded === true && placeCounter === 0) {
      zeroZeroAdded = true;
      placeCounter = 2;
      input.innerHTML += keyChoice;
    }
  // end of registerSpecialKey function
  }

  function registerOperation(event) {
    var input = document.querySelector('.userInput');
    var keyChoice = this.innerHTML;

    balanceChecker();
    // sets the total if 0
    if (calculator.getTotal() === 0) {
      operator = keyChoice;
      operatorUsed = true;
      calculator.setTotal(input.innerHTML);

    } else if (keyChoice === '=') {
      // if = operator selected, will return total according to last operator used and reset total
      if (operator === '+') {
        calculator.add(input.innerHTML);
        input.innerHTML = calculator.getTotal();
        calculator.resetTotal();

      } else if (operator === '-') {
        calculator.subtract(input.innerHTML);
        input.innerHTML = calculator.getTotal();
        calculator.resetTotal();

      } else if (operator === 'x') {
        calculator.multiply(input.innerHTML);
        input.innerHTML = calculator.getTotal();
        calculator.resetTotal();      

      } else if (operator === '÷') {
        calculator.divide(input.innerHTML);
        input.innerHTML = calculator.getTotal();
        calculator.resetTotal();

      }
    // if any other operator key is used, function performed
    } else {

      if (operator === '+') {
        calculator.add(input.innerHTML);
        input.innerHTML = calculator.getTotal();

      } else if (operator === '-') {
        calculator.subtract(input.innerHTML);
        input.innerHTML = calculator.getTotal();

      } else if (operator === 'x') {
        calculator.multiply(input.innerHTML);
        input.innerHTML = calculator.getTotal(); 

      } else if (operator === '÷') {
        calculator.divide(input.innerHTML);
        input.innerHTML = calculator.getTotal();
      }

      operator = keyChoice; 
      operatorUsed = true;
    }
  // end of registerOperation function
  }
  // Function called onto each key
  function registerOption(event) {
    // Registers the current input BEFORE last key press
    var input = document.querySelector('.userInput');
    // Registers most recent key press
    var keyChoice = this.innerHTML;
    // resets entire calculator 
    if (keyChoice === 'reset') {
      calculator.resetBalance();
      clear();

    } else if (keyChoice === 'clear') {
      clear();

    } else if (keyChoice === 'balance') {
      balanceSelected = true;
      input.innerHTML = calculator.getBalance();
      
    } else if (balanceSelected === false) {

      if (keyChoice === 'deposit') {
        calculator.deposit(parseFloat(input.innerHTML));
        clear();

      } else if (keyChoice === 'withdraw' && input.innerHTML < calculator.getBalance()) {
        calculator.withdraw(parseFloat(input.innerHTML));
        clear();

      }
    }
  // end of registerOption function 
  }
  // if the balance has been checked, clears userInput
  function balanceChecker() {
    if (balanceSelected === true) {
      balanceSelected = false;
      document.querySelector('.userInput').innerHTML = 0;
    }
  }
  // clears user input and resets values except total and balance
  function clear() {
    decimalAdded = false;
    zeroZeroAdded = false;
    placeCounter = 0;
    balanceSelected = false;
    operator = null;
    operatorChecker = null;
    calculator.resetTotal();
    document.querySelector('.userInput').innerHTML = 0;
  }
// end of registerLogic function  
})();