function SmartPhone(brand, model, yrMade) {
    this.brand = brand;
    this.model = model;
    this.yrMade = yrMade;
    this.phonesAvailable = function() {
        return '<p>Brand: ' + this.brand + ' Model: ' + this.model 
    +' Year made: ' + this.yrMade + '</p>'
    };
}

var phone1 = new SmartPhone('Apple', 'iPhone12 Pro', 2020);
var phone2 = new SmartPhone('Samsung', 'Galaxy S21', 2021);
var phone3 = new SmartPhone('LG', 'Stylo 6', 2021);

document.getElementById('phone1').innerHTML = phone1.phonesAvailable();
document.getElementById('phone2').innerHTML = phone2.phonesAvailable();
document.getElementById('phone3').innerHTML = phone3.phonesAvailable();

