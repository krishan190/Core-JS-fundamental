let car1 = {
  color: "Red",
  company: "Maruti",
};

function purchaseCar(currency, price) {
  console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}


// purchaseCar.call(car1, "₹", 500000)


// Call pollyfills

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "Its not function");
  }

  context.fn = this;
  context.fn(...args);
}
purchaseCar.myCall(car1, "₹", 500000)

// apply pollyfills

Function.prototype.myApply = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "Its not function");
  }

  // handle condition if user not provide args in array
  if (!Array.isArray(args)) {
    throw new TypeError("CreatelistFromArrayLike called on non-object");
  }

  context.fn = this;
  context.fn(...args);
}
purchaseCar.myApply(car1, ["₹", 500000])


// bind pollyfills

const newFunc = purchaseCar.bind(car1)//it returns new function
console.log(newFunc("₹", 500000));//


Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as its not callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  }
}

const newFunc1 = purchaseCar.myBind(car1, "₹", 500000)//it returns new function
console.log(newFunc1());

// we have to provide argument in different way also

// const newFunc1 = purchaseCar.myBind(car1, "₹")//it returns new function
// console.log(newFunc1( 500000));