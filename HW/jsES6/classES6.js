//Baiguulagch function ES5
function Expense(id, desc, value) {
    this.id = id;
    this.desc = desc;
    this.value = value;
}
Expense.prototype.info = function() {
    console.log(this.id + ") " + this.value + "tug " + this.desc);
}
var e1 = new Expense(1, "Food", 26000);
var e2 = new Expense(2, "Gas", 35000);
e1.info();
e2.info();



//ES6
class Income {
    constructor(id, desc, value) {
        this.id = id;
        this.desc = desc;
        this.value = value;
    }

    info() {
        console.log(`${this.id} ) ${this.value} tug ${this.desc} orlogo`);
    }

    //Static function. This is a global function
    static getDollarRate() {
        console.log(`Hansh: ${2720}`);
    }
}

let i1 = new Income(6, "Salary", 2500000);
i1.info();

Income.getDollarRate();
