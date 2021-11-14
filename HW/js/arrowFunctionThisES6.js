let human = {
    name: "Sarah",
    mendleh: function() {
        let that = this;
        console.log("Hello!");
        setTimeout(function() {
            console.log(`Namaig ${that.name} gedeg.`);
        }, 1000);
    }
}
human.mendleh();


//Better version with arrow function - this
let human1 = {
    name: "Bat",
    mendleh: function() {
        setTimeout(() =>
            console.log(`Namaig ${this.name} gedeg.`), 1000);
    },
    hello: function() {
        console.log(`Hello, ${this.name}`);
    }
}
human1.mendleh();
human1.hello();