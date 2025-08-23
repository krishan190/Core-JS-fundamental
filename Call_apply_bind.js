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

// apply is same as the call method difference is only the it takes 2nd argument as a array list of the parameter
printFullName.apply(name2, ["Mumbai", "Maharasthra"]);

// bind does not directly invokes the method but gives you the copy of the exactly copies of the method which will be invoke later
let printMyName = printFullName.bind(name2, "Delhi", "Maharashtra");

console.log(printMyName);
printFullName();
