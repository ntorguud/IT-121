var a = {};

a.location = 'UB';
a.coordinate = 123124;

console.log(a.location);
console.log(typeof a); //answer is object


///
var b = [];

b.push(234);

console.log(b);
console.log(typeof b); // answer is object, cuz array is the type of object

console.log(typeof undefined); //answer is undefined

console.log(typeof null); //answer is object. Null is an object

if(typeof y === 'number') console.log('This is a number.');
else console.log(y + " 's type is " + (typeof y));
