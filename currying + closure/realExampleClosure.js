// 👉 A closure is when an inner function has access to variables of its outer function, even after the outer function is done running.

// ✅ Interview-Ready Answer

// “A closure is created in JavaScript when an inner function remembers variables from its outer function, even after the outer function has finished executing. In simple terms, it allows functions to have ‘private memory’.

// For example, if I create a counter function that increments a number, the inner function still remembers the counter variable because of closure.

// Closures are very useful in real projects:

// They allow us to create private variables (like a bank account balance that can only be updated using deposit/withdraw methods).

// They are used in event handlers, where each button can keep its own click count.

// They power module patterns, which help organize code without polluting the global scope.

// They’re also used in memoization, where expensive function results are cached for performance improvements.

// In my project, I used closures to cache API responses. For example, when fetching product data, I wrapped the fetch function inside a closure with a cache object. This way, if the same API endpoint was called again, the data was returned from cache instead of making a new network request, which improved performance significantly.”

function outer() {
  let count = 0; // variable in outer function

  function inner() {
    count++; // inner function still remembers `count`
    return count;
  }

  return inner;
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Here, counter keeps access to count because of closure

// Why are Closures Useful? (Uses in Real Projects)

// 1. Data Encapsulation / Private Variables

// In JS, we don’t have built-in private variables (before #private fields in classes). Closures help simulate them

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount(1000);
console.log(account.deposit(500)); // 1500
console.log(account.withdraw(200)); // 1300
console.log(account.getBalance()); // 1300

// 👉 Here, balance is private (cannot be directly accessed). Closure keeps it safe.

// 2. Event Handlers

function attachHandler(buttonId) {
  let clickCount = 0;

  document.getElementById(buttonId).addEventListener("click", function () {
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
  });
}

attachHandler("myButton");

// 3. Module Pattern

// Used for organizing code and preventing global pollution.

const CartModule = (function () {
  let cart = [];

  function addItem(item) {
    cart.push(item);
  }

  function getItems() {
    return cart;
  }

  return {
    addItem,
    getItems,
  };
})();

CartModule.addItem("Shoes");
console.log(CartModule.getItems()); // ["Shoes"]
