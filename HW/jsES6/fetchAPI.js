//axios  json = Javascript object notation
fetch("http://127.0.0.1:5500/HW/recipe.html").then(result => {
    result.headers.forEach(e => console.log(e)); //headers array dotroos buh zuiliig n hevellee.
    console.log(result);

    return result.text();
})
.then(r => {
    let json = JSON.parse(r);
    console.log(`Joriin zohiogch n ${json.author}`);
});

//same origin policy = zuvhun uuriin domainii medeelliig fetch hiij tatah bolomjtoi bolovch... 

function getWeather(id) {
    fetch(`https://api.allorigins.win/get?url=https://https://www.metaweather.com/api/location/ ${id} /`)
    .then(result => {
        result.headers.forEach(e => console.log(e)); //headers array dotroos buh zuiliig n hevellee.
        console.log(result);
    
        return result.json();
    })
    .then(r => {
        let data = JSON.parse(r.contents);
        let today = data.consolidated_weather[0];

        console.log(today.min_temp, today.max_temp);
    
        let json = JSON.parse(r);
        console.log(`Joriin zohiogch n ${json.author}`);
    });
}

getWeather(44418);
getWeather(2487956);
