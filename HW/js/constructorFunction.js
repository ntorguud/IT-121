function Animal(ner) {
    // var obj = Object.create(Animal.prototype);   // new keywordiig hereglehguigeer ingej ene code-iig bichih bsn.
    this.name = ner;
};

//Runtime shuud bichne.
Animal.prototype.hoolloh = function() {
    console.log(this.name + ' has eaten'); //return obj;   // new keywordiig hereglehguigeer ingej ene code-iig bichih bsn.
};

var a1 = /*obj*/ new Animal('goat'); //it's constructor function
a1.mailah = function() {
    console.log(this.name + ' maillaa.');
};
a1.hoolloh(); //new-- object uusgene, return object gedeg uildliig tovchilson.
a1.mailah(); //ene zuvhun goat-tai hamaatai.

var a2 = new Animal('cow');
a2.hoolloh();

var a3 = new Animal('horse');
a3.hoolloh();
//__proto__ = prototype of Animal


// var Object;//Buh ym deeree Object-s inherit hiisen bdag

// var materi = {
//     name: 'bodis'};
//     materi.haragdah = function() { //materi object dotor 'haragdah' gedeg function hiiy
//         console.log(this.name + ' materi hargdlaa.');
//     }

// var animal = Object.create(materi); //animal object ruu materi-iin prototype-uudiig buyu value-g inherit hiine.
// animal.name = 'amitan';
// animal.hoolloh = function() {
//     console.log(this.name + '-iig hoololloo.');
// };
// animal.hudluh = function() {
//     console.log(this.name + ' hudulluu.');
// };

// var human = Object.create(animal);
// human.name = 'hun';
// hun.hudluh = function() {
//     console.log(this.name + ' hudulluu.');
// };
// hun.takeOrders = function(orders) {
//     console.log(this.name + orders + ' gesen tushaal avlaa.');
// };

// var soldier = Object.create(human);
// soldier.name = 'Jenny';
// soldier.fight = function() {
//     console.log(this.name + ' started to fight.');
// };

// var spy = Object.create(hun);
// spy.name = 'Sarah';

// console.log(soldier.name); //Dooroos n shatlan haih - prototype chaining hiigeed hamgiin oirhon bgaa name-iig olno.
// console.log(soldier.__proto__.__proto__); //Object. --> deeshee --> deeshee
// soldier.haragdah(); //Jenny materi haragdlaa. gej hevlene cuz dooroosoo ehelj neree haina. Override hiigdsen.
// soldier.hoolloh();
// soldier.hudluh();
// soldier.takeOrders('Period!!!');
// soldier.fight();
// spy.takeOrders('Go to Peru.');
