//console.log(this); //[object Window]

hello();

function hello() {
    console.log('hello function is getting started.');
    console.log(this); //[object Window] cuz function gets its this from global context.
    console.log(window);
    console.log(globalThis); 
}

var p1 = {
    name: 'Bold';
    printThis: function() {
        console.log(this); //uur ym hevlene.

        function secondFunction() {
            console.log(this); //[object Window] gej hevlene.
        }
        secondFunction(); //engiin function uchir ingej duudahad garch irne.
    }
}

var p2 = {
    name: 'Nara';
}
//Method borrowing
p2.printThis = p1.printThis;

p1.printThis(); //object dotorh function uchraas ingej duudna. Object-oo ehleed duudna.
p2.printThis(); //Name n Nara-gaaraa bna. Creation shatand bish ajilluulah shatand todorhoilogddog uchraas Bold bish bna.