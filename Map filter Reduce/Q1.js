const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

// Get array of full name : ["Alok Raj", "Ashish Kumar", ...]

const fullNameArr = users.map((user) => {
  user.firstName + " " + user.lastName;
});

console.log(fullNameArr);

// Get the count/report of how many unique people with unique age are there
// like: {29 : 2, 23 : 1, 50 : 1}

const report = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }

  return acc; //to every time return update object
}, {});

console.log(report);
