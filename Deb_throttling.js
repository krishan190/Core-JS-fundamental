// Debouncing & Throttling
// this concept is use optimizing the performance of the web App and also
// it happens of limiting the rate of execution of particular function calls

// Debouncing in Javascript
let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching data....", counter++);
};

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  };
};

const betterFunction = debounce(getData, 300);
