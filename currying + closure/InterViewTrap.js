// Basic Closure Example

function outer() {
    let x = 0;
    return function innerFunction() {
        x++;
        console.log(x);
    }
}
let newFunction = outer();
newFunction()


// Interview Trap Example

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0)
}//5 5 5 5 5


// solve by using closure

for (var i = 0; i < 5; i++) {
    function parentFunction(x) {
        setTimeout(() => {
            console.log(x);
        }, 0)
    }
    parentFunction(i)
}