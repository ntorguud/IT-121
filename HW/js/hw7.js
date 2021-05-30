var elMpg = document.getElementById('calculateMPG');

function calculateMPG(event) {
    event.preventDefault(); 

    var elMpg = event.target;
    var milesInput = document.getElementById('miles').value; 
    var gallonsInput =document.getElementById('gallons').value;

    if (isNaN(milesInput) || isNaN(gallonsInput)) {
        alert('Both entries must be numeric');
        elMpg.reset();
    }

    else {
        var mpg = milesInput / gallonsInput;
        var mpgOutput = document.getElementById('mpg');
        mpgOutput.value = mpg.toFixed(2); //round to one decimal place
}
}

window.onload = function() {
    elMpg.addEventListener('submit', calculateMPG);
}