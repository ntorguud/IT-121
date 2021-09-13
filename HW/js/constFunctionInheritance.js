function Materi(price, color) {
    this.price = price;
    this.color = color;
    // this.haragdah = function() {
    //     console.log(price + ' unetei materi bna.'); //buh elementuud ene function-iig aguulaad udaan bolj gatsna.
}

Materi.prototype.haragdah = function() {
    console.log(this.price + ' unetei materi bna.'); //odoo buh gazar haragdah function-iig aguulna.
}

var m1 = new Materi(1500, 'red');

function Animal(age, price, color) {
    Materi.call(this, price, color);
    this.age = age;
}

Animal.prototype = Object.create(Materi.prototype); //ene heterhii hucheer zalgaj bgaa

var cow = new Animal(10, 400000, 'alag');
console.log(cow.age);
cow.haragdah();