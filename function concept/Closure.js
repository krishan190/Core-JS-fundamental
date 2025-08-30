// closure is a function that references varibale in the outer scope from its inner scope.

// lets know how to lexical scoping works first

// lexical scope is means that a variable defined in outside the function can be accessible inside the another function
//  defined after a variable declaration but the opposite is not true.

//Closure are created everytime a function is created, at function creating time.



// example 1

function outer() {
    var name = "krishan Namdev";
    // inner scope 2
    function inner() {
        console.log("My name is " + name);
    }
    inner();
}

// outer();

// example 2

function makeFunc() {
    const name = "Closure";

    function displayName(num) {
        console.log(name, num);
    }
    return displayName;
}

// we have to call this function this way also
makeFunc()(5);

const myFunc = makeFunc();
myFunc();
