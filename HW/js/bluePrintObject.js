//Zagvar objects- Plue print objects ni object uusgeh neg arga ym. (Better than dan function uusgeh method)
// var p1 = {
//     name: 'Jenny',
//     job: 'programmer',
//     info: function() {
//         console.log(this.name + this.job + ' mergejiltei.');
//     }
// };
// p1.info();

// var p2 ={};
// //Run time urgutguh bolomjtoi.
// p2.name = 'Jack';
// p2.job = 'accountant';
// p2.info = function() {
//     console.log(this.name + this.job + ' mergejiltei.');
// };
// p2.cropNewVersion = function() {
//     console.log('This is an object.');
// }
// p2.info();

var Object;//Buh ym deeree Object-s inherit hiisen bdag

var materi = {
    name: 'bodis'};
    materi.haragdah = function() { //materi object dotor 'haragdah' gedeg function hiiy
        console.log(this.name + ' materi hargdlaa.');
    }

var animal = Object.create(materi); //animal object ruu materi-iin prototype-uudiig buyu value-g inherit hiine.
animal.name = 'amitan';
animal.hoolloh = function() {
    console.log(this.name + '-iig hoololloo.');
};
animal.hudluh = function() {
    console.log(this.name + ' hudulluu.');
};

var human = Object.create(animal);
human.name = 'hun';
hun.hudluh = function() {
    console.log(this.name + ' hudulluu.');
};
hun.takeOrders = function(orders) {
    console.log(this.name + orders + ' gesen tushaal avlaa.');
};

var soldier = Object.create(human);
soldier.name = 'Jenny';
soldier.fight = function() {
    console.log(this.name + ' started to fight.');
};

var spy = Object.create(hun);
spy.name = 'Sarah';

console.log(soldier.name); //Dooroos n shatlan haih - prototype chaining hiigeed hamgiin oirhon bgaa name-iig olno.
console.log(soldier.__proto__.__proto__); //Object. --> deeshee --> deeshee
soldier.haragdah(); //Jenny materi haragdlaa. gej hevlene cuz dooroosoo ehelj neree haina. Override hiigdsen.
soldier.hoolloh();
soldier.hudluh();
soldier.takeOrders('Period!!!');
soldier.fight();
spy.takeOrders('Go to Peru.');
