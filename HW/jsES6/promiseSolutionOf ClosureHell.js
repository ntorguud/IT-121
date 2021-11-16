
///PROMISE!!!!! Solution of Closure Hell
function get() {
    return fetch(`https://www.epicgames.com/fortnite/en-US/home`) //fetch, then, catch functions promise-iig butsaadag.
        .then(res => res.text()) //this is the web's HTML
        .catch(err => console.log("Error", err));
}



////
let p = new Promise((resolve, reject) => {
    console.log(`Promise ajillaj bna.`);

    //Zurag tanih

    //Amjilttai bolbol resolve functioniig duudna.
    resolve(); //=result

    //Asuudal uusvel refect functioniig duudna.
    reject(`Zurag het tom bna.`); //=reject
});

p.then(result => console.log(`Amjilttai ${result}`));
p.catch(error => console.log(`Asuudal garlaa ${error}`));



/////Tovchilvol
new Promise((resolve, reject) => {
    console.log(`Promise ajillaj bna.`);

    //Zurag tanih function hiilee gej bodoy

    //Amjilttai bolbol resolve functioniig duudna.
    resolve(); //=result

    //Asuudal uusvel refect functioniig duudna.
    reject(`Zurag het tom bna.`); //=reject
}).p.then(result => console.log(`Amjilttai ${result}`)).catch(error => console.log(`Asuudal garlaa ${error}`));



//Golduu belen library-s function duuddag. Ex: fetch, updateOne...

moveTo(50, 50)
    .then(() => moveTo(20, 100))
    .then(() => moveTo(100, 200))
    .then(() => moveTo(2, 10))




    ///////
    let imageRecognition = imagePath => {
        return new Promise((resolve, reject) => {
        console.log(`Promise ajillaj bna.`);
    
        //Zurag tanih
    
        //Amjilttai bolbol resolve functioniig duudna.
        resolve(); //=result
    
        //Asuudal uusvel refect functioniig duudna.
        reject(`Zurag het tom bna.`); //=reject
    });
    }
    
    imageRecognition(downloads/bg3.png)
        .then(result => console.log(`Amjilttai ${result}`))
        .catch(error => console.log(`Asuudal garlaa ${error}`));
    