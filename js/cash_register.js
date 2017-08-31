/*
KNOWN BUGS:
<> SOLVED: If operator has already been selected and a different operator is selected, the operator function will perform function on total and current innerHTML variables
      <> SOLUTION --> Boolean variables in each math function to 'flip the switch'
<> SOLVED: When consecutively pressing operator key, userInput resets to 0
<> SOLVED: Add function does not appear to add properly and returns only the first number
      only works if (operator = '+')) || (operator section of selectChecker is removed)
      !! PROBLEM --> document.querySelector(.userInput).innerHTML = '' operation section of selectChecker is interferring with add()
          --> selectChecker() is setting the .innerHTML when the operator key is pressed
      <> SOLUTION --> removed operation section of selectChecker & added line: input.innerHTML = calculator.getTotal() to bottom of add()
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

  // Loop to assign event function for each digit
  for (var i = 0; i < digits.length; i++) {
    digits[i].onclick = registerDigit;
  }

  // Loop to assign event function for each special key
  for (var i = 0; i < specialKeys.length; i++) {
    specialKeys[i].onclick = registerSpecial;
  }

  // Loop to assign event function for each operation
  for (var i = 0; i < operations.length; i++) {
    operations[i].onclick = registerOperation;
  }

  // Loop to assign event function for each option
  for (var i = 0; i < options.length; i++) {
    options[i].onclick = registerOption;
  }

  function registerDigit(event) {
    var input = document.querySelector('.userInput');
    var keyChoice = this.innerHTML;

    selectChecker();
    operatorChecker();

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

  function registerSpecial(event) {
    var input = document.querySelector('.userInput');
    var keyChoice = this.innerHTML;

    selectChecker();

    if (keyChoice === '.' && decimalAdded === false) {
      decimalAdded = true;
      input.innerHTML += keyChoice;

    } else if (keyChoice === '00' && decimalAdded === true && placeCounter === 0) {
      zeroZeroAdded = true;
      placeCounter = 2;
      input.innerHTML += keyChoice;
    }
  // end of registerSpecial function
  }

  function registerOperation(event) {
    var input = document.querySelector('.userInput');
    var keyChoice = this.innerHTML;

    selectChecker();

    if (keyChoice === '=') {

      if (operator === '+') {
        calculator.add(input.innerHTML);
        input.innerHTML = calculator.getTempTotal();

      } else if (operator === '-') {
        calculator.subtract(input.innerHTML);
        input.innerHTML = calculator.getTempTotal();

      } else if (operator === 'x') {
        calculator.multiply(input.innerHTML);
        input.innerHTML = calculator.getTempTotal();

      } else if (operator === '÷') {
        calculator.divide(input.innerHTML);
        input.innerHTML = calculator.getTempTotal();

      } else {
        input.innerHTML = calculator.getTempTotal();
      }

    } else if (keyChoice === '+') {
      operator = keyChoice;
      calculator.add(input.innerHTML);
      input.innerHTML = calculator.getTempTotal();

    } else if (keyChoice === '-') {
      operator = keyChoice;
      calculator.subtract(input.innerHTML);
      input.innerHTML = calculator.getTempTotal();

    } else if (keyChoice === 'x') {
      operator = keyChoice;
      calculator.multiply(input.innerHTML);
      input.innerHTML = calculator.getTempTotal();

    } else if (keyChoice === '÷') {
      operator = keyChoice;
      calculator.divide(input.innerHTML);
      input.innerHTML = calculator.getTempTotal();

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
  // clears user input and resets values except total and balance
  function clear() {
    decimalAdded = false;
    zeroZeroAdded = false;
    placeCounter = 0;
    balanceSelected = false;
    operator = null;
    calculator.resetTotal();
    document.querySelector('.userInput').innerHTML = 0;
  }

  // if the balance has been checked, clears userInput
  function selectChecker() {
    if (balanceSelected === true) {
      balanceSelected = false;
      document.querySelector('.userInput').innerHTML = 0;
    }
  }

  function operatorChecker() {
    if (operator !== null) {
      document.querySelector('.userInput').innerHTML = 0;
    }
  }
// end of registerLogic function  
})()