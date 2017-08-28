/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
 var calculator = (function() {

    var memory = 0, total = 0;

    return calculator = {
      load: setTotal,
      getTotal: getTotal,
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide,
      recallMemory: recallMemory,
      saveMemory: saveMemory,
      clearMemory: clearMemory
    }


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
    function setTotal(x) {
      validate(x)
      total = x
      return total
   }

  /**
   * Return the value of `total`
   * @return { Number }
   */
    function getTotal() {
      return total
   }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
    function add(x) {
      validate(x)
      total += x
    }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
    function subtract(x) {
      validate(x)
      total -= x
    }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
    function multiply(x) {
      validate(x)
      total *= x
    } 

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
    function divide(x) {
      validate(x)
      total /= x
    }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
    function recallMemory() {
      return memory
    }

  /**
   * Stores the value of `total` to `memory`
   */
    function saveMemory() {
      memory = total
    }

  /**
   * Clear the value stored at `memory`
   */
    function clearMemory() {
      memory = 0
    }

  /**
   * Validation
   */
    function validate(x) {
      if (typeof x !== 'number') {
        throw new Error('Invalid')
      }
    }
})