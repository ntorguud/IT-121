function SmartPhone(brand, model, yrMade, imageUrl) {
    this.brand = brand;
    this.model = model;
    this.yrMade = yrMade;
    this.imageUrl = imageUrl;

    this.getPhoneCard = function() {
        return `<div class="card"> 
            <div width="100px"> 
                <img src="${this.imageUrl}">
            </div>
            <div class="description">
                <p>Brand: ${this.brand} </p>
                <p>Model: ${this.model} </p>
                <p>Year made: ${this.yrMade} </p>
            </div>
        </div>`;
    };
}

var phone1 = new SmartPhone('Apple', 'iPhone12 Pro', 2020, "images/iphone.png");
var phone2 = new SmartPhone('Samsung', 'Galaxy S21', 2021, "images/S21.png");
var phone3 = new SmartPhone('LG', 'Stylo 6', 2021, "images/stylo6.png");

document.getElementById('productlist').innerHTML += phone1.getPhoneCard();
document.getElementById('productlist').innerHTML += phone2.getPhoneCard();
document.getElementById('productlist').innerHTML += phone3.getPhoneCard();

// var phones = [phone1,phone2,phone3];

// for(var i = 0; i<phones.length; i++) {
//     document.getElementById('productlist').innerHTML += phones[i].phonesAvailable3();
// }
