//First class function
function interviewQ(job) {
    if(job === 'programmer') {
        return function(name) {
            console.log(name + ', do you know what PROTOTYPE is?');
        }
    } else if(job === 'teacher') {
        return function(name) {
            console.log(name + ', what clasess can you teach?');
        }
    } else if(job === 'driver') {
        return function(name) {
            console.log(name + ', can you drive a bicycle?');
        }
    }
}

var programmerQ = interviewQ('programmer'); //this is a function
var teacherQ = interviewQ('teacher');
var driverQ = interviewQ('driver');

programmerQ('Bold');
teacherQ('Sarah');
driverQ('Barry');

interviewQ('teacher')('Kane')('')()[''](); //Kane, what clasess can you teach? -- gedeg hariu hevlene gsn ug....