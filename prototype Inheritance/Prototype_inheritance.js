// itr is just an object which is attached to each and every method,object or an array, 
// function object is attached to it and that object has this properties  which you can access directly by using a dot operator.

// By Piyush Garg

// this is example for understanding the concept of prototype

// p1={
//     fname:"piyush",
//     lname:"Garg",
//     __proto__:{}
// }

// p2={
//     __proto__:p1
// }

//here if i want to try p2.fname it will first go into the p2 object here not present any fname then it will go into the
// proto that will point to the p1 object so it will print piyush 


const p1 = {
    fname: "Akshay",
    lname: "Saini",
    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
}

// const p2 = Object.create(p1);
// above code is same as this below code
const p2 = {
    __proto__: p1
}

console.log("p1 is", p1.fname);
p2.__proto__.fname = "Hack";

console.log("p1 after this", p1.fname);





// by Akshay saini

let arr = ["Akshay", "krishan"];

let object = {
    name: "krishan",
    city: "Mumbai",
    getIntro: function () {
        console.log(this.name + " from " + this.city);

    }
}

let object2 = {
    name: "aditya"
}

// never do this
object2.__proto__ = object;
// object2 inheriting properties of object

// In browser
// object2.name //"aditya"
// object2.city // "Mumbai"


