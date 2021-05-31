//on submit, get values
var form = document.getElementById('form');

function makeCompleteName(event) {
    event.preventDefault();

    var firstName = document.getElementById('1name').value;
    var lastName = document.getElementById('lname').value;
    var nameOutput = document.getElementById('fullname');
    var completeName = firstName + ' ' + lastName;

    nameOutput.value = completeName;
}

window.onload = function() {
    form.addEventListener('submit', makeCompleteName);
}