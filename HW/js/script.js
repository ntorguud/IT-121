var img = {
    file: 'c:/images/a123.jpg',
    content: 'cat',
    zuragTanih:function(color, size) {
        console.log('Ene zurag deer ' + color + ' ungutei ' + size +  this.content + ' baigaa.');
    }
};

img.zuragTanih('black', 'little');

var myImg = {
    file: 'c:/images/a124.jpg',
    content: 'dog'
}

//BIND, function carrying - default argument damjuulah
//function-ii copy-g uusgeed, this-iin orond bind geed data-g uurchluh bolomjtoi.

var mySuperZuragTanihFunction = img.zuragTanih.bind(myImg, 'yellow'); //method borrowing

mySuperZuragTanihFunction('huge');
mySuperZuragTanihFunction('tiny');
mySuperZuragTanihFunction('medium sized');
mySuperZuragTanihFunction('little');

//CALL - constructor function uusgehed hereglene.
//uur function-iig zeelehgui shuud duudna.
img.zuragTanih.call(myImg, 'grey', 'tiny'); //shine var uusgeh shaardlagagui


//APPLY
//what if there are 1000 arguments? You  should put these in array
var args = ['pink', 'huge'];
img.zuragTanih.apply(myImg, args);