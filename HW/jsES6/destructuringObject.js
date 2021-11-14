var arr = ["Naraa", 23, "Bayanzurh 16-r horoo 32-5", "Programmer"];

//ES5  Destructuring array
var firstName = arr[0];
var age = arr[1];
var address = arr[2];
var job = arr[3];

console.log(firstName + " nertei hunii nas" + age + ", hayag n " + address + ", ajil n " + job + ".");


//ES6  Destructuring array
let arr = ["Naraa", 23, "Bayanzurh 16-r horoo 32-5", "Programmer"];

let [firstName, age, address, job] = arr;

console.log(`${firstName} nertei hunii nas ${age} , hayag n ${address}, ajil n ${job}.`);


//ES6  Destructuring object
let human = {
    name: "Sarah",
    age: 23,
    address: {
        city: "UB",
        district: "Bayanzurh",
        other: "32-2"
    }
};

let {name: ner, age, address: {district: duureg} } = human;
console.log(`${ner}, ${age}, ${duureg}`);




let [h1, h2, t, z] = my();
console.log(h2);
console.log(z);

function my() {
    return [2, 5, 45, 100];
}
