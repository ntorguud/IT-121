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