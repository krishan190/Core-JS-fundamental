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
