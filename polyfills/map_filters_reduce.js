// pollyfills are the basically own implementation of method

// map prototype

Array.prototype.myMap = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    // // callback(currentValue, index, array)
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const arr = [1, 3, 4, 5];

arr1 = arr.myMap((e) => e * 2);
console.log(arr1);

// Filter prototype

Array.prototype.myFilter = function (callback) {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      // ✅ only push if condition true
      newArray.push(this[i], i, this);
    }
  }

  return newArray;
};

// Example
const arr1 = [1, 3, 4, 5];
const filtered = arr1.myFilter((e) => e % 2 === 0);
console.log(filtered); // [4]

// reduce prototype
// arr.reduce((acc,curr,i,arr)=>{},intialValue)
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};

const nums = [1, 2, 3, 4];
const sum = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log("sum", sum);
