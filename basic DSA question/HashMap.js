// 2. Map (ES6) → True HashMap

// 👉 Introduced in ES6, more powerful & closer to a real HashMap.


// Interview Angle

// If asked “Does JavaScript have HashMap?” → Answer:
// 👉 “Yes, we can implement HashMap using Object or the ES6 Map class. 
// Map is more flexible because it supports any type of keys and preserves insertion order.”

let map = new Map();

map.set("name", "krishan")
map.set(123, "Number key allowed")
map.set(true, "Boolean key allowed")

console.log(map.get("name"));
console.log(map.get(123));
console.log(map.get(true));


// Map allows any type of key (string, number, object, function, etc.).
// Maintains insertion order.
// Has methods: .set(), .get(), .has(), .delete(), .clear().

// Map vs object

let obj = { name: "Krishna", age: 25 };
console.log(obj["name"]); // Krishna


// 2 example

let map1 = new Map();

map1.set("name", "krishan");
map1.set({ role: "dev" }, "object as key");

console.log(map1.get("name"));
console.log(map1.get([...map1.keys()]));

// ⚡ Interview Answer (Short & Smart)

// 👉 “In JavaScript, both Object and Map can act like hashmaps. But Map is more powerful since it allows any
// data type as key, maintains insertion order, and has better performance for frequent insert/delete operations.
//  Objects are fine for simple static key-value pairs with string keys.”

