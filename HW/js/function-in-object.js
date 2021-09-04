//Function of the object
var c1 = {
    name: 'JS from the beginning to the end',
    lessonCount: 116,
    totalMin: 904,
    author: h1,
    price: 199000,
    discount: 26900,
    address: 'San Francisco, CA 94104',
    info: function() {
        alert(this.author.address.location + '-d amidardag ' + this.author.name + '-iin 2019 ond gargasan "' + this.name + '" surgalt ni ' + this.price + ' unetei bolovch yag odoogoor ' + this.discount + ' bolj hyamdarsan bna.');
    }
    computeHour: function() {
        return Math.round(this.totalMin/60);
    } 
    computeMin: function() {
        return this.totalMin % 60;
    }
}

var c2 = {
    name: 'HTML, CSS from the beginning to the end',
    lessonCount: 116,
    totalMin: 1217,
    author: h2,
    price: 146000,
    discount: 26900,
    info: function() {
        alert('\n\n' + this.author.address.location + '-d amidardag ' + this.author.name + '-iin 2019 ond gargasan "' + this.name + '" surgalt ni ' + this.price + ' unetei bolovch yag odoogoor ' + this.discount + ' bolj hyamdarsan bna.');
    }
    computeHour: function() {
        return Math.round(this.totalMin/60);
    } 
    computeMin: function() {
        return this.totalMin % 60;
    }
}.info();
// ==
//   c2.info();
console.log(c2.name + ' surgalt ni ' + c2.computeHour() + ' tsag ' + c2.computeMin() + ' min videotoi.');


console.log('Total time is ' + c1.computeHour() + c2.computeHour() + ' tsag, ' + (c1.computeMin() + c2.computeMin()) + ' min.');
