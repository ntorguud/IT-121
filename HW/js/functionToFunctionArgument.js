var birthYears = [1981, 2005, 1978, 1986, 2010];
var ages = processArray(birthYears, findAges);

console.log(ages);
console.log(processArray(ages, isAdult));
console.log(processArray(ages, findMaxHeartRates));
console.log(processArray([2016, 1965, 1945], findAges));
console.log(processArray([1965, 2001, 1998], findMaxHeartRates));
console.log(processArray(ages, function(age) {
    return age >= 65
}))

// console.log(ages());
// console.log(isAdult());
// console.log(findMaxHeartRates());

// function findAges() {
//     var arr = [];

//     for(var i = 0; i < birthYears.length; i++) {
//         arr.push(new Date().getFullYear() - birthYears[i]);
//     }
//     return arr;
// }

// function isAdult() {
//     var isAdult = [];
    
//     for(var i = 0; i < ages.length; i++) {
//         isAdult.push(ages[i] >= 18);
//     }
// }

// function findMaxHeartRates() {
//     var arr = [];

//     for(var i = 0; i < ages.length; i++) {
//         arr.push(Math.round(206.9 - 0.67 * age[i]));
//     }
//     return arr;
// }


 //Generic, main
function processArray(myArr, fn) {
    var arr = [];

    for(var i = 0; i < myArr.length; i++) {
        arr.push(fn(myArr[i]));
    }
return arr;
}

//el-eer on orj irne. callback functions
function findAges(age) { 
    return new Date().getFullYear() - age;
}

//callback functions
function isAdult(age) {
    return age >= 18;
}

function findMaxHeartRates(age) { //callback functions
    return Math.round(206.9 - 0.67 * age);
}
