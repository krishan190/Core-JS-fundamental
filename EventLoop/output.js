// Question :1

// const fs = require("fs");

// fs.readFile("abc.txt", () => {
//   console.log("Poll: file read complete");
// });

// setImmediate(() => console.log("Check: setImmediate"));

// Question : 2

// setTimeout(() => console.log("timeout"), 0);
// setImmediate(() => console.log("immediate"));

// Promise.resolve().then(() => console.log("promise"));
// process.nextTick(() => console.log("nextTick"));

// nextTick
// promise
// timeout
// immediate


const fs = require("fs");
const net = require("net");

console.log("Start");

// Timers
setTimeout(() => console.log("Timer Phase"), 0);

// Pending Callbacks (TCP error)
const server = net.createServer().listen(0, () => {
    const port = server.address().port;
    const client = net.connect(port);
    client.on("error", () => console.log("Pending Callback Phase"));
    server.close();
});

// Poll (I/O)
fs.readFile("abc.txt", () => console.log("Poll Phase"));

// Check
setImmediate(() => console.log("Check Phase"));

// Close
server.on("close", () => console.log("Close Callback Phase"));

// Microtasks
Promise.resolve().then(() => console.log("Promise Microtask"));
process.nextTick(() => console.log("nextTick Microtask"));

console.log("End");


