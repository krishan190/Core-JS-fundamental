// 🚀 Priority Order (Highest → Lowest)

//1. Synchronous Code (Call Stack)
//2. process.nextTick() Queue
//3. Microtask Queue (Promises, queueMicrotask)
//4. Timers Phase (setTimeout, setInterval)
//5. I/O Callbacks Phase
//6. Idle / Prepare (internal)
//7. Poll Phase (waiting for I/O)
//8. Check Phase (setImmediate)
//9. Close Callbacks Phase


// ⚡ Node.js Event Loop Priority Order

// 1. Current Call Stack (sync code)
// Executes first, before event loop even starts.

console.log("Synchronous");

// 👉 Prints immediately, before anything async.


// 2. process.nextTick() Queue

// Runs right after current function finishes, before the event loop continues.
// Higher priority than Promises.

console.log("A");
process.nextTick(() => console.log("nextTick"));
console.log("B");

// Output:
// A
// B
// nextTick


// 3. Microtask Queue (Promises / queueMicrotask)

// Runs after nextTick, before any macrotasks (timers, I/O, etc).

Promise.resolve().then(() => console.log("Promise"));
queueMicrotask(() => console.log("Microtask"));

//4. Timers Phase (setTimeout, setInterval)

// Executes callbacks scheduled with timers after the minimum delay.

setTimeout(() => console.log("Timeout"), 0);
setInterval(() => console.log("Interval"), 1000);

//5. I/O Callbacks Phase

// Executes callbacks from I/O operations (like sockets, fs.readFile, DNS, etc).

//6. Idle / Prepare Phase (internal use)

// Internal only, no direct APIs for devs.

// 7. Poll Phase

// Handles new I/O events; waits for incoming connections, file changes, etc.
// If nothing pending, can block here waiting for callbacks.

// Not directly controllable, but imagine waiting for incoming request in a server.

// 8. Check Phase (setImmediate)
// Executes callbacks registered with setImmediate.

setImmediate(() => console.log("Immediate"));


// 9. Close Callbacks Phase

// Executes callbacks for closed connections/resources.

const net = require("net");

const server = net.createServer(() => { }).listen(8080);
server.close(() => console.log("Close Callback"));
