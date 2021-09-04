// Function
// DRY - Don't Repeat Yourself

function info(name, job, grade) {
    switch(job) {
        case 'teacher' : alert(name + ' is a teacher.'); break;
        case 'artist' : alert(name + ' is an artist'); break;
        case 'designer' : alert(name + ' is a designer'); break;
        default : alert('Undefined');
    }

    switch(true) {
        case grade >= 95 : alert("A+"); break;
        case grade <= 95 && grade > 89 : alert("A-"); break;
        case grade <= 89 && grade > 84 : alert("B+"); break;
        case grade <= 84 && grade > 79 : alert("B-"); break; 
        case grade <= 79 && grade > 74 : alert("C+"); break; 
        case grade <= 74 && grade > 69 : alert("C-"); break; 
        case grade <= 69 && grade > 64 : alert("D+"); break;
        case grade <= 64 && grade > 59 : alert("D-"); break; 
        default : alert("F");
    }
}

info('Bold', 'artist', 79,000); 
info('Sarah', 'teacher', 98,000); 



//Module oldog function 
//Expression type - Expression functioniig deer duudah bolomjgui.
var module = function(number) {
    var mode;
    if (number < 0) mode = -number;
    else mode = number;

    alert(number + " 's module is " + mode); 
return module;
}

//Statement type - Statement functioniig haanaas n ch duudah bolomjtoi.
function mod(number) {
    console.log('Statement function works.');
return mod;
}

module(-225);
mod(112);

//if you wanna use this result in the next uildel, return mod;


//Expression type
var module = function(number) {
    var mode;
    if (number < 0) mode = -number;
    else mode = number;

    alert(number + " 's module is " + mode); 
return module;
}
 
var addModules = function(x, y, z) {
    var sum = module(x) + module(y) + module(z);
    return sum;
}

addModules(-1, 2, -4);

//or var totalSum = addModules(-1, 2, -4) + addModules(-100, -9002, 894);
// console.log(totalSum);