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

console.log(arr);
console.log(sum);
