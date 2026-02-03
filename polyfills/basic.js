/* pollyfills is a custom code that we write for existing methods that we have let suppose browser doesn't support it in that case 
 we write a code for it  */

// function greet(g1, g2) {
//     console.log(`${g1} ${this.name} ${g2}`);
// }

// const user = { name: "krishan" };

// greet.call(user, "Hello", "!");
// greet.apply(user, ["Hi", "!"]);

// const fn = greet.bind(user, "Namaste");
// fn("!!!");

// ✅ Summary:

// Symbol() → ensures a hidden unique property so we don’t overwrite existing ones.

// result is undefined → because the original function didn’t return anything.

// Without Symbol() → still works, but risks clashing with user-defined properties.

Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis; //this is optional to write this line
  console.log("context", context);
  const sym = Symbol();

  context[sym] = this;
  // console.log("context[sym] value", context[sym]);//[Function: greet]

  const result = context[sym](...(args || []));
  delete context[sym];
  return result;
};

function greet(age, city) {
  console.log(`Hello, I am ${this.name}, ${age} years old from ${city}`);
}

const person = { name: "Krishna" };

const returnObj = greet.myCall(person, 25, "Pune");
// console.log("returnObj value",returnObj);//undefined

// ✅ So why return result?
// To make myCall behave exactly like the native .call.
// Without it, you lose the ability to use the return value of the function.
