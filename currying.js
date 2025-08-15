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
