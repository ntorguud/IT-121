//Datag key -> value hos utgataigaar hadgalna. Ex: hot -> UB. Key should be only one. 
//Map ruu hiicheed gargaad irehed davhardalgui bolson bdag.
//Key can be boolean, integer, object, array... 
let dictionary = new Map();

dictionary.set("language", "hel");
dictionary.set("car", "mashin");
dictionary.set("sun", "nar");
dictionary.set("aav", "father");
dictionary.set(1, "one");
dictionary.set(2, "two"); //!!!!!!!! it will be taken

dictionary.delete(2);

console.log(Map);
console.log(dict.get("car")); //key-ee damjuulj value-aa avna. Utga 2 baij bolohgui uchir hamgiin suuld oruulsan utgiig avna.

dictionary.forEach((value, key) => console.log(`${key} ====> ${value}`));

// For of 
for(let el of dictionary) {
    console.log(el[1]);
}
//Otherwise you can destructure it
for(let[a, b] of dictionary) {
    console.log(`${a} key-iin utga n ${b}`);
}
console.log(dictionary.size);
console.log(dictionary.has("sun")); //true. Sun gedeg key bgaa gsn ug. 


let text = `Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative hybrid-tower defense-shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with traps and fortifications they can build; Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing; and Fortnite Creative, in which players are given complete freedom to create worlds and battle arenas. Save the World and Battle Royale were released in 2017 as early access titles, while Creative was released on December 6, 2018. While the Save the World and Creative versions have been successful for Epic Games, Fortnite Battle Royale in particular became an overwhelming success and a cultural phenomenon, drawing more than 125 million players in less than a year, earning hundreds of millions of dollars per month. Fortnite as a whole generated $9 billion in gross revenue up until December 2019.`;

console.log(text);

//1. Buh ugiig salgaj avaad array-d hiine.
let words = text.split(" ");

//2. Around the ugnii hooson zaig tseverlene.

//3. Ug buree map ruu hiine.
let myMap = new Map();
words.forEach(el => myMap.set(el, 1)); //toolj bga uchraas value deer 1 gdg utga ugsun.

//4. Map-iin hemeejg harna.
console.log(`Niit davhardaagui ugiin too bol: ${myMap.size}`);