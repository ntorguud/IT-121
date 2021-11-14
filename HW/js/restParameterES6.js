//ES5
function printAge() {
    console.log(arguments); //arguments n object, not array. Switch to array
    var arr = Array.prototype.slice.call(arguments);

    console.log(arr);
    arr.forEach(function(e) {
        console.log(e + " ond tursun hunii nas: " + (2020 - e));
    });
}
printAge("eregtei", 1990, 2005, 1996, 1970, 2012, 2003, 1945);


//ES6
function printAge6(gender, ...years) {
    // zadartsan bgaa onuud 1 arrayd orj irne. ehnii eregtei gesen n zuvhun gender luu orood uldsen buh ym n years ruu orno.
    years.forEach(el => console.log(`${el} ond tursun ${gender} hunii nas: ${(2020 - el)}`));
}
