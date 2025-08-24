// 🎯 Interview Quick Answer

// In JavaScript, primitives (like string, number, boolean, null, undefined, symbol, bigint) are immutable — once created, they cannot be changed, any modification creates a new value.
// Non-primitives (like objects, arrays, functions) are mutable — their contents can be modified in place through references.

// 🔹 Immutable Data Types

// Definition: Once created, their value cannot be changed (any modification creates a new copy).

// Examples:

// Primitive types:
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

// 🔹 Immutable Data Types

// Definition: Once created, their value cannot be changed (any modification creates a new copy).

// Examples:

// Primitive types:
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

let str = "hello";
str[0] = "H"; // ❌ Won’t change original string
console.log(str); // "hello"

let newStr = str + " world"; // ✅ Creates new string
console.log(newStr); // "hello world"

// 🔑 Here, strings are immutable. Even if you "modify" them, a new string is created.

// 🔹 Mutable Data Types

// Definition: Their contents can be changed in place without creating a new object.

// Examples:

// Non-primitives (objects):
// Object, Array, Function, Date, Map, Set, etc.

let arr = [1, 2, 3];
arr[0] = 100; // ✅ changes the same array
console.log(arr); // [100, 2, 3]

let obj = { name: "Krishna" };
obj.name = "Shyam"; // ✅ modifies in place
console.log(obj); // { name: "Shyam" }
