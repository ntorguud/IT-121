//Day3
//Dialogue-oor hevleh
// alert("Hello World!\n\nHow's your day going, Jenn?");

var ageJenn = 13;
ageJenn++;
ageJenn += 10;
ageJenn -= 5;
ageJenn *= 2;

var yearOfBirth = prompt('What year were you born?');

if(yearOfBirth !== null)
{
    var now = new  Date().getFullYear(); //prebuilt object
    var age = now - yearOfBirth;

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
    alert("You're old enough.");
}
else if( age > 15)
{
    alert("High school student.");
}
else if(age > 6)
{
    alert("Elementary or middle school student.");
}
else
{
    alert("You're too young.");
}
}

else
{
    alert("Ta tursun onoo zuv oruulna uu?");
}
