//IIFE --- Immediately Invoked Function Expression

function hi() {
    console.log('hi'); //Function Statement
} 
hi();

//Function expression. Suuld n function-aa duuddag !!!!
var aa = function() {
    console.log('Hello');
}
aa();

//Anonymous, statement function-iig ner ugulguigeer ingej(put in parentheses) duudaj ajilluulj bolno. Look at below:
(function() {
    console.log('hi hi');
    console.log('he he');
    console.log('ho ho');
    console.log('ha ha');
})(); //this is IIFE; used for only once;


//Next bad example
var name = 'Sarah';
console.log('Hi! ' + name);

function engVersion() {
    var name = 'John';
    console.log('Hi! ' + name);
}
engVersion();

//Improved version --- IIFE
(function() {
    var name = 'Sarah';
    console.log('Hi! ' + name);
})();

(function() {
    var name = 'John'; //goal is the name in this function could not affect globally.
    //private, data encapsulation, data protection
    console.log('Hi! ' + name);
})();
