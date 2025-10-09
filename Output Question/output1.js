const obj = {
  text: "LOGGING",
  list: ["1", "2", "3"],
  log() {
    this.list.forEach(function (item) {
      console.log(this.text + item); // OUTPUT ????
    });
  },
};
obj.log();

//It prints undefined1
//          undefined2
//          undefined3
