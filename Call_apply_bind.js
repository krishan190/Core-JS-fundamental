let name = {
  firstname: "krishan",
  lastname: "Namdev",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + " " + state
  );
};

printFullName.call(name, "Dehradun", "Uttarakhand");

let name2 = {
  firstname: "Virat",
  lastname: "Kohli",
};

//function borrowoing

printFullName.call(name2, "Mumbai", "Maharasthra");

printFullName.apply(name2, ["Mumbai", "Maharasthra"]);

let printMyName = printFullName.bind(name2, "Delhi", "Maharashtra");

console.log(printMyName);
