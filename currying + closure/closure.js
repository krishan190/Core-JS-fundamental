function outer() {
    let count = 0;

    function inner() {
        count++;
        return count;
    }

    return inner;
}

const fn = outer();

console.log(fn());
console.log(fn());
console.log(fn());


// concept

// What’s happening?

// When you call outer(), it creates a local variable counter = 0.

// outer returns the function inner.

// Normally, after outer finishes, its variables (counter) should be gone from memory.

// But because inner uses counter, JavaScript keeps counter alive in a closure.

// Each time you call fn(), it still has access to the same counter — it doesn’t reset.

function sum(initial) {
    console.log("initial", initial)
    let total = initial;

    return function next(value) {
        if (value === undefined) {
            return total;
        }
        total += value;
        return next;
    };
}
sum(1)(2)(5)();
