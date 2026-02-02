// 🧩 First — What Is a “Shallow Clone”?

// A shallow clone copies only the first layer of an array or object.
// If there are nested arrays or objects, JavaScript just copies their references (memory addresses), not their actual content.

// So the outer array is new, but its inner elements (objects or arrays) still point to the same memory.

const arr1 = [
  [1, 2],
  [3, 4],
];
const arr2 = [...arr1];

// So:

// arr1 and arr2 are different arrays (different outer references ✅)
// But their elements point to the same nested arrays (shared references ❌)

// ⚙️ Let’s prove this with code:

const arr3 = [
  [1, 2],
  [3, 4],
];
const arr4 = [...arr3]; // shallow clone

arr4[0][0] = 99; // change nested array inside arr4

console.log(arr4); // [[99, 2], [3, 4]]
console.log(arr3); // [[99, 2], [3, 4]] ❌ changed too

// Explanation:

// When we did arr4[0][0] = 99,
// we didn’t change the outer arr4,
// we changed the inner array that both arr3[0] and arr4[0] reference.

// So the same inner array ([1, 2]) is modified — that’s why both change.

// if you want a deep clone you can use JSON methods

const arr5 = [
  [1, 2],
  [3, 4],
];
const arr6 = JSON.parse(JSON.stringify(arr5)); // deep clone

arr6[0][0] = 99; // change nested array inside arr6

console.log(arr6); // [[99, 2], [3, 4]]
console.log(arr5); // [[1, 2], [3, 4]] ✅ original stays same
