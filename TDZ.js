// 🔍 What is TDZ (Temporal Dead Zone) in JavaScript?

// Temporal Dead Zone (TDZ) is the time between:

//  When a variable is declared using let or const, and
//  When it is initialized (assigned a value).

//  During this period, accessing the variable will throw a ReferenceError.

// 🔸 Why TDZ Happens

//  This is JavaScript’s way of preventing the use of let and const variables before they are safely initialized,
//  unlike var which is hoisted and initialized with undefined.

// Example of TDZ

console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 10;

// Behind the scenes:

// a is hoisted to the top of the block.
// But it's not initialized until let a = 10; is executed.

// So accessing it before that point is in the TDZ.
