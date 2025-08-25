// ⚡ So your interview answer can be:

// “A higher-order function is a function that either takes another function as an argument or returns a function. 
// For example, map, filter, and reduce are higher-order functions in JavaScript. They allow us to write cleaner, reusable, and more abstract code.”

// 🔹 What is a Higher-Order Function (HOF) in JavaScript?

// A Higher-Order Function is a function that does at least one of the following:

// Takes another function as an argument (callback function)
// Returns another function

// 👉 Basically, functions that operate on other functions.

// ✅1. Takes a function as an argument

function calculate(a, b, operation) {
    return operation(a, b); //returns a new function
}

// passing different funcion

const add = (x, y) => (x + y);
const multiply = (x, y) => (x + y);

console.log(calculate(6, 4, add));
console.log(calculate(10, 5, multiply));

// ✅ Here calculate is a higher order function because it takes another function (add,multiply) as an argument.
// This makes the function reusable and flexible.

// 2 Returns a function

function greet(message) {
    return function (name) {
        return `${message}, ${name}`;
    }
}

const sayHello = greet("Hello");
console.log(sayHello("krishna"));//"Hello, krishna"

// here greet is a higher order function because it returns another function

// 🔹 Real-World Examples in JavaScript

// a) Array Methods (map, filter, reduce)
// b) Event Listener

// ✅ addEventListener is a higher-order function — it takes a callback function that executes when the event occurs.


