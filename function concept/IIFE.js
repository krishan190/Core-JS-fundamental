// ✅ In short:
// IIFE = function that runs instantly after definition
// 👉 Mostly used for data privacy, one-time initialization, and avoiding global scope pollution.

// 🔹 Real-World Use Cases

// Creating private variables/functions (encapsulation)
// Avoiding variable conflicts in large projects
// Running setup/config code only once
// Polyfills & Libraries (many JS libraries like jQuery use IIFE internally)

// 🔹 What is IIFE?

// IIFE stands for Immediately Invoked Function Expression.
// It is a function in JavaScript that runs as soon as it is defined.

(function () {
  // code here
})();

// function() {} → is a function expression
// () after it → invokes (calls) the function immediately
// The whole thing is wrapped in () to tell JS: "This is an expression, not a normal function declaration."

// 🔹 Why & When to Use IIFE?

// ✅ 1. To Avoid Polluting the Global Scope

// In JavaScript, variables defined in global scope can easily clash.
// IIFE helps by creating a private scope.

(function () {
  let privateVar = "I am private";
  console.log(privateVar);
})();

console.log(privateVar); // ❌ Error: privateVar is not defined

// 👉 privateVar exists only inside the IIFE.
// This prevents conflicts with variables from other scripts.

// ✅ 2. For Initialization Code

// If you want some code to run only once when the script loads (like config, setup, or connecting to DB), use IIFE.

const app = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
})();

console.log(app.increment()); // 1
console.log(app.increment()); // 2
console.log(app.getCount()); // 2

// 👉 Here, count is private. Nobody can directly access or change it outside the IIFE.
