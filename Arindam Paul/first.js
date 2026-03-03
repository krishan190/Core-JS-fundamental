var a = 2;
b = 1;

function f(z) {
  b = 3;
  c = 4;
  var d = 6;
  e = 1;

  function g() {
    var e = 0;
    d = 3 * d;
    return d;
  }
  return g;
  var e;
}

var myG = f(1);
console.log(myG());

/*

1. Compilation Phase (Initial Pass - Global Scope):
The JavaScript engine first scans the entire code for declarations.

var a = 2;: A variable a is declared in the global scope. Its value is not assigned yet.
b = 1;: This is not a declaration; it's an assignment. The compiler skips this line.
function f(z) { ... }: A function f is declared in the global scope. A reference to f is created, pointing to its code blob in 
memory. The compiler does not go inside f to compile its contents at this stage (9:04).
var myG = f(1);: A variable myG is declared in the global scope. Its value is not assigned yet.
After this initial compilation, the global scope has references for a, f, and myG.

2. Execution Phase (Initial Pass - Global Scope): 
The runtime now starts executing the code line by line.

var a = 2;: The value 2 is assigned to a in the global scope .
b = 1;: The engine looks for b in the global scope. Since it doesn't exist, and we are in the global scope, JavaScript forgives 
and creates b in the global scope, assigning it the value 1.
function f(z) { ... }: This is a function declaration, which was already processed in compilation. It is skipped during execution.
var myG = f(1);: This line involves a function call f(1). This is where execution branches into the f function.

3. Execution of f(1):

Entering f: A new execution context (local Heap memory) is created for f. This context has a scope pointer back to its outer 
environment, which is the global scope in this case.

Compilation Phase (Inside f): 

f(z): z is a parameter, treated as a local variable declaration for f. So, z is declared in f's local scope.
b = 3;: Skipped (assignment).
c = 4;: Skipped (assignment).
var d = 6;: d is declared in f's local scope .
e = 1;: Skipped (assignment).
function g() { ... }: Function g is declared in f's local scope. A reference to g is created, pointing to its code blob. 
The compiler does not go inside g.
return g;: Skipped (execution statement).
var e;: e is declared in f's local scope. This demonstrates variable hoisting, as var e is processed during compilation even 
though it appears after the return statement.
Execution Phase (Inside f): 

z: Since f(1) was called, z is assigned the value 1 in f's local scope.
b = 3;: The engine looks for b in f's local scope. It doesn't find it. It then follows the scope pointer back to the global scope. In the global scope, b exists (value 1). The value of b in the global scope is updated to 3 (14:23-15:09).
c = 4;: The engine looks for c in f's local scope. It doesn't find it. It follows the scope pointer back to the global scope. 
c doesn't exist in the global scope either. Since it's an assignment in the global scope, c is created in the global scope and 
assigned the value 4.
var d = 6;: The value 6 is assigned to d in f's local scope .
e = 1;: The engine looks for e in f's local scope. It finds the var e declaration (due to hoisting) and assigns it the value 1 in 
f's local scope.
function g() { ... }: Skipped (already defined).
return g;: This is the crucial part for closures. Instead of calling g directly, f returns the function object g itself. 
This returned g function object carries with it its scope pointer back to f's execution context (Heap memory) where it was 
defined.

4. Back to Global Scope: 

var myG = f(1);: The returned function g (from f(1)) is assigned to myG in the global scope. So, myG now holds a reference to the
 g function object, which implicitly has a link back to f's local execution context.

5. Execution of console.log(myG());:

myG(): This calls the g function.
Entering g: A new execution context (local Heap memory) is created for g. This context has a scope pointer back to f's execution context (where g was defined), and not to the global scope from which myG() was called (22:51-23:18).
Compilation Phase (Inside g):
var e = 0;: e is declared in g's local scope.
d = 3 * d;: Skipped (assignment).
return d;: Skipped (execution statement).
Execution Phase (Inside g): 
var e = 0;: e is assigned the value 0 in g's local scope. This demonstrates variable shadowing: even though f has an e (value 1), g's local e takes precedence.
d = 3 * d;: The engine looks for d in g's local scope. It doesn't find it. It follows g's scope pointer back to f's execution context. In f's context, d exists with the value 6. It calculates 3 * 6 = 18. This value 18 is then assigned back to d in f's execution context.
return d;: g returns the current value of d from f's context, which is 18 (17:43).

6. Back to Global Scope (Final Result):

console.log(myG());: The value 18 (returned from myG()) is passed to console.log, which prints 18 to the console.
Garbage Collection and Closure:

After f finishes execution and returns g, its local execution context (Heap memory containing z, d, e) normally would be eligible 
for garbage collection. However, because myG in the global scope holds a reference to g, and g's internal scope pointer still points 
back to f's execution context, f's execution context is NOT garbage collected. This is the essence of a closure: g "closes over" the 
variables from its lexical environment (f's scope), allowing it to access and modify them even after f has completed.
When myG() (i.e., g()) finishes execution, its own local execution context (containing e = 0) is garbage collected because there are no longer any references to it.

*/
