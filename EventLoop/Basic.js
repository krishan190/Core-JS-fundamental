// ⚡ process.nextTick() in Node.js

// process.nextTick() is a special microtask queue in Node.js.
// It runs before the event loop continues to the next phase, i.e., before Promises and other microtasks.


// console.log("Start");


// Promise.resolve().then(() => console.log("Promise"));//runs before Promises!
// setTimeout(() => console.log("Timeout"), 0);
// console.log("End");
// process.nextTick(() => console.log("nextTick"));


console.log("Start");

process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("Promise"));
setTimeout(() => console.log("Timeout"), 0);
setImmediate(() => console.log("Immediate"));

console.log("End");