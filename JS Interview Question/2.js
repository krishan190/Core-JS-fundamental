// Q1=> what is template literals in js in easy way explain

// with the help of template literals we can insert variables and expressions inside a string without using concatenation. 
// It is denoted by backticks (`) instead of single or double quotes.

// Example:

const name = "Krishna";
const age = 25;

// Using template literals
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // Output: My name is Krishna and I am 25 years old.


// Q2=> impure vs pure function

// Pure Function: A pure function is a function that always produces the same output for the same input and has no side effects. 
// It does not modify any external state or variables.

function pureFunction(x) {
    return x * 2;
}

// Impure Function: An impure function is a function that may produce different outputs for the same input or has side effects. 
// It can modify external state or variables.

let count = 0;
function impureFunction() {
    count++;
    return count;
}


// Q3=> output of the following code

const arr = ['A', 'B', 'C', 'D', 'A', 'A'];
console.log(arr.indexOf('A', 1));//4

// why?

// The indexOf() method returns the index of the first occurrence of a specified value in an array, starting the search at a specified index.
// In this case, arr.indexOf('A', 1) starts searching for 'A' from index 1. The first occurrence of 'A' after index 1 is at index 4, so it returns 4.


console.log(arr.indexOf('A', -2));//4
console.log(arr.indexOf('A', -1));//5
console.log(arr.indexOf('A', -6));//0


// why?
// When the second parameter of indexOf() is negative, it is treated as an offset from the end of the array.

// Q4=>

const arr1 = [
    { name: "abc", rollNo: 20 },
    { name: "kanha", rollNo: 22 },
    { name: "Krishan", rollNo: 24 },
];
const filterdArray = arr1.filter((stud) => stud.rollNo === 22);
console.log(filterdArray);