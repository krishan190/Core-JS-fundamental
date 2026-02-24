// implicit closure

var data = "krishan Namdev";
setTimeout(() => {
    console.log("Data is", data);
}, 3000);


// Explicit closure

function makeAdder(n) {
    var inc = n;
    var sum = 0;

    return function add() {
        sum = sum + inc;
        return sum;
    }
}

var adder3 = makeAdder(3)