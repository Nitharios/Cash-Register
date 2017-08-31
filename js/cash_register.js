
// Revealing Module Pattern to prevent function variables from being affected outside the function's scope
var registerLogic = (function () {
  // Creates a nodeList of all the keys under #cashRegister
  var digits = document.querySelectorAll('.digit');
  var specialKeys = document.querySelectorAll('.special');
  var operations = document.querySelectorAll('.operation');
  var options = document.querySelectorAll('.option');
  var decimalAdded = false;
  var zeroZeroAdded = false;
  var digitCounter = 0;
  var balanceSelected = false;

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

    balanceCheck();

      // Inputs the key in the userInput section of the UI
    if (input.innerHTML.indexOf(0) === 0 && decimalAdded === false) {
      input.innerHTML = keyChoice;
      
    } else if (digitCounter < 2 && decimalAdded === true) {
      digitCounter += 1;
      input.innerHTML += keyChoice;
      
    } else if (digitCounter < 2 && decimalAdded === false) {
      input.innerHTML += keyChoice;

    }
  // end of registerDigit function  
  }

  function registerSpecial(event) {
    var input = document.querySelector('.userInput');
    var keyChoice = this.innerHTML;

    balanceCheck();

    if (keyChoice === '.' && decimalAdded === false) {
      decimalAdded = true;
      input.innerHTML += keyChoice;

    } else if (keyChoice === '00' && zeroZeroAdded === false && digitCounter === 0) {
      zeroZeroAdded = true;
      input.innerHTML += keyChoice;
    }
  // end of registerSpecial function
  }

  function registerOperation(event) {
    var input = document.querySelector('.userInput');
    var keyChoice = this.innerHTML;

    balanceCheck();

    if (keyChoice === '=') {
      input.innerHTML = calculator.getTotal();

    } else if (keyChoice === '+') {
      calculator.add(parseFloat(input.innerHTML));
      input.innerHTML = calculator.getTotal();

    } else if (keyChoice === '-') {
      calculator.subtract(parseFloat(input.innerHTML));
      input.innerHTML = calculator.getTotal();

    } else if (keyChoice === 'x') {
      calculator.multiply(parseFloat(input.innerHTML));
      input.innerHTML = calculator.getTotal();

    } else if (keyChoice === '÷') {
      calculator.divide(parseFloat(input.innerHTML));
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
    digitCounter = 0;
    balanceSelected = false;
    calculator.resetTotal();
    document.querySelector('.userInput').innerHTML = 0;
  }

  // if the balance has been checked, clears userInput
  function balanceCheck() {
    if (balanceSelected === true) {
      balanceSelected = false;
      document.querySelector('.userInput').innerHTML = 0;
    }
  }
// end of registerLogic function  
})()