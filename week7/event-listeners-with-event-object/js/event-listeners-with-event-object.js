var elUsername = document.getElementById('username');// Get username input
  elUsername.addEventListener('blur', function(event) {  // On blur event
    checkLength(event, 5);                             // Call checkLength()
  }, false);
 
 
  function checkLength(event, minLength) {         // Declare function
    var el, elMsg;
    el = event.target;             // Get target of event
    elMsg = el.nextSibling;                    // Get its next sibling
  
    if (el.value.length < minLength) {         // If length is too short set msg
      elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
    } else {                                   // Otherwise
      elMsg.innerHTML = '';                    // Clear message
    }
  }

  