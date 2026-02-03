// undeclare vs undefined variables

// Undefined means the variable is declared but not assigned a value.
// Undeclared means the variable was never declared and accessing it causes a ReferenceError.


// few way to construct object

// 1️⃣ Object Literal (Most Common)

const user = {
    name: "Krishna",
    age: 25,
    greet() {
        console.log("Hello");
    }
};

// 2️⃣ Using new Object() Constructor

const user1 = new Object();
user1.name = "Krishna";
user1.age = 25;


// 3️⃣ Constructor Function (Before ES6)


function User(name, age) {
    this.name = name;
    this.age = age;
}

const u1 = new User("Krishna", 25);


// 4️⃣ ES6 Class (Modern & Clean)

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello");
    }
}

const u2 = new User("Krishna", 25);

// 5️⃣ Object.create() (Prototype Control)

const proto = {
    greet() {
        console.log("Hello");
    }
};

const user3 = Object.create(proto);
user3.name = "Krishna";



// Deep vs shallow conversion

// A shallow copy copies only top - level properties and shares references for nested objects, whereas a deep copy creates completely 
// independent copies of all nested data.

//1️⃣ console.log(100 + '8' + 20)

// concept
// Why?

// + in JavaScript is both addition AND string concatenation

// If any operand is a string, JS converts everything to string and concatenates

100 + "8"; // '1008'   (number → string)
"1008" + 20; // '100820'

// // 2️⃣ console.log(100 - '8' - 20)

// ❓ Why?

// - ONLY works with numbers

// JS tries type coercion → converts string to number

100 - "8"; // 92   ('8' → 8)
92 - 20; // 72

console.log(100 + +"8" + 20);

// output= 128

//? why

// +'8' → 8   // unary plus converts string to number

// output question

let abc = 100;
if (function xyz() { }) {
    console.log(typeof xyz);//undefined
    abc = abc - typeof (xyz);
}
console.log(abc);//NaN

// why?

// In the if condition, the function xyz is defined but not called, so it evaluates to true.
// Inside the if block, typeof(xyz) returns 'undefined' because xyz is not accessible outside its own scope.
// When we do abc - typeof(xyz), it translates to 100 - 'undefined'.
// In JavaScript, subtracting a string that cannot be converted to a number results in NaN (Not a Number).
// Therefore, abc becomes NaN after the subtraction operation.
// Finally, console.log(abc) outputs NaN.


// slice vs splice

// In JavaScript, slice() and splice() are array methods with distinct purposes. `slice()` creates a new array containing selected elements 
// from the original, while `splice()` modifies the original array by adding, removing, or replacing elements.

slice()
// The slice() method in JavaScript extracts a section of an array and returns a new array containing the selected elements, without modifying the original array.

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const citrusFruits = fruits.slice(1, 4);
console.log(citrusFruits); // Output: ['Banana', 'Cherry', 'Date']
console.log(fruits); // Original array remains unchanged: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']

splice()
// The splice() method in JavaScript is used to change the contents of an array by removing or replacing existing elements and / or adding new elements in place, modifying the original array.

const vegetables = ['Carrot', 'Broccoli', 'Spinach', 'Potato'];
// Remove 1 element at index 2 and add 'Cabbage' and 'Lettuce'
vegetables.splice(2, 1, 'Cabbage', 'Lettuce');
console.log(vegetables); // Output: ['Carrot', 'Broccoli', 'Cabbage', 'Lettuce', 'Potato']
// Original array is modified


// output question

let obj = {
    xyz: "krishan",
    pqr: function () {
        console.log(this.xyz);
    }
}

const c = obj.pqr;
obj.pqr();
c();

// output

// krishan
// undefined

// why?

// In the first call, obj.pqr(), the method is invoked as a property of the obj object. Therefore, this inside pqr refers to obj,
// and this.xyz correctly accesses the xyz property, logging "krishan".

// In the second call, c(), the function is invoked without any object context. In this case, this inside pqr does not refer to obj.
// In non-strict mode, this defaults to the global object (window in browsers), which does not have an xyz property, resulting in
// undefined being logged. In strict mode, this would be undefined, leading to a TypeError if you tried to access this.xyz.

// 

let arr4 = ["krishan", "abc"];
let ans = arr4.includes('abc', -2);
console.log(ans);

// output: true
// why?

// The includes() method checks if an array contains a certain element, returning true or false as appropriate.

// The second parameter of includes() specifies the position in the array at which to begin the search.
// If this parameter is negative, it is treated as length + fromIndex where length is the length of the array.
// In this case, arr4 has a length of 2. So, -2 is treated as 2 + (-2) = 0.

// Therefore, the search for 'abc' starts from index 0, and since 'abc' is indeed in the array, the method returns true.
