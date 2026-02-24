// promise syntax
/*

Promise is an object representing eventual completion or failure of an asynchronous task;

Promises are heavily used while working with asynchronous operations e.g. calling APIs to fetch data. Promises work as a solution for the 
infamous Callback Hell problem. Here is an example of a simple Promise.

*/

let p1 = new Promise((resolve, reject) => resolve("This promise Resolves"));
let p2 = new Promise((resolve, reject) => reject("This promise Rejects"));

p1.then((data) => console.log(data));
p2.then((data) => console.log(data));


// promise pollyfill

function customPollyfill(executor) {
    let onResolve, onReject;

    // then function for handling successfull promise execution
    this.then = function (resolveCallback) {
        // storing resolve callback function
        onResolve = resolveCallback;

        // Returning this is enable chaining of then
        return this;
    }

    // catch function for handling errors in promise execution
    this.catch = function (rejectCallback) {
        // storing reject callback function
        onReject = rejectCallback;

        // Returning this is enable chaining of catch
        return this;
    }

    // Resolver function
    function resolver(data) {
        // calling the resolve function with data
        onResolve(data);
    }

    // Reject function
    function rejecter(error) {
        // calling the reject function with error
        onReject(error);
    }

    executor(resolver, rejecter);
}

let p3 = new customPromise((resolve, reject) => setTimeout(() => resolve("Resolve successfully"), 2000));

p3.then((data) => console.log(data));