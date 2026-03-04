// make sure number are passed in add function
// throw error if any other data type is passed

function check(...args) {
    for (const num of args) {
        if (typeof num !== 'number') {
            throw new Error();
        }
    }
}

function add(n1, n2) {
    check();
    return n1 + n2;
}

console.log(add("a", 22));
console.log(add(89, 24));


// implement infinite currying

function currying(num1) {
    return (num2) => {
        if (num2 === undefined) {
            return num1;
        } else {
            return currying(num1 + num2)
        }
    }
}

console.log(currying(1)(2)(3)())

// const arr=[1,2,3,4,5];

// filter odd numbers
// square each number
// give 2 possible solutions

const newArr = arr.filter(n => n % 2 == 0).map(n => n * n);
console.log("new Arr", newArr);

// 