const loggerFunc = () => {
  console.log("Throttled function");
};

const throttle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterLoggerFunction = throttle(loggerFunc, 1000);

windown.addEventListener("resize", betterLoggerFunction);

// this is normal function without throttling
// check the console for the difference between the calls of normal function and the throttled function

const normalFunc = () => {
  console.log("Normal function");
};

windown.addEventListener("resize", normalFunc);
