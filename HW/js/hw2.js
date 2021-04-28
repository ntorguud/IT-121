// instantiate and assign values to variables
var message = prompt("Let's play the sum game.\nPlease enter your name");
// var person = prompt("Please enter your name", "Stani");

var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
var total = parseInt(num1) + parseInt(num2);


document.getElementById('message').textContent = 'Hi, ' + message + '!' + ' The sum of ' + num1 + ' + ' + num2 + ' is : ' + total;
// document.getElementById('message').textContent = `Hi, ${message} ! The sum of ${num1} + ${num2} is : ${total}`;
