const obj = {
  value: 10,
  normalFunc: function () {
    console.log(this.value); // ✅ 10
  },
  arrowFunc: () => {
    console.log(this.value); // ❌ undefined (because `this` comes from outer scope)
  },
};

obj.normalFunc(); // 10
obj.arrowFunc(); // undefined
