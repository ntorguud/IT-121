var grade = prompt('Dungee oruulna uu?');

if(grade <= 100 && grade >= 0)
{
    if(grade > 95){
        alert("Ta A+ avsan bna.");
    }
    else if(grade <= 95 && grade > 89){
        alert("A- avsan bna.");
    }
    else if(grade <= 89 && grade > 84){
        alert("B+");
    }
    else if(grade <= 84 && grade > 79){
        alert("B-");
    }
    else if(grade <= 79 && grade > 74){
        alert("C+");
    }
    else if(grade <=74 && grade > 69){
        alert("C-");
    }
    else if(grade <=70 && grade > 64){
        alert("D+");
    }
    else if(grade <=64 && grade > 59){
        alert("D-");
    }
    else {
        alert("F");
    }
}
else if(grade === null) {
    alert("Ta dun oruulna uu?");
}
else {
    alert("Ta buruu dun oruulsan bna.");
}


// switch(true) {
//     case grade >= 95 : alert("A+"); break;
//     case grade <= 95 && grade > 89 : alert("A-"); break;
//     case grade <= 89 && grade > 84 : alert("B+"); break;
//     case grade <= 84 && grade > 79 : alert("B-"); break; 
//     case grade <= 79 && grade > 74 : alert("C+"); break; 
//     case grade <= 74 && grade > 69 : alert("C-"); break; 
//     case grade <= 69 && grade > 64 : alert("D+"); break;
//     case grade <= 64 && grade > 59 : alert("D-"); break; 
//     default : alert("F");
// }