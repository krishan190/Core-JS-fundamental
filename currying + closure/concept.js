// write a polyfills for the sum(1,3,4)(5)(6);
// concept of currying + closure

// Closures = functions that remember the variables from their outer scope even after that scope has finished execution
//  A closure is a function that remembers and accesses variables from its outer scope even after the outer function has finished executing

const sum = (...args) => {
    let total = args.reduce((acc, n) => acc + n, 0);

    function inner(...next) {
        if (next.length === 0) return total;
        total += next.reduce((acc, n) => acc + n, 0)
        return inner;
    }
    return inner;
}


console.log(sum(1, 2, 3)(4)(5));


// Here’s how:

// sum runs once and defines:

// A local variable total (initially 9).

// A function inner, which closes over total.

// Even after sum has finished executing, the function inner is returned and keeps a reference to total in memory.

// Every time we call inner(...), it modifies total in that closed-over scope:

// First call adds 4 → total = 13

// Second call adds 5 → total = 18

// When finally called with no args inner() returns that preserved total.

// So the closure is what allows inner to share and update the same total variable across multiple calls, instead of resetting it each time.
