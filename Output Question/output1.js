const obj = {
  text: "LOGGING",
  list: ["1", "2", "3"],
  log() {
    this.list.forEach(function (item) {
      console.log(this.text + item); // OUTPUT ????
    });
  },
};
// obj.log();

//It prints undefined1
//          undefined2
//          undefined3


var foo = 1;
(function () {
  console.log(foo);
  foo = 2;
  console.log(window.foo);
  console.log(foo);
  var foo = 3;
  
  console.log(foo);
  console.log(window.foo)
})()