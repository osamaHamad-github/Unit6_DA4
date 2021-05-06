// event listener for the calculate button
// this will run our find trapezoid area function
document.getElementById('calculate-button').addEventListener('click', findTrapezoidArea)

function findTrapezoidArea () {
  // we are assigning our variables with the user input
  let a = document.getElementById('a').value
  let b = document.getElementById('b').value
  let h = document.getElementById('h').value

  // trimming white spaces off of the variables
  // this will help with detecting the blank variable error
  a = a.trim()
  b = b.trim()
  h = h.trim()

  // creating an array with our inputs to help parse through them
  const inputs = [a, b, h]

  // parsing through our inputs to check for forbidden inputs
  // strings, null, numbers less than or equal to zero are forbidden
  for (let i = 0; i < inputs.length; i++) {
    // this detects values that are Not a Number
    if (isNaN(inputs[i])) {
      document.getElementById('answer').innerText = 'Value Error'

      // setting a time out so that alert comes after html change
      setTimeout(function() {
        alert(`Value Error: '${inputs[i]}' is not a number`)
      }, 10)
      return 0
      } 

        // this detects blank variables
        else if (inputs[i] === '') {
      document.getElementById('answer').innerText = 'Value Error'

      // setting a time out so that alert comes after html change
      setTimeout(function() {
        alert(`Value Error: all variables must be filled`)
      }, 10)
      return 0
      } 

      // this detects values equal to zero or any negative number
      else if (inputs[i] <= 0) {
      document.getElementById('answer').innerText = 'Math Error'

      // setting a time out so that alert comes after html change
      setTimeout(function() {
      alert(`Math Error: cannot have value less than or equal to 0 (${inputs[i]})`)
      }, 10)
      return 0
    }
  }

  // the input is a recieved as type str so we converted it to float
  a = parseFloat(a)
  b = parseFloat(b)
  h = parseFloat(h)

  // we are calculating the area using the trapezoid area formula
  // A = ((a + b) / 2) * h
  const area = ((a + b) / 2) * h

  // we are changing the content of the paragraph with id answer to the area we got
  document.getElementById('answer').innerText = area
}
