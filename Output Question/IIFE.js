var name = "Outside variable declared";

(function () {
  console.log(name);
  var name = "inside this function";
})();

//undefined

const user = {
  name: "Shruti",
  greet: function () {
    setTimeout(function () {
      console.log(`Hi, I am ${this.name}`);
    }, 1000);
  },
};

user.greet(); //Hi, I am undefined

//because of setTimeout is standlone function that is brwoswer is responsible for running setTimeout function
//In this case this is set to global object (windows in browser) by default

// 👉👉👉👉👉 Execution flow:

// user.greet() call hua → is time pe this = user. ✅
// Lekin setTimeout ke andar jo function diya hai:
// Woh ek alag normal function hai.
// Jab setTimeout us function ko call karega, woh user object ke through call nahi karega.
// Matlab function call hoga aise:
// window.anonymousFunction(); // Browser me

// Ab yahan this ka reference ho jata hai window object (ya strict mode me undefined).

// ⚡ Result: this.name → window.name (jo mostly undefined hota hai).

// 2. Arrow function ke case me

const user1 = {
  name: "Shruti",
  greet: function () {
    setTimeout(() => {
      console.log(`Hi, I am ${this.name}`);
    }, 1000);
  },
};

user1.greet();

// 👉 Execution flow:

// user.greet() call hua → yahan this = user. ✅
// Ab arrow function ke andar kya hota hai?
// Arrow function apna khud ka this banata hi nahi hai.
// Woh wahi this use karta hai jo uske surrounding function me tha (lexical this bolte hain).
// Matlab arrow function me this wahi hai jo greet function ka this tha → aur woh hai user.

// ⚡ Result: this.name → "Shruti".

// 🤔 Simple thumb rule (yaad rakhne ke liye):

// Normal function: this decide hota hai kaise call hua.
// Arrow function: this decide hota hai kahaan likha hai (surrounding scope se inherit hota hai).
