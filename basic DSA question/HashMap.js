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