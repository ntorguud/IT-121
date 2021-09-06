//Execution Context - Function-ii code-n ajillah orchin. Ene dotor variable object, 'this' variable, scope chain

//Global Execution Context - Global code-n ajillah orchin. Ene dotor globalThis === global object === 'this' var, null. Every code outside function will work here.


//What is the meaning of 'Undefined'?
var a;

console.log(a); //undefined - anhnaasaa utga uguugui;

a = null; //Programmer makes it empty. It had any value before.



//Hoisting
var age = 23;

function printAge(name, country, city, age) {
    console.log(arguments);
    console.log(country + ' ulsiin ' + city + ' hotod amidardag ' + name + ' ' + age ' nastai.');
}

printAge('Nara', 'USA', 'San Franciso', 23);

//or use pre-built variable named arguments
console.log(arguments[1] + ' ulsiin ' + arguments[2] + ' hotod amidardag ' + arguments[0] + ' ' + arguments[3] + ' nastai.');  //baij bolno.