//Nodelsit irdeg, array irdeggui uchraas slice function ashiglan array bolgono. This-iin orond call
const boxes = document.querySelectorAll(".box");  //ene bol Nodelist

//ES5
var arr = Array.prototype.slice.call(boxes);

arr.forEach(function(e) {
    e.style.backgroundColor = "dodgerBlue";
});



//ES6
var arr1 = Array.from(boxes);

arr1.forEach(e => e.style.backgroundColor = "red");

//More easier code:
Array.from(boxes).forEach(e => e.style.backgroundColor = "yellow");


//continue, break    forEach-d hereglegdehgui


//ES5
for(var i = 0; i < boxes.length; i++) {
    if(boxes[i].className === "box yellow") continue;

    boxes[i].textContent = "Bi bol shar bish";
}


//ES6
for(const el of boxes) {
    if(el.className === "box yellow") continue;

    el.textContent = "Bi bol shar bish";
}



//Easier way:
for(const el of boxes) {
    if(el.className.includes("red", "green", "blue")) continue;

    el.textContent = "Bi bol shar bish";
}

///////////
for(const el of boxes) {
    if(el.className.includes("yellow")) continue;

    el.textContent = "Bi bol shar bish";
}


let ages = [12, 27, 22, 16, 34, 67, 11];
//18 =< nasnii humuusiin nasiig indexeer n oloy

//ES5
let isFullAge = ages.map(function(el) {
    return el >= 18;
});
console.log(ages);
console.log(isFullAge);
console.log(isFullAge.indexOf(true));
console.log(ages[isFullAge.indexOf(true)]);



//ES6
let index = ages.findIndex(el => el >= 18);
console.log(`Oldson index: ${index}`);

//Tovchoor
console.log(ages.findIndex(el => el >= 18)); //18aas deeshih nasnii index-iig olj bna.
console.log(ages.find(el => el >= 18)); //nasnii toog olj bna.
