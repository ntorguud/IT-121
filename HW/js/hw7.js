var mpgForm = document.getElementById('form');

function calculateMPG(event) {
    event.preventDefault(); 

    var mpgForm = event.target;
    var milesInput = mpgForm.querySelector('#miles').value; // In my understanding, querySelector is good if it is not div id
    var gallonsInput = mpgForm.querySelector('#gallons').value;

    //form vaildation: if inputs are not a number, alert the user, and reset the form
    if (isNaN(milesInput) || isNaN(gallonsInput)) {
        alert('Both entries must be numeric');
        mpgForm.reset();
    }

    else {
        var mpg = milesInput / gallonsInput;
        var mpgOutput = mpgForm.querySelector('#mpg');
        mpgOutput.value = mpg.toFixed(2); //round to one decimal place
}
}

window.onload = function() {
    mpgForm.addEventListener('submit', calculateMPG);
}