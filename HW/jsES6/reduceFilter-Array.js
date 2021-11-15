let arr = [10, 20, 30, 40, 50, 60];

//1
for(let i = 0; i < arr.length; i++) {
    sum = sum +arr[i];
}
console.log(sum);


//2
sum = 0;

for(let e of arr) {
    sum += e;
}


//3
sum = 0;
arr.forEach(function(e) {
    sum = sum + e;
});


//4
arr.forEach(e => sum = sum + e);


//5 Reduce function ashiglay. Execute hiigeed array-s gantsxan utga butsaana.
let sum = arr.reduce((a, b) => {
    return a + b;
    }, 0);   //===========

let sum = arr.reduce((a, b) => a + b);

// function add(a, b) {
//     return a + b;
// }

console.log(arr);
console.log(sum);



///Min numberiig oloy
let min = arr.reduce(findMin);

function findMin(min, b) {
    if(b < min) min = b;

    return min;
}


//In short
let min = arr.reduce((min, b) => {
    if(b < min) min = b;

    return min;
});


//In very short
let min = arr.reduce((min, b) => {return b < min ? b : min});

console.log(min);



////Next
let found = arr.filter(function(e) {
    if(e % 10 === 0) return e;
});

//In short
let found = arr.filter((a, b) => {if(e % 10 === 0) return e
});