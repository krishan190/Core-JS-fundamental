// function greet(g1, g2) {
//     console.log(`${g1} ${this.name} ${g2}`);
// }


// const user = { name: "krishan" };

// greet.call(user, "Hello", "!");
// greet.apply(user, ["Hi", "!"]);


// const fn = greet.bind(user, "Namaste");
// fn("!!!");

Function.prototype.myCall = function (context, ...args) {
    // console.log("context",context);
    // console.log("args value",...args);

    // console.log("globalthis", globalThis);

    context = context || globalThis;
    // console.log("context",context);
    const sym = Symbol();
    console.log("sym", sym);
    console.log("this value", this);

    context[sym] = this;
    console.log("context[sym] value", context[sym]);

    const result = context[sym](...args);
    console.log("result will be", result);

    delete context[sym];
    return result;
};

function greet(age, city) {
    console.log(`Hello, I am ${this.name}, ${age} years old from ${city}`);
}

const person = { name: "Krishna" };

greet.myCall(person, 25, "Pune");



