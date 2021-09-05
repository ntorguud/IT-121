try {
    console.log('Program has started.');
    var x = prompt('1 - 100 hootrond too oruulna uu?');
    console.log('Tanii oruulsan too bol: ' + x);  
} catch(error) {
    if(error.message === 'prompt is not defined') {
        console.log('Sorry, ene codiig browser.n orchind ajilluulna. Node JS deer ajilluulahgui.');
    }
    else if(error.message === 'no network connection') {
        console.log('Check your network.');
    }
    else {
        console.log('Error is: ' + error);
    }
}
    
//Debugguigeer unshuulahiin tuld heregle: CTRL + F5
//Node JS ni JS-iig browser.s n gargasan, strong bolgoson.

//Extension Handling hiij, try hereglene.
