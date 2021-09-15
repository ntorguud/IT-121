var arr = []; //=== new Array();

arr.push(34);
arr.push('hello');
arr.push(function() {
    console.log('Hello, Greetings inside from array.');
    return function() {
        console.log('Hello from double function inside the array!');
        return function() {
            console.log('... Inception!!! ');
        }
    }
});

console.log(arr[2]);

arr[2]()()(); //arr[2]() - ehnii function-iig duudaj bna. 
//arr[2]()() - function dotorh function-iig duudaj bna.
//arr[2]()()() - dahiad dotorh function-iig n duudaj bna. ...Inception!!!...


//
function prep() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
        arr.push(function() {
                console.log(i);
        }); // i -- n iteration hiisen too 3 buyu i = 3 bolj duussan uchir arr1[]() --- answer is 3. Function n uuruu ajillaagui gsn ug.
    }
    return arr;
}

var arr1 = prep(); //arr now belongs to arr1

arr1[0](); //answer is 3. i -- n iteration hiisen too 3 buyu i = 3 bolj duussan.
arr1[1](); //answer is 3. 
arr1[2](); //answer is 3. 




//
function prep() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
        arr.push(function(j) {  //i-iin utguud j-d hadgalagdsan bgaa.
            return function() {
                console.log(j);
            }
        }(i)); //IIFE. This time, ene function-iig duudaj ajilluulsan.
    }
    return arr;
}

var arr1 = prep(); //arr now belongs to arr1.

arr1[0](); //This time answer is 0. 
arr1[1](); //This time answer is 1. 
arr1[2](); //This time answer is 2. 