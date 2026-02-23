// case 1 

// Declartion :[var can be re-declared in the same scope]
var a;
var a;
// this fine


// case 2 
let a;
let a;
// this gives a has already been declared

or

let a;
{
  let a;
}
// its fine because its a shadowing

// Re-initialization [var, let can be updated]

var a = 5;
a = 10;
// its fine

let a = 10;
a = 20;
// its also fine


// 1=>var
// scope:function scoped
// Hoisting: Yes (initialized with undefined)
// Reassignment: Allowed

function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ 10 (because var is function-scoped)
}
testVar();

// 1=>let
// scope:block scoped
// Hoisting: Yes but not initialized (temporal dead zone)
// Re-initialize: Allowed

function testLet() {
  if (true) {
    let y = 20;
    console.log(y); // ✅ 20
  }
  // console.log(y); ❌ ReferenceError (outside block)
}
testLet();


//

// function test() {
//   var a = "hello";
//   let b = "Bye";

//   if (true) {
//     let a = "hi";
//     var b = "Good Bye";
//     console.log(a);
//     console.log(b);
//   }
// }
// test();