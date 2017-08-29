// Retrieves key input from index
var keys = document.querySelectorAll('#content span')
var operations = ['+', '-', 'x', '÷']
var decimalCheck = false

// Create onclick event for all keys
for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    // Retrieve input and key values
    var input = document.querySelector('.userInput')
    var inputVal = input.innerHTML
    var keyVal = this.innerHTML

    if (keyVal === '=') {
      var equation = inputVal
      var lastInput = equation[equation.length-1]


      // Replace instances of x and ÷ with * and /
      equation = equation.replace(/x/g, '*').replace(/÷/g, '/')

      // Check last input for decimal, if true then remove
      if (operations.indexOf(lastChar) > -1 || lastChar == '.')
        equation = equation.replace(/.$/, '')

      if (equation)
        input.innerHTML = eval(equations)

      decimalCheck = false

    } else if (keyVal === 'clear') {
      input.innerHTML = ''
      decimalCheck = false
    }
  }
}