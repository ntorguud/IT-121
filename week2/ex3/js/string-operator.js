// create vars to store greeting and first name
var greeting = "Howdy";
var firstName = "Molly";

// create message to be displayed to un
var welcomeMessage = greeting + ' ' + firstName + '!';

// get element with ID of 'greeting' and 
var el = document.getElementById('greeting');

// replace text content with message 
el.textContent = welcomeMessage;