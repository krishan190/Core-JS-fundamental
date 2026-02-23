// case 1

// let a = 10;
// {
//   console.log(a);
//   let a = 20;
// }

// case 2

// var a = 10;
// {
//   console.log(a);
//   let a = 20;
// }

// case 3

// let a = 10;
// {
//   console.log(a);
//   var a = 20;
// }

// case 4

// var a = 10;
// {
//   console.log(a);
//   var a = 20;
// }

// | Case      | Result         | Reason                  |
// | --------- | -------------- | ----------------------- |
// | let + let | ReferenceError | TDZ due to shadowing    |
// | var + let | ReferenceError | Inner let shadows outer |
// | let + var | SyntaxError    | Illegal redeclaration   |
// | var + var | 10             | var ignores block       |

/*If interviewer asks:

Why ReferenceError?

You say:

Because let variables are hoisted but remain in the Temporal Dead Zone until initialization. Since inner let a shadows outer a,
 accessing it before initialization throws ReferenceError.

 If interviewer asks:

Why SyntaxError in third case?

You say:

Because var is function-scoped and tries to redeclare the same identifier already declared with let, which is illegal.



*/