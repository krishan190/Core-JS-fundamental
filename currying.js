// Currying is an advanced technique of working with functions. 
// It’s used not only in JavaScript but in other languages as well.

// In other words, when a function, instead of taking all arguments at one time, takes the first one and returns a new 
// function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.
// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c). 
// Currying doesn’t call a function. It just transforms it.


function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c
    }
  }
}

console.log(sum(1)(2)(3)) // 6

// 1 way => bind method

let multiply = function (x, y) {
  console.log(x * y);
};

// let multiplyByTwo = function (y) {
//   let x = 2;
//   console.log(x * y);
// }; //this below multiplyByTwo method exact same as this

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(6);

// 2 => by closure

let multiply1 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByFour = multiply1(4);
multiplyByFour(4);
