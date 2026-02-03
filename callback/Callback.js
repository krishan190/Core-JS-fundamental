// what is Callback function in JavaScript?

/*A callback function is a function that is passed as an argument to another function and is executed after the completion of some operations.
This mechanism allows JavaScript to perform tasks like reading files, making HTTP requests, or waiting for user input without blocking the execution
 of the program. This helps ensure a smooth user experience. */


// why use?

/* JavaScript runs in a single-threaded environment, meaning it can only execute one command at a time. Callback functions help manage asynchronous 
operations, ensuring that the code continues to run smoothly without waiting for tasks to complete. 
This approach is crucial for maintaining a responsive and efficient program.*/


// Basic Structure of a Callback Function

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayGoodBye() {
    console.log("Goodbye!");
}

greet("alice", sayGoodBye)

/*In this code:

greet is a function that takes a name and a callback function as arguments.
After greeting the user, it calls the callback function.*/


// Here’s a more detailed example with a simulated asynchronous operation using setTimeout:

function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Alice" };
        callback(data);
    }, 2000); // Simulating a delay of 2 seconds
}

fetchData((data) => {
    console.log("Data received:", data);
});

/*In this example:

fetchData simulates fetching data after a 2-second delay.
The callback function logs the data once it's received.*/