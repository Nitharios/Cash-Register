var calculator = calculator()

// Retrieves key input from index
var keys = document.querySelectorAll('#cashRegister span')
var operations = ['+', '-', 'x', '÷']

// Create onclick event for all keys
for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    // Retrieve input and key values
    var input = document.querySelector('.userInput')
    var inputVal = input.innerHTML
    var keyVal = this.innerHTML

    if (keyVal === '=') {
      var equation = inputVal

      if (equation) {
        input.innerHTML = eval(equation)
      }

    } else if (keyVal === 'clear') {
      input.innerHTML = ''

    } else if (keyVal === 'balance') {
    
    } else {
      input.innerHTML += keyVal
    }
  }
}