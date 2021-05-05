// need variables to store average, number of input scores, score total
var inputTotal = 0, inputCount = 0, average, entry;

// need prompt to allow user to enter scores

// while(entry != 999) {
//     inputTotal += entry;
//     inputCount ++; /* inputCount +=1; */

do{
    entry = parseInt(prompt("Enter test score\nOr enter 999 to end entries"));
    inputTotal += entry;
    inputCount ++;
    average = ((inputTotal - 999) / (inputCount -1));
}while(entry != 999);

// need to use an alert to display average score

alert('Average score is ' + average);