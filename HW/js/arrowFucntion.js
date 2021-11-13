const years = [1990, 1986, 2000, 1998];

// ES5
var ages5 = years.map(function(el, index) {
    return 2020 - el;
});
console.log(years);
console.log(ages5);



//ES6
var ages6 = years.map(el => 2020 - el);

var ages7 = years.map((el, index) => `${index}: 2020 - ${el}`);

var ages8 = years.map((el, index) => {
    let j = i + 1;
    return `${index}: 2020 - ${el}`
});

console.log(ages6);
console.log(ages7);
console.log(ages8);
