// let context = this;
// let args = arguments;

// 1️⃣ let context = this;

// this ka value function ke call hone ke tarike par depend karta hai.
// Jab hum setTimeout ke andar arrow function ya normal function chalate hain, kabhi-kabhi this ka value change ho jaata hai (e.g., window ya undefined ho jaata hai strict mode me).
// Isliye hum us waqt ka actual this ek variable context me store kar lete hain.
// Baad me fn.apply(context, args) use karke hum ensure karte hain ki function original object context ke sath chale.

let obj1 = {
  name: "Krishna",
  greet: function () {
    setTimeout(function () {
      console.log(this.name); // ❌ 'this' yahan window/undefined
    }, 1000);
  },
};
obj1.greet();

// FIX

let obj2 = {
  name: "Krishna",
  greet: function () {
    let context = this;
    setTimeout(function () {
      console.log(context.name); // ✅ "Krishna"
    }, 1000);
  },
};
obj2.greet();

// 2️⃣ let args = arguments;

// Jab hum debounce ka function call karte hain, usme kuch parameters aate hain (jaise "Apple").
// Agar hum direct setTimeout ke andar arguments use karen, to wo change ho sakta hai ya refer na ho paaye, kyunki arguments ka scope current function tak limited hota hai.
// Isliye hum us waqt ke arguments ko args variable me copy karke rakh lete hain.
// Fir baad me fn.apply(context, args) use karke wahi original parameters pass karte hain.

function test1(a, b) {
  setTimeout(function () {
    console.log(arguments); // ❌ Yeh arguments setTimeout wale hain, na ki test wale
  }, 1000);
}
test1(1, 2);
