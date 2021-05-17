var hotItems = document.querySelectorAll('li.hot'); // Store NodeList in array
if (hotItems.length > 0) {                          // If it contains items
 
  for (var i = 0; i < hotItems.length; i++) {       // Loop through each item
    hotItems[i].className = 'chic';         // Change value of class attribute
  } 
}

var itemFive = document.getElementById('five');  // Get fifth list item
 
var elText  = itemFive.firstChild.nodeValue;    // Get its text content
 
elText = elText.replace('Home', 'Beauty');  // Change Home to Beauty
 
itemFive.firstChild.nodeValue = elText;         // Update the list item

// Create a new element and store it in a variable.
var newEl1 = document.createElement('li');
 
// Create a text node and store it in a variable.
var newText = document.createTextNode('Curve + Plus');
 
// Attach the new text node to the new element.
newEl1.appendChild(newText);
 
// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[5];
 
// Insert the new element into its position.
position.appendChild(newEl1);

var secondItem = document.getElementById('two'); // Get second list item 
if (secondItem.hasAttribute('class')) {          // If it has class attribute
  var attr = secondItem.getAttribute('class');   // Get the attribute
 
  // Add the value of the attribute after the list
  var el = document.getElementById('scriptResults');
  el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
 
}

var firstItem = document.getElementById('one'); // Get the first item
firstItem.className = 'complete';               // Change its class attribute

var fourthItem = document.getElementsByTagName('li').item(3);// Get fourth item
// NOTE: The following line should say fourthItem (not el2)
fourthItem.setAttribute('class', 'hot');       // Add an attribute to it
