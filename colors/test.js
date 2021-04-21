var colors = ['yellow', 'blue', 'green', 'mauve'];

var colors2 = new Array('yellow', 'blue', 'green', 'mauve');

// save the color yellow in the var named backpackColor
var backpackColor = colors2[0]; // value is yellow

// change the array color at index 0
//now array is ['purple', 'blue', 'green', 'mauve']
colors2[0] = 'purple';

//change backpackColor variable to match the array[0]
backpackColor = colors2[0];

var numColors = colors2.length;

document.getElementById('something').textContent = 'See our ' + backpackColor + 'backpacks.';

// console.log('See our ' + backpackColor + 'backpacks.');



