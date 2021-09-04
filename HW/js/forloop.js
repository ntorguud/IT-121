// For loop, iteration
/* for(a; b; c) {
    a - ehleh utga
    b - duusah nuhtsul
    c - uurchlult
} */

for(var i = 1; i <= 100; i+=2) {
    console.log(i + ' step');
}

for(var x = 1000; x > 0; x-=2) {
    console.log(x);
}

// <100000, 7-d huvaagddag toonuudiig hevley
for(var num = 0; num < 100000; num++) {
    if(num % 7 === 0) console.log(num);
} // short version without curly brace


// 10-0 hurtelh toog s=10 ued 1 2 3 4 5 6 7 8 9 10;
// 3 ued 1 2 3 geh meteer hevley
for(var i = 10; i > 0; i--) {
    console.log(i);
    
    var s = "";
    for(var j = 1; j <= i; j++) {
        s = s + j + " ";
    }
    console.log(s);
}


for(var i = 10; i > 0; i--) {
    console.log(i);
    
    var s = 0;
    for(var j = 1; j <= i; j++) {
        s = s + j;
    }
    console.log('1-ees ' + i + ' hurtelh toonuudiin niilber :' + s);
}