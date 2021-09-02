// !tab prints doctype html
//Day1 

var year, yearJohn, yearMark; //sav beldsen 

year = 2021;
ageJohn = 28;
ageMark = 35;

console.log('Ene jil bol : ' + year + ' on.');

return {name: 'boldoo'};

yearJohn = year - ageJohn;
yearMark = year - ageMark;
console.log("While John's birth year is " + yearJohn + ", Mark's birth year is " + yearMark);

// 15 jiliin daraa heden on boloh ve>?
// 18 jiliin daraa Mark heden nastai bh ve?

var future = year + 15;
console.log("15 jiliin daraa " + future + " on baih bolno.");

var futureAgeMark18Years  = yearMark + 18;
console.log("Mark will be " + futureAgeMark + " after 18 years.");

johnOlder = ageJohn > ageMark;

console.log(johnOlder);
console.log(typeof johnOlder); //answer is Boolean
//typeof ageJohn is number
//typeof name is string 
//typeof undefined variable is null
//if 3 / 'a' = NaN not a number
// 3 / 0 = infinity


//Day2 
//Coersion - turul huvirgalt
//Operator precedence - Ajillah daraalal/ erh - JS is a dynamic language

var a = 12.5
a = a + 4;
console.log(typeof a);

//if 
a = 16 + true;
a = 17;
true = 1, false = 0;

//if
a = 16 + true + '2';
a = 172; /* it became a string. String is very strong. A static languages such as C++, Python is better for a big program cuz of less errors. */
