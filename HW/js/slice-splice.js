//Array slice and splice. For example: used for pushing items to favorites. 
//The latest frameworks delete elements from web when it's deleted from data.

var m = [
    'Jan', 
    'Feb', 
    'Mar', 
    'Apr', 
    'May', 
    'Jun', 
    'Jul', 
    'Aug', 
    'Sep', 
    'Oct', 
    'Nov', 
    'Dec'
];

var k = m.splice(1, 10); //1-r index-s hoish 10 elementiig ustgana.
var l = m.splice(3, 3); // 3-r index-s hoish 3 elementiig ustgana.

var x = m.slice(1, 3); // 1-r index-s ehleed 3-r index hurtel copy-doj avna. m arrayg evdehgui.
alert(x);

alert(m);

//Array can be started from empty
var z = [];
z.push('Jan');
z.push('Feb');
z.push('Mar');

var y =[1, true, 'hello', {name: Jenny}, null]; // ===
var y1 = new Array('h1', 'hello', false, 234);

var course = {
    name: 'JS',
    price: 199000,
    lessons: [
        {
            name: 'Энэ сургалтаар бид юу сурч, эзэмших вэ?',
            length: '09:02',
            tags: ['Intro', 'History', 'Plan']
        },
        {
            name: 'Өгөгдлийн сангийн үндэс - SQL хэл гэж юу вэ?',
            length: '08:10',
            tags: ['SQL', 'About', 'Application']
        },
        {
            name: 'Нэгдүгээр бүлэг: Өгөгдлийн сан буюу DataBase -ийн бүтэц, ажиллах зарчим',
            length: '07:31',
            tags: ['Structure', 'Procedure']
        },
        {
            name: 'SQL хэлний давуу тал, сул тал',
            length: '07:43',
            tags: ['Advantages', 'Disadvantages']
        }
    ]
}

alert(course.name + ' surgaltiin une ' + course.price + ' tug bna.\nHicheel #1 ' + course.lessons[0].name + ' nertei videonii urt ni ' + course.lessons[0].length + ': ' + course.lessons[0].tags[0] + '\nHicheel #2 ' + course.lessons[1].name + ' nertei videonii urt ni ' + course.lessons[1].length + ': ' + course.lessons[1].tags[0] + '\nHicheel #3 ' + course.lessons[2].name + ' nertei videonii urt ni ' + course.lessons[2].length + ': ' + course.lessons[2].tags[0] + '\nHicheel #4 ' + course.lessons[3] + ' nertei videonii urt ni ' + course.lessons[3].length + ': ' + course.lessons[3].tags[0]);