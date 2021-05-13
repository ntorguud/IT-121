function TV(brand, model, yrMade) {
    this.brand = brand;
    this.model = model;
    this.yrMade = yrMade;
    this.tvAvailable = function() {
        return '<p>Brand: ' + this.brand + ' Model: ' + this.model 
    +' Year made: ' + this.yrMade + '</p>'
    };
}

var tv1 = new TV('Samsung', 'XX1', 2018);
var tv2 = new TV('Panasonic', 'XX2', 2019);

document.getElementById('tv1').innerHTML = tv1.tvAvailable();
document.getElementById('tv2').innerHTML = tv2.tvAvailable();
