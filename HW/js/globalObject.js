var lastname = 'Bold'; //global
console.log(lastname);
console.log(window.lastname);
console.log(globalThis.lastname); //the latest standard
alert('/global-aar duudaj bna.'); //Literally it is : globalThis.alert('/global-aar duudaj bna.'); gesen code bsn bna.

privateInfo(); //Function duudagdaj bna.

function privateInfo() {
    var firstname = 'Nara'; // function-s gaduur hereglegdej chadahgui
    console.log('His/her name is ' + firstname + ' ' + lastname);
    alert('Odoo bol function-s duudaj bna.');
}