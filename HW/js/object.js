//Object
//  {key/property: value};, function; other objects;
//  {Name: Amarbat};
//Primitive type has only one value

var h1 = {
    name: 'Jenny',
    job: 'programmer',
    hobby: 'volleyball',
    location: 'San Francisco'
}

var h2 = {
    name: 'Jack',
    job: 'designer',
    hobby: 'yoga'
}

console.log(h1.job + ' mergejiltei ' + h1.name + 'iin hobby ni '+ h1.hobby);
console.log(h2.job + ' mergejiltei ' + h2.name + '-iin hobby ni ' + h2.hobby);


var c1 = {
    name: 'JS from the beginning to the end',
    lessonCount: 116,
    totalMin: 904,
    author: h1,
    price: 199000,
    discount: 26900,
    address: 'San Francisco, CA 94104'
}

var c2 = {
    name: 'HTML, CSS from the beginning to the end',
    lessonCount: 116,
    totalMin: 904,
    author: h2,
    price: 199000,
    discount: 26900,
    address: 'Seattle, WA 98122'
}

console.log(c2.author.address.location + '-d amidardag ' + c2.author.name + '-iin 2019 ond gargasan "' + c2.name + '" surgalt ni ' + c2.price + ' unetei bolovch yag odoogoor ' + c2.discount + ' bolj hyamdarsan bna.');

/* console.log(c2['author']['address']['city']); == 
console.log(c2.author.address.city); */

var aaa = 'author';
var bbb = 'hobby';
console.log(c2[aaa][bbb]);