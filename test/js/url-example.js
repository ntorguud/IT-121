// literal notation
const Website = {
    'url': 'https://www.rover.com';
    this.printUrl = function () {
        console.log(this.url);
    }
}

//constructor function
function Website() {
    this.url = 'https://rover.com';
    this.printUrl = function () {
        console.log(this.url);
    }
}