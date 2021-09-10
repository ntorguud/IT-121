function Materi(price) {
    this.price = price;
    this.haragdah = function() {
        console.log(price + ' unetei materi bna.');
    }
}

var m1 = new Materi(100000);
m1.haragdah();