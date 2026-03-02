/* 
A closure is created when a function remebers the variable of its outer function - even after the outer function has finished. 
 
In short :
Function + Its surrounding Data = Closure
*/

const { useState } = require("react");

// example

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    }
}

const inc = counter();
inc();//1
inc();//2


// Here the inner function still remembers count this is a closure.

// Real time use of closure in react

//1=> Example: Button click Counter

function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return <button onClick={handleClick()}>Click</button>
}

// handleClick is a closure.

// It remembers the count value from the component function

// so in react

// Event handlers are closures
// They captures state and props

// 2=> Real time use of closures in Express.js

// Example=> Middleware

function authorize(){
    return function (req,res,next){
        if(req.user.role!==role){
            return res.status(403).send("forbidden");
        }
        next();
    }
}

app.get('/admin',authorize("admin"),handler)

// Here 

// authorize("admin") return a function 
// that returned function remembers role

// so role is kept using a closure

// its very common in Express