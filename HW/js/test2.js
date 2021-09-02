//Day3
//Dialogue-oor hevleh
// alert("Hello World!\n\nHow's your day going, Jenn?");

var ageJenn = 13;
ageJenn++;
ageJenn += 10;
ageJenn -= 5;
ageJenn *= 2;

var yearOfBirth = prompt('What year were you born?');
var now = newDate().getFullYear(); //prebuilt object
var age = now - yearOfBirth;

if(yearOfBirth !== null)
{
/* Checking Condition 

if (Condition === true)
{
    Do this
}

else 
{
    Do that
} */

if(age > 18)
{
    console.log("You're old enough.");
}
else if( age >15)
{
    console.log("High school student.");
}
else if(age > 6)
{
    console.log("Elementary or middle school student.");
}
else
{
    console.log("You're too young.");
}
}

else{
    alert("Ta tursun onoo zuv oruulna uu?");
}
