//1

const obj = {
    a: 1,
    c: () => {
        return this.a;
    }
}

console.log(obj.c()); //undefined
console.log(obj.c.call({ a: 1 })); //undefined

// 2

const one = "1";

const firstObj = {
    ['one']: "hello",  //dynamic way of property creation
    [one]: "this is one"
}

console.log(obj.one);//hello
console.log(obj);//{1: 'this is one', one: 'hello'}


//3

let str = "JS"
JSON.stringify(str) === str;//false

//4

//here test(3) goes to first parameter a assigned with 3 and second parameter declare with same name a its assigned with undefined that why
//it gives undefined
function test(a, a) {
    console.log(a);
}
test(3)//undefined

//5

let x = [9, 8, 7, 6][1, 2, 3];
console.log(x);

//In JavaScript, the comma operator returns the last expression. So [9,8,7,6][1,2,3] becomes [9,8,7,6][3], which returns 6.


//5

const users = {
    frontendMaster: {},
    krishan: {}
}

let name = "constructor"
// if (Object.hasOwn(users,name)) {
// if (user.hasOwnProperty(name)) {
if (users[name]) {
    console.log("get the name key");
} else {
    console.log("Not getting the name key");
}

/*
users["constructor"]
Now the question is:
👉 Does users object have a property called "constructor"?

🧩 Step 2: Property Lookup in JavaScript
In JavaScript, when we access a property:

JS checks in this order:

1.Inside the object itself
2.If not found → inside its prototype (__proto__)
3.Continue up the prototype chain

🧠 Step 3: Does users have "constructor"?
Even though we did not define:

JS does:

❌ Not found inside users
✅ Found inside Object.prototype

correct way
Object.hasOwn(users,name);
or
user.hasOwnProperty(name);

*/


//6

var magic = 1;
function magic() {
    console.log("hi");
}
magic();//TypeError: magic is not a function

function magic() {
    console.log("hi");
}
let magic = 1;
console.log(magic);//syntax error identifier magic has already been declared;



/*In JavaScript, execution happens in two phases:

1.Creation Phase
2.Execution Phase

🧠 1️⃣ Creation Phase

During the creation phase, JavaScript scans the entire code and sets up memory.

var magic is hoisted and initialized with undefined.
function magic() is also hoisted, but function declarations are fully hoisted with their body.

👉 If both var and function have the same name, function declaration takes priority during the creation phase.

So after creation phase:
magic → function() { console.log("hi"); }

🚀 2️⃣ Execution Phase

Now JavaScript executes line by line.

Line 1: var magic=1;
This assigns 1 to magic, overriding the function.
Now: magic->1

Line 2:
Function declaration is skipped (already handled in creation phase).

Line 3:
magic();

Now JavaScript tries to call magic, but magic is 1.
1(); //it throws
TypeError: magic is not a function

*/