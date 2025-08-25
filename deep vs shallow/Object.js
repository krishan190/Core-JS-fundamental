// shallow copy in nested objects case will modify the parent object property value, if cloned object property value is changed.
// but deep copy will not modify the parent object property value.

// "Shallow copy tab use hota hai jab mujhe sirf ek level ke data ko duplicate karna ho – jaise user ki profile ko edit karte waqt, basic details nikal lena.
// Lekin agar data nested hai jaise shopping cart ya address info, toh mujhe deep copy karni padti hai taki original data corrupt na ho."

//original object

// 🔹 Ways to Copy Objects in JavaScript

// 1=> spread operator
// 2=> Object.assign()

const person = {
  name: "krishan",
  age: 20,
  address: {
    city: "Delhi",
    country: "India",
  },
};

// shallow copy using object.assign()

const shallowCopy = Object.assign({}, person);

shallowCopy.name = "Namdev";
shallowCopy.address.city = "Mumbai";

console.log(person.name);
console.log(shallowCopy.name)
console.log(person.address.city);//Mumbai
console.log(shallowCopy.address.city)//Mumbai

//Deep copy using JSON.parse() and JSON.stringify()

// 1=> structuredClone()
// 2=> JSON.parse(JSON.stringigy(obj))
// 3=> Lodash cloneDeep()

const deepCopy = JSON.parse(JSON.stringify(person));

deepCopy.name = "Hello";
deepCopy.address.city = "Rewa";


console.log(person.name);//Delhi
console.log(deepCopy.name);//Hello
console.log(person.address.city);//Delhi
console.log(deepCopy.address.city);//Rewa
