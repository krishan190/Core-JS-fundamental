// spread operator The spread operator(…) is used to expand or spread elements from an iterable 
// (such as an array, string, or object) into individual elements.

// uses of spread operator 

// Copying an array
// Merging arrays
// passing multiple arguments to a function

// example of spread operator

const array = [1, 2, 3, 4, 5, 6];
console.log(...array);


// Copying an array

const originalArray = [9, 8, 7];
const copiedArray = [...originalArray];

console.log(copiedArray); //[9,8,7]


// Passing multiple arguments to a function

const numbers = [1, 2, 3, 4, 5, 6, 7];
sum(...numbers);
function sum(a, b, c, d, e, f) {
    console.log(a + b + c + d + e + f);
}

// Rest operator => it is used in function parameters to collect all remaining arguments into an array

display(1, 2, 3, 4, 5, 6);
function display(first, second, ...restArguments) {
    console.log(first);
    console.log(second);
    console.log(restArguments);

}


//we use also with reduce method

function addition(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);

}

console.log(addition(12, 10, 12));
