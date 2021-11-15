///Super class / Eh class
class Transaction {
    constructor(desc, value) {
        this.desc = desc;
        this.value = value;
    }

    info() {
        let typeText = this instanceof Income ? "Orlogo" : "Zarlaga";
        return `(${typeText}) ${this.value}$ ==> ${this.desc}`;
    }
}

//Sub class
class Income extends Transaction {
    constructor(desc, value) {
        super(desc, value);
    }
}

//Sub class
class Expense extends Transaction {
    constructor(desc, value, zaaval = false) {
        super(desc, -value);
        this.zaaval = zaaval; //zaaval hiih zarlaga uu ugui yu gedgiig shalgana.
    }
}

let fn = [];

fn.push(new Income("Salary", 2500000));
fn.push(new Expense("Food", 20000, true));
fn.push(new Expense("Cinema", 10000));
fn.push(new Expense("Gum", 2500));
fn.push(new Income("Lottery", 55500000));
fn.push(new Expense("Amusement Park", 20000));
fn.push(new Expense("Apartment", 600000, true));

fn.forEach(e => console.log(e.info()));

console.log(`Uldegdel n ${fn.reduce((budget, el) => budget + el.value, 0)}`);

//Zailshgui zarlaguudiig filterdey
let z = fn.filter(e => e.zaaval);  //if(zaaval === true) return e;  Arrow function 1 mur bh ued ugaasaa return hiideg.

// z.reduce(sum, el) => sum + el.value, 0;

///////////////////////////Tovchlood
console.log(fn.filter(el => el.zaaval).reduce((sum, el) => sum + el.value, 0));

console.log(fn.filter(el => el.zaaval === false).reduce((sum, el) => sum + el.value, 0));
