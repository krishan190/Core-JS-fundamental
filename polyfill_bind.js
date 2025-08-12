// polyfill is a short of browser fallback support your browser doesn't have bind function
// you have to do written your bind function

let name = {
  firtname: "Krishan",
  lastname: "Namdev",
};

let printName = function (hometown, state) {
  console.log(
    this.firtname + " " + this.lastname + ", " + hometown + " " + state
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
