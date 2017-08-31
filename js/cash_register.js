/*
KNOWN BUGS:
!! '=' requires 2x clicks to evaluate properly
      !! PROBLEM --> If innerHTML starts from 0, function will add first digit to total but not second because of if-else logic
!! UPDATED: If an operator is selected, it will apply function to the number in userInput
      !! PROBLEM --> ex. 200 (operator: +) = 400 ...
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
  var currentNum = 0;

  // Loop to assign event function for each digit
  for (var i = 0; i < digits.length; i++) {
    digits[i].onclick = registerDigit;
  }

  // Loop to assign event function for each special key
  for (var j = 0; j < specialKeys.length; j++) {
    specialKeys[j].onclick = registerSpecial;
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

      input.innerHTML = calculator.getTotal();

      /*if (operator === '+') {
        calculator.add(currentNum);
        input.innerHTML = calculator.getTotal();

      } else if (operator === '-') {
        calculator.subtract(currentNum);
        input.innerHTML = calculator.getTotal();

      } else if (operator === 'x') {
        calculator.multiply(currentNum);
        input.innerHTML = calculator.getTotal();

      } else if (operator === '÷') {
        calculator.divide(currentNum);
        input.innerHTML = calculator.getTotal();

      } else {
        input.innerHTML = calculator.getTotal();
      }*/

    } else if (keyChoice === '+') {
      operator = keyChoice;
      currentNum = input.innerHTML;
      calculator.add(currentNum);
      input.innerHTML = calculator.getTotal();

    } else if (keyChoice === '-') {
      operator = keyChoice;
      currentNum = input.innerHTML;
      calculator.subtract(currentNum);
      input.innerHTML = calculator.getTotal();

    } else if (keyChoice === 'x') {
      operator = keyChoice;
      currentNum = input.innerHTML;
      calculator.multiply(currentNum);
      input.innerHTML = calculator.getTotal();

    } else if (keyChoice === '÷') {
      operator = keyChoice;
      currentNum = input.innerHTML;
      calculator.divide(currentNum);
      input.innerHTML = calculator.getTotal();

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
})();