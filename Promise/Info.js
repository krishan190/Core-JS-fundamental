/*
// Read from Here 

https://dev.to/bhataasim/types-of-promises-in-javascript-4n19 


What are Promises?
Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, 
or never. Promises have three states: pending, fulfilled, and rejected.


Types of Promises:

Pending: The initial state of a promise. It represents that the operation is still in progress and has not been completed yet.

Fulfilled: The state of a promise when the operation has been completed successfully. The promise has a value, and it is available 
           to be used.

Rejected: The state of a promise when the operation has failed. The promise has a reason for the failure, and it can be handled using 
          the catch method.


Why Promises are Important?

Promises help in writing cleaner and more readable asynchronous code.
They provide a way to handle asynchronous operations in a more structured manner.
Promises can be chained together to perform multiple asynchronous operations sequentially.
Whether fetching data, handling multiple tasks or racing for the fast result, Promises are essential in Modern JavaScript.


RECAP

Simple Promise: For single async operation like fetching data from an API.
Promise.all: For multiple async operations that are not dependent on each other.
Promise.allSettled: When you want to know all results, even failures.
Promise.race: When speed matters more than waiting for all results.
Promise.any: When you need the first successful result, regardless of the rest of the promises.

*/