// In JavaScript, call, apply, and bind are methods of the Function.prototype object, 
// used to control the this context within a function and pass arguments.


// call()
// Purpose: Invokes a function immediately with a specified this value and arguments provided individually.
// Syntax: function.call(thisArg, arg1, arg2, ...)

let name = {
  firstname: "krishan",
  lastname: "Namdev",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + " " + state
  );
};

// we have a call method which is invoke a function directly by passing a reference which points this varaible inside the method.
printFullName.call(name, "Dehradun", "Uttarakhand");

let name2 = {
  firstname: "Virat",
  lastname: "Kohli",
};

//function borrowoing

printFullName.call(name2, "Mumbai", "Maharasthra");

// apply()
// Purpose: Invokes a function immediately with a specified this value and arguments provided as an array (or an array-like object)
// Syntax: function.apply(thisArg, [argsArray])

// apply is same as the call method difference is only the it takes 2nd argument as a array list of the parameter
printFullName.apply(name2, ["Mumbai", "Maharasthra"]);


// bind()
// Purpose: Returns a new function with a specified this value and optionally, a sequence of arguments pre-filled. The original function is not executed immediately.
// Syntax: function.bind(thisArg, arg1, arg2, ...)

// bind does not directly invokes the method but gives you the copy of the exactly copies of the method which will be invoke later
let printMyName = printFullName.bind(name2, "Delhi", "Maharashtra");

// console.log(printMyName);
printFullName();


// another example of bind method

const person = { name: "Charlie" };
function greet(city, country) {
  console.log(`Hello, my name is ${this.name} and I live in ${city}, ${country}.`);
}
const boundGreet = greet.bind(person, "Paris");
boundGreet("France"); // Output: Hello, my name is Charlie and I live in Paris, France.
