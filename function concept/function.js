// 🚀 Quick Interview Answer (Summary):

// 👉 "A function declaration is hoisted and can be called before it’s defined.
// A function expression is assigned to a variable and is not hoisted.
// An arrow function has concise syntax and does not have its own this; it inherits from the outer scope."

// ✅ 1. Function Declaration

// Defined with the function keyword.

// Hoisted → can be called before it’s defined.

// Has its own this (depends on how the function is called).

// Good for reusable named functions

// Function Declaration
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // ✅ Works

//even we add function top of the code

// ✅ 2. Function Expression

// Assigned to a variable (can be named or anonymous).
// Not hoisted → cannot be called before it’s defined.
// Has its own this (like normal functions).
// Often used as callbacks or when passing functions as values.

// Function Expression
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(3, 4)); // 12

// ❌ Cannot call before definition → ReferenceError

// ✅ 3. Arrow Function

// Shorter syntax, introduced in ES6.
// Does not have its own this → it uses lexical this (i.e., takes this from the outer scope).
// Cannot be used as constructors (no new).
// Good for small inline functions, callbacks, array methods.

// Arrow Function
const divide = (a, b) => a / b;

console.log(divide(10, 2)); // 5


// arrow vs normal function

1