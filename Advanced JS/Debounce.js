// Debouncing & Throttling
// this concept is use optimizing the performance of the web App and also
// it happens of limiting the rate of execution of particular function calls

// Debouncing in Javascript

let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching data....", counter++);
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this;
    // console.log("context value", context);

    let args = arguments;
    // console.log("args value", args);

    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);

// clearTimeout(timer) → If the function is triggered again before the delay ends, cancel the previous one.
// setTimeout(...) → Schedule a new function call after the specified delay.
// func.apply(this, args) → Ensures the function runs with the correct this context and receives the original arguments.
// The returned function is the debounced version of func.4

// What Actually Happens?

// All previous scheduled calls get canceled before they happen.

// Only the last one ("Apple") actually executes at 1300ms.

// Throttlling in Javascript
