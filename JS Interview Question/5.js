// undeclare vs undefined variables

// few way to construct object

// Deep vs shallow conversion

//1️⃣ console.log(100 + '8' + 20)

// concept
// Why?

// + in JavaScript is both addition AND string concatenation

// If any operand is a string, JS converts everything to string and concatenates

100 + "8"; // '1008'   (number → string)
"1008" + 20; // '100820'

// // 2️⃣ console.log(100 - '8' - 20)

// ❓ Why?

// - ONLY works with numbers

// JS tries type coercion → converts string to number

100 - "8"; // 92   ('8' → 8)
92 - 20; // 72

console.log(100 + +"8" + 20);

// output= 128

//? why

// +'8' → 8   // unary plus converts string to number
