// instantiate and assign values to variables
var message = prompt("Let's play the sum game.\nPlease enter your name", "");
// var person = prompt("Please enter your name", "Stani");
var x;
var y;
var total = x + y;
var num1 = prompt("Enter first number", "");
var num2 = prompt("Enter second number", "");

document.getElementById('message').textContent = 'Hi, ' + message + '!';
document.getElementById('math').textContent = 'The sum of ' +  x + ' + ' + y  + ' is : ' + total;