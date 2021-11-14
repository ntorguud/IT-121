// Nodelist
const boxes = document.querySelectorAll(".box");

// let arr = Array.from(boxes);
let arr = [...boxes]; //Nodelistiin elementuudiig dotor n bugdiig n zadlaad ene array ruu hiine. Mash amarhan

arr.forEach(el => el.style.backgroundColor = "red");


//Destructuring/ zadlah uur neg arga. Umnu n uzsen:
const names = ["John", "Mary", "Mike"];

let [first, second, third] = names;

console.log(second);


/////
change(...boxes)

function change(a, b, c, d) {
    a.style.backgroundColor = "green";
    b.style.backgroundColor = "dodgerblue";
    c.style.backgroundColor = "yellow";
}


////
let interpretators = ["php", "pearl", "javascript", "python", "typescript"];
let compilers = ["java", "c", "c#"];

let languages = [...interpretators, "assembler", ...compilers]; //all

console.log(languages);
