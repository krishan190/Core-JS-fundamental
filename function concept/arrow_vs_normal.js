// Arrow functions vs Regular functions

// 1=> Syntax

function square(num) {
    return num * num;
}

const square = (num) => {
    return num * num
}


// 2=> Implicit "return keyword"

const square = (num) => num * num;


// 3=>Arguments

function fn() {
    console.log(arguments);
}
fn(1, 2, 3);  //[Arguments] { '0': 1, '1': 2, '2': 3 }

// in the arrow function case

const fnArr = () => {
    console.log(arguments);
}

fnArr();//ReferenceError: arguments is not defined

// 4=> "this" keyword

let user = {
    username: "RoadSide coder",
    rc1: () => {
        console.log("Subscribe to " + this.username);//arrow function doesn't have their own this it refer to the global
    },
    rc2() {
        console.log("Subscribe to " + this.username); //this refer to the user object
    }
}

user.rc1();//Subscribe to undefined
user.rc2();//Subscribe to RoadSide code