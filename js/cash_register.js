
// Revealing Module Pattern to prevent function variables from being affected outside the function's scope
var registerLogic = (function () {
  // Creates a nodeList of all the keys under #cashRegister
  var digits = document.querySelectorAll('.digit');
  var specialKeys = document.querySelectorAll('.special');
  var operations = document.querySelectorAll('operation');
  var options = document.querySelectorAll('.option');
  var decimalAdded = false;
  var zeroZeroAdded = false;

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

  // Loop to assin event function for each option
  for (var i = 0; i < options.length; i++) {
    options[i].onclick = registerOption;
  }

  function registerDigit(event) {
    var input = document.querySelector('.userInput');
    var keyChoice = this.innerHTML;

    // Inputs the key in the userInput section of the UI
    if (input.innerHTML.indexOf(0) === 0) {
      input.innerHTML = keyChoice;
    
    } else {
      input.innerHTML += keyChoice;

    }
  // end of registerDigit function  
  }

  function registerSpecial(event) {
    var input = document.querySelector('.userInput');
    var keyChoice = this.innerHTML;

    // changes keyChoice to true for some reason instead of expected . or 00
    if (keyChoice = '.' && decimalAdded === false) {
      decimalAdded = true;
      input.innerHTML += '.';

    } else if (keyChoice = '00' && zeroZeroAdded === false) {
      zeroZeroAdded = true;
      input.innerHTML += '00';
    }
  // end of registerSpecial function
  }

  function registerOperation(event) {
    var input = document.querySelector('.userInput');
    var keyChoice = this.innerHTML;

    if (keyChoice === '=') {


    } else if (keyChoice === '+') {


    } else if (keyChoice === '-') {


    } else if (keyChoice === 'x') {


    } else if (keyChoice === '÷') {


    }
  // end of registerOperation function
  }

  // Function called onto each key
  function registerOption(event) {
    // Registers the current input BEFORE last key press
    var input = document.querySelector('.userInput');
    // Registers most recent key press
    var keyChoice = this.innerHTML;

    if (keyChoice === 'reset') {
      calculator.reset();
      clear();

    } else if (keyChoice === 'clear') {
      clear();

    } else if (keyChoice === 'balance') {
      input.innerHTML = calculator.getTotal();
    
    } else if (keyChoice === 'deposit') {
      calculator.deposit(parseFloat(input.innerHTML));
      clear();

    } else if (keyChoice === 'withdraw') {
      calculator.withdraw(parseFloat(input.innerHTML));
      clear();
    }

  // end of registerKey function 
  }

  function clear() {
    decimalAdded = false;
    zeroZeroAdded = false;
    document.querySelector('.userInput').innerHTML = 0;
  }
// end of registerLogic function  
})()