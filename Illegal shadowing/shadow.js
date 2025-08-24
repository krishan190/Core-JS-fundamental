// 🔹 What is Shadowing?

// 🎯 Interview Quick Answer

// Shadowing is when an inner variable has the same name as an outer variable.
// It becomes illegal shadowing if a let/const variable is shadowed by var in the same or inner scope, since var is function-scoped and breaks block scope rules.

// Shadowing means declaring a variable in a local scope (e.g., inside a block/function) with the same name as one in an outer scope.
// The inner variable shadows (hides) the outer variable within that block.

// Example (✅ legal shadowing):
let a = 10;

function test() {
  let a = 20; // shadows outer `a`
  console.log(a); // 20
}

test();
console.log(a); // 10

// Here it’s legal because both are declared with let (block scope).

// 🔴 Illegal Shadowing

// Illegal shadowing happens when you shadow a variable declared with let or const using var in the same or inner scope.
// This is because var is function-scoped, not block-scoped, and will leak into the outer scope — breaking block scope rules.

// Example (❌ illegal shadowing)

// let x = 10;

// {
//   var x = 20; // ❌ Illegal shadowing
// }

// 👉 This will throw SyntaxError: Identifier 'x' has already been declared.

// 🔑 Rule of Thumb
// Illegal: let/const in outer scope, and var in inner scope (because var breaks block scoping).
