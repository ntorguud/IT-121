var value = Math.ceil((Math.random() * 200) + 1);

var today = new Date();

var stockPriceDiv = document.getElementById('stockPrice');

stockPriceDiv.innerHTML = 'I have earned around $' + value + ' from AMC stocks by ' + today