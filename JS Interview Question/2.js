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
console.log(filterdArray);// [{ name: "kanha", rollNo: 22 }]

// Q5=>

//console.log([] === []);//false
console.log([] == []);

// why?
// In JavaScript, arrays are reference types. When you compare two arrays using the strict equality operator (===) or the loose equality 
// operator (==), it checks whether they reference the same object in memory, not whether their contents are the same. 
// Since [] creates a new array each time, [] === [] and [] == [] will both return false because they are different objects in memory.


// Q6=> What is DOM vs BOM?

/* DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree 
 of objects, allowing developers to manipulate the content and structure of web pages dynamically.*/

/* BOM (Browser Object Model) is a programming interface for web browsers. It provides access to browser-specific features and 
 functionalities, such as the window object, navigator object, and location object. BOM allows developers to interact with the 
 browser environment and perform tasks like handling events, managing cookies, and controlling the browser's behavior.  
 */


//  Q7=> What is the output of the following code?

let abc = 2;
let a = !--abc;
let b = !--abc;
console.log(a, b);  //false true

// why?
// Initially, abc is 2. The expression !--abc first decrements abc to 1 and then negates it, resulting in false.
// The second expression !--abc decrements abc to 0 and negates it, resulting in true. Therefore, the output is false true.


// Q8=> What is the output of the following code?

function sum(){
    console.log("Hello");
    return 2*2;
}
function square(){
    console.log("hi");
    return 4*4;
}
let c=(square(),sum());
console.log(c); 

// hello
// hi
// 16

// why?
/* The expression (sum(), square()) uses the comma operator, which evaluates both sum() and square() but returns the value of the last expression, which is square(). 
 Therefore, it first logs "Hello" from sum(), then logs "hi" from square(), and finally returns 16 from square(), which is assigned to c. 
 Hence, the output is "Hello", "hi", and 16. */


 