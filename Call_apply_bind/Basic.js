// Call, Apply & bind 

// It is built in method on function which can be used to determine the value of 'this' inside that function

// used to control the this context within a function and pass arguments.

// It is mainly used for

// 1=>Explicitly set the value of this
// 2=>Reuse functions withe different objects

// call()

// Purpose: We can dynamically set the value of 'this' inside the function by passing the object as the first argument
// and other arguments are passed individually.
// Syntax: function.call(thisArg, arg1, arg2, ...)

let john = { name: "JOHN DOE" };
let James = { name: "JAMES DOE" };

function PersonInfo(country, age) {
    console.log(`My name is ${this.name}. I am from ${country} and I am ${age} years old.`);
}

PersonInfo.call(john, "USA", 30); //My name is JOHN DOE. I am from USA and I am 30 years old.
PersonInfo.call(James, "UK", 25); //My name is JAMES DOE. I am from UK and I am 25 years old.


// apply()

// Purpose: Similar to call(), but arguments are passed as an array (or an array-like object)
// Syntax: function.apply(thisArg, [argsArray])

PersonInfo.apply(john, ["USA", 30]); //My name is JOHN DOE. I am from USA and I am 30 years old.
PersonInfo.apply(James, ["UK", 25]); //My name is JAMES DOE. I am from UK and I am 25 years old.


// bind()

// Purpose: The bind method do not run immeadiately and it returns a new function . we can run the returned function at any
// point of time later in the execution.

// Syntax: function.bind(thisArg, arg1, arg2, ...)

let johnInfo = PersonInfo.bind(john, "USA", 30);
let jamesInfo = PersonInfo.bind(James, "UK", 25);

johnInfo(); //My name is JOHN DOE. I am from USA and I am 30 years old.
jamesInfo(); //My name is JAMES DOE. I am from UK and I am 25 years old.

// use cases of call, apply and bind

// set the value of this explicitly
// Reuse functions with different objects

// permannently attch a this value to function (we can not change the value of 'this' that is returned by bind method)