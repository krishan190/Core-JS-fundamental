“The Event Loop is how JavaScript handles asynchronous operations despite being single-threaded. It checks the Call Stack and, when it’s empty, moves callbacks from the task/microtask queues into the stack for execution. For example, with setTimeout and Promise, promises are resolved first (microtasks), then timeouts (macrotasks). It’s like a waiter in a restaurant who ensures the main thread isn’t blocked, handling async tasks in the background and serving them when ready.”


<!-- Real world async task in Flipkart -->

“In real-world apps like Flipkart, asynchronous tasks are everywhere. For example, when fetching product data or adding items to the cart, we use async APIs (fetch) so that the UI doesn’t freeze. Lazy loading images uses async events to improve performance. During checkout, payment processing is async so the page remains interactive while waiting for bank servers. Flipkart also uses WebSockets for async real-time updates like order tracking. Without async tasks, the entire site would block and users would get a poor experience.”

<!-- How It Works: -->

1=> Call Stack

Where functions are executed one at a time (synchronous code).
If the stack is busy, no other code can run.

2=> Web APIs (in Browser) / C++ APIs (in Node.js)

Handle async tasks like timers, HTTP requests, event listeners, etc.

3=> Task Queues

Macro-task queue: holds callbacks from setTimeout, setInterval, DOM events, I/O, etc.
Micro-task queue: holds jobs like Promise callbacks, process.nextTick (Node.js).

4=> Event Loop

Keeps checking: “Is the call stack empty?”
        If yes → it pushes tasks from queues into the stack.

<!-- Microtasks are always executed before macrotasks. -->

🔹 2 Queues hote hain:

1==> Microtask Queue → Highest priority
2=> Macrotask Queue → Lower priority


1. Microtask Queue me kya aata hai?

process.nextTick() (Node.js special, runs before promises)
Promise.then / catch / finally
queueMicrotask()

👉 Ye hamesha har macrotask ke baad turant clear hota hai.

2. Macrotask Queue me kya aata hai?

Node.js ke 6 event loop phases basically macrotask queues hi hain:

Timers Phase → setTimeout, setInterval
Pending Callbacks Phase → system callbacks (TCP, DNS errors)
Poll Phase → I/O callbacks (e.g., fs.readFile)
Check Phase → setImmediate
Close Callbacks Phase → socket/server close handlers

“Execution priority in Node.js is: sync code → process.nextTick() → microtasks (Promises) → timers → I/O callbacks → poll → setImmediate → close callbacks.
But the tricky part is that context matters: inside an I/O callback, setImmediate executes before setTimeout, while at top-level, setTimeout usually comes first.”