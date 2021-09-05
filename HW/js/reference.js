//Engiin utga olgolt - value, zaaltaar utga olgolt - reference. 

//Value 
var a = 12;
var b = a; //a= 12 utgiig b-d ugsun uchir b = 12 heveeree uldene. Copy of 'a' is now 'b'.
a = 13;

console.log(a); //now a = 13
console.log(b); //now b = 12


//Reference
var p1 = {
    name: notebook,
    price: '$300'
};

var p2 = p1; //odoo ali neg valueg uurchilvul buh ym dagaj uurchlugdunu. Same addresstai gsn ug. 

//Object, array deer ingedeg.
p1.name = 'Shoes';
p2.price = 100;

console.log('p1 = ' + p1.name + ' , ' + p1.price);
console.log('p2 = ' + p2.name + ' , ' + p2.price);


//Example
var x = [2, 6, 10];
var y = x;

y[0] = 50;
x[2] = 7;

console.log(x);
console.log(y);


//Function
var name = 'notebook';
var price = 250000;

function info(name, price) {
    // var discount = price - 1000;
    // console.log(name + ' nertei buteegdehuun ' + price + ' unetei bsnaa ' + discount + ' bolj hyamdarlaa.');
    console.log(name + price + ' unetei bsnaa ');

    price = price - 5000;
    console.log(price + ' bolj hyamdarlaa.');
}

info(name, price);
console.log(name + " 's price is " + price ); //anhnii 250000 uurchlugduhgui.

/////////////////////

var product = {
    name: 'shoe',
    price: 15000
}

infoNew(product);

//suuld n anhnii productiin price-g hevlej uzey
console.log(product.name + ' buteegdehuunii une: ' + product.price); //end suuld hevlehed anhnii 15000 ni 4000 bolood uurchlugdchihnu.

function infoNew(p) {
    console.log(p.name + ' buteegdehuun ' + p.price + ' unetei bsnaa ');

    p.price = p.price - 11000;

    console.log(p.price + ' bolj hyamdarlaa.');
}

//Function ruu object, or array/massive damjuulahad function anhnii object.iin value.g bur musun uurchildug shuu!!!
// Primitive utga asuudalgui, copy ni damjdag.