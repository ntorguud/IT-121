// Array
var languages = ['JS', 'PHP', 'C#', 'Python', 12];
languages[1] = 'Go'; //uurchilj bolno.
languages[5] = 'C++';
languages[languages.length] = 'Assembler';
languages[languages.length] = 'Java';

languages.unshift('perl'); //add in the beginning.
languages.shift(); //ehnii elementiig ustgana.

languages.push('ruby'); // tugsguld ni nemne.

console.log(languages);
console.log(languages[0]);
console.log(languages.length + 'sh hel bna.');
console.log(languages[languages.length - 1]); === console.log(languages.pop()); //tugsguliin elementiig hevlene.

console.log(languages.indexOf('python')); //index ni garna. Baihgui bol -1 gej garna.

if(languages.indexOf('lisp') === -1) {
    console.log("Sorry, can't find it.");
}
else {
    console.log(languages.indexOf('lisp') + " index belongs to lisp.")
}

/* Olon jagsaaltuudiig array-aar hiideg. For example: 1-118 hicheel baival 118 elementtei array bna. */
