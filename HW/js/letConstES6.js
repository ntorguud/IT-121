let level = 1;
let levelName = "Mangasiin am";
let zombieCount = 200;

const gameDuration = function(zombieCount) {
    return zombieCount * 3;
}

//ES5
let info = levelName + " nertei " + Level + "-r level n " + gameDuration(zombieCount) + " sec urgeljilne."

console.log(info);

//ES6     ` backtick
let gameInfo = `${levelName} nertei ${level}-r level n ${gameDuration(zombieCount)} sec urgeljilne.`;

console.log(gameInfo);

console.log(levelName.startsWith("Mangas"));  //ene ugeer ehelsen uu gedgiig shalgaj bna.
console.log(levelName.endsWith("am"));  //it will be true.

console.log(`${levelName}  `.repeat(50));