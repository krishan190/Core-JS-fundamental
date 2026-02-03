// function in javascript

// 1=> What is function declaration?
// 2=> What is function Expression?

const square1 = function (num) {
  return num * num;
};

console.log(square1(5));

// 3=> What are the First class function?

/* where a function are treated like a variable there function calls a first class function in this cases we pass function in
 another function as a argument and can be used and manipulated and return from those function.

 means that everything that varible do function can also do*/

function square(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("square is " + fn(5));
}

displaySquare(square);

// 4=> What is IIFE - O/P based question

(function (x) {
  return (function (y) {
    console.log(x); //1
  })(2);
})(1);

// x is search inside the inner scope of y function if its not find then it would be go to the parent scope
// it happens because of closure

// the ability of a function to access a variables and functions that are lexically out of its scope are called closure.
// closures are created whenever functions are created because of that function has referece to its outer scope

// 5=> Function scope

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// Reason==>(In case of var) here concept is applicable that scope with var and js execution flow

// The loop finishes, and i becomes 5. Since var has a function scope (or global scope in this case),
// there is only one variable i that is shared across all iterations. The loop completes its execution
// very quickly, and by the time it's done, the value of i has been incremented to its final value of 5.
