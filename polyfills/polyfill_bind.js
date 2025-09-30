// In JavaScript, call, apply, and bind are methods of the Function.prototype object, 
// used to control the this context within a function and pass arguments.

// Polyfill are a basically own implementation of an inbuilt funciton in Javascript?
// polyfill is a short of browser fallback support your browser doesn't have bind function
// you have to do written your bind function

let name = {
  firstname: "Krishan",
  lastname: "Namdev",
};

let printName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + ", " + hometown + " " + state
  );
};

let printMyName = printName.bind(name, "Mumbai");

printMyName("Maharashtra");

Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  // console.log("params value",params);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(name, "Mumbai");
printMyName2("Maharashtra");
