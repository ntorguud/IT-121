//Find the sum of 1-1000
var sum = 0;
var limit = 1000;
for(var i = 1; i <= limit; i++) {
    sum = sum + i;
    console.log(i);
    console.log('i = ' + i + ' baihad, sum = ' + sum);
}
console.log('1-' + limit + ' hutrtelh toonii sum: ' + sum);



//1-1000 hurtelh buh 7-d huvaagddag toonii sum-iig ol
var sum = 0;
var limit = 1000;
for(var i = 1; i <= limit; i++) {
    if(i % 7 === 0) {
        sum = sum + i;
    }
}
console.log('1-' + limit + ' hutrtelh buh 7-d huvaagddag toonii sum ni: ' + sum);



//1-1000 hurtelh buh prime numbers(anhnii too)-g ol
var limit = 1000;

for(var i = 2; i <= limit; i++) {
    if(primeNum(i) === true) console.log(i + ' is a prime number.');
}

function primeNum(num) {
    var yesPrimeNum = true;
    for(var x = 2; x < num; x++) {
        if(num % x === 0) {
            yesPrimeNum = false;
            break;
        }
    }
    return yesPrimeNum;
}


//Make an array with random 10 elements, then switch max and min numbers' order.
var arr = [];

for(var i = 1; i <= 10; i++) {
    var num = Math.random() * 1000;
    var floorNum = Math.floor(num);
    console.log(num + '-iig toimlood ' + floorNum);

    arr.push(num);
}
console.log(arr);

var min = 100; // length
var minIndex = -1;

for(i = 0; i < arr.length; i++) {
    console.log(arr[i]); // All elements will be printed.
    if(arr[i] < min) {
        min = arr[i];
        minIndex = i;
    }
}
console.log('Min element is ' + min + ', and its index is ' + minIndex);

var max = 1;
var maxIndex = -1;

for(i = 0; i < arr.length; i++) {
    console.log(arr[i]); // All elements will be printed.
    if(arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }
}
console.log('Max element is ' + max + ', and its index is ' + maxIndex);

var turHadgalsanUtga = arr[minIndex];

arr[minIndex] = arr[maxIndex];
arr[maxIndex] = turHadgalsanUtga;

for(i = 0; i < arr.length; i++) {
    console.log(arr[i]); // All elements will be printed.
}
