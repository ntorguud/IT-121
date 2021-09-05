//While loop
var cmd = prompt('Input your commnad please?');

while(cmd !=== 'quit') {
    alert('First loop.');
}

//Do while loop. At least 1 udaa davtana.
do {
    alert('Second loop');
} while(cmd !=== 'quit');
    
alert('Bye!');


//
var num = [12, 13, 17, 90, 21, 65, 32, 63];

for(var i = 0; i < num.length; i++) {
    if(num[i] % 7 !== 0) continue; //tsaash n shalga

    console.log(num[i] + ' is equally divided in 7.');
    var result = num[i] / 7;
    console.log('if you divide ' + num[i] + ' to 7, the result is ' + result);

    console.log('The square of ' + num[i] + ' is ' + num[i]**2);
    break; //finishes the loop quickly.
console.log('The program is completed successfully.');
