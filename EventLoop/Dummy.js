const fs = require("fs");

fs.readFile("abc.txt", () => {
    console.log("File read");

    setTimeout(() => console.log("Timeout inside I/O"), 0);
    setImmediate(() => console.log("Immediate inside I/O"));
});
