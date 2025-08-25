const fs = require("fs");
console.log("Start");

process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("Promise"));

setImmediate(() => console.log("Immediate"));
setTimeout(() => console.log("Timeout"), 0);

fs.readFile("abc.txt", () => {
    console.log("I/O Callback");
    setImmediate(() => console.log("Immediate inside I/O"));
    setTimeout(() => console.log("Timeout inside I/O"), 0);
});

console.log("End");
