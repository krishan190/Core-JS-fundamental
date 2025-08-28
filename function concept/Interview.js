// 5=> Function scope

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}

// Reason==>(In case of var) here concept is applicable that scope with var and js execution flow & Event loop.

// 1==> The loop finishes, and i becomes 5.==> Since var has a function scope (or global scope in this case),
// there is only one variable i that is shared across all iterations. The loop completes its execution
// very quickly, and by the time it's done, the value of i has been incremented to its final value of 5.

// 2==> The event loop takes over. setTimeout is an asynchronous function. It doesn't pause the program; instead,
//  it hands off the provided callback function to a Web API, which waits for the specified delay. Once the delay has
//   passed, the callback function is moved to a queue called the callback queue or task queue. The event loop constantly
//  checks if the main call stack is empty. If it is, it takes the first function from the callback queue and pushes it
//   onto the call stack for execution.


// 3==> Callbacks execute one by one.==>
// At this point, all five setTimeout callbacks are in the queue (or will be shortly). When each callback is executed,
// it references the current value of i in the shared scope. Since the loop has already finished, the value of i is 5.

// After 0 seconds, the first callback runs and prints 5.

// After 1 second, the second callback runs and prints 5.

// After 2 seconds, the third callback runs and prints 5.

// This continues until the last callback runs and prints 5.

// Key Concepts
// Asynchronous Nature of setTimeout: setTimeout is not a synchronous function. It does not wait for the timer to complete.
//  It schedules a task and allows the rest of the code (in this case, the for loop) to continue executing.

// Scope of var: The var keyword has function-level scope, not block-level scope. This means the variable i is not created
// anew for each loop iteration. There is a single, shared i variable whose value is continually updated. By the time the a
// synchronous setTimeout callbacks finally execute, i has already reached its final value of 5. 

// If let was used instead of var

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000)
}

// Step 1: Global Execution Context Creation
// GEC is created.
// In memory, only setTimeout reference is there (provided by environment).
// i is declared inside the for loop → block scoped, not in global memory.

// 0 1 2 3 4

// Step 2: Execution Phase
// How the for loop with let works
// When JavaScript encounters for (let i = 0; i < 5; i++), the engine creates a new lexical environment for every iteration of the loop.
// That means:
// Each iteration gets its own fresh binding of i.
// Closures capture that individual i instead of sharing one.


// key difference between let and var in this case

// Feature                               var                                               let

// Scope                    function scoped(one variable)                            Block scoped(new per iteration)
// closure behaviour        All callbacks share one i                                Each callbacks gets its own i
// Output                   5,5,5,5,5                                                0,1,2,3,4