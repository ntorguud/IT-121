//Asynchrone - bugd zereg ajillana.
//Synchrone - neg n ajillaj duussanii daraa l nuguu n ajillana.
var first1 = function() {

};

function first2() {

}

//ES6 deer function bichihdee:
const first = () => {
    console.log(`1-r function: Sain bnuu?`);
    second();
    console.log(`1-r function: Bayartai.`);
}

const second = () => {
    setTimeOut(() => {
        console.log(`2-r function: Yu bna?`)}, 5000);
}