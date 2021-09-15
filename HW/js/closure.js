//Scope chaining buyu function-iig function dotor bichsen ued ajillana.

//Execution Stack-iin ued neg function ajillaj duusaad, dotorh variables, objects .. contents n ustdag bol closure ene durmiig zurchdug. 

//Set time out
// setTimeout(function() {
//     console.log("Hiii?");
// }, 3000);  //3000millisecond = 3s. 3sec-iin daraa garna.

function showPost(content) {
    var editedContent = 'New news : ' + content + 'n\n\If you want newsletter, welcome to 1234.mn';

    console.log(editedContent);
    return function() { //This function is inside the editedContent function
        var email = prompt(editedContent + 'n\n\'If you enter your email address, we will send you the latest news.');

        document.write('Thank you! We received your email address. Your email is : ' + email);
    }
}

var news = '1 day left for the discount';

var askEmailFunction = showPost(news);

setTimeout(askEmailFunction, 5000); 

//Gadnah buh function-uud ajillaj duusaad ustsanii daraa hezee ch hamaagui uzuulj chadna. Closure Rule.