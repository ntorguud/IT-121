// Literally, function is an object. Dotorh function gadna bga function-daa handah bolomjtoi.
function sayHello() {
    var friend = 'Sarah'; //This is local variable.

    function howDoYouDo() {
        console.log('How do you do' + friend);
    }
}
//Function can compel(handah) to every data of the globalObject.

//Function dotorh function ruu function-ii gadna talaas handah bolomjgui.

//Function dotor zarlagdsan function ni gadaa ustaj alga bolno.

function greeting() {
    var friend = 'Sarah';
    console.log('Hello ' + friend);
    
    //scope chaining:

    function askingJob() {
        var job = 'Web Designer' + pi; //locally local var of function askingJob
        console.log(friend + ' how are you doing?');
        console.log('Are you interested in becoming ' + job + '?');

        function askingParents() {
            console.log('How are your parents? ' + friend);
            console.log(job + ' has a good salary!'); //No problem. It can take any variables.
            
            bye(); //No problem. It can take any variables.
        }
        askingParents();
    }
    askingJob();

    function bye() {
        console.log(friend + ', I will call you back.');
    }
}
greeting();

var pi = 3.14; // this is a global variable
