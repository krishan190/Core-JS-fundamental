// The spread operator is used to expand an iterable (like an array or a string) or an object into its individual elements or properties. 
// Expanding arrays into function arguments. 

// How it works:

// The spread operator (...) expands array elements.

// When used inside brackets [...], it creates a new array with the same elements.

// Hence, a shallow copy is created — new reference in memory.

// String to Array

const str = "krishan"
const chars = [...str];

// merged array or combining arrays or object
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];


// cloned array
const arr3 = [1, 2, 3, 4, 5];
const arr4 = [...arr3];

arr4.push(10);
console.log(arr3);
console.log(arr4);

const arr5 = [[1, 2], [3, 4]];
const arr6 = [...arr5]; // shallow clone

arr6[0][0] = 99; // change nested array inside arr6

console.log(arr6); // [[99, 2], [3, 4]]
console.log(arr5); // [[99, 2], [3, 4]] ❌ changed too


// REST OPERATOR

// The rest operator is used to collect multiple elements and condense them into a single array.
// It is primarily used in function parameters and array/object destructuring. Collecting function arguments
