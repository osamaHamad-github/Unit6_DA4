// event listener for the calculate button
// this will run our find trapezoid area function
document.getElementById('calculate-button').addEventListener('click', findTrapezoidArea)

function findTrapezoidArea (){
  // we are assigning our variables with the user input
  // the input is a recieved as type str so we converted it to float
  let a = parseFloat(document.getElementById('a').value);
  let b = parseFloat(document.getElementById('b').value);
  let h = parseFloat(document.getElementById('h').value);

  // creating an array with our inputs to help parse through them
  inputs = [a, b, h];

  // parsing through our inputs to check for forbidden inputs
  // strings, null, numbers less than or equal to zero are forbidden
  for (let i; inputs.length; i++){
    console.log('hello world')
  }

  // we are calculating the area using the trapezoid area formula
  // A = ((a + b) / 2) * h
  let area = ((a + b) / 2) * h;

  // we are changing the content of the paragraph with id answer to the area we got
  document.getElementById('answer').innerText = area;
}