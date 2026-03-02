const message = {
    SUCCESS: "Success",
    FAILURE: "Failure"
}

var num = parseInt(prompt("Enter a number"));

// new Promise((resolve, reject) => {
//     (num % 2) ? reject() : resolve();
// }).finally(() => {
//     console.log("Example of Promise");
// }).then(function () {
//     console.log("status : ", message.SUCCESS);
//     console.log("Even Number");
// }, function () {
//     console.log("status : ", message.FAILURE);
//     console.log("odd Number");
// })

var executor = (resolve, reject) => {
    (num % 2) ? reject() : resolve();
}

var resolveFun = function () {
    console.log("status : ", message.SUCCESS);
    console.log("Even Number");
}

var rejectFun = function () {
    console.log("Status : ", message.FAILURE);
    console.log("Odd Number");
}

new Promise(executor).finally(() => {
    console.log("Example of Promise");
}).then(resolveFun).catch(rejectFun)


// Another Example

var promise = new Promise((resolve, reject) => {
    resolve(5);
})

var res = promise.then((value) => {
    // if i doesn't return any value so it gives as result
    // Promise {pending}
    // [[PromiseState]]:'fullfilled'
    // [[PromiseResult]]:undefined

    return value * value;
    // Promise {pending}
    // [[PromiseState]]:'fullfilled'
    // [[PromiseResult]]:undefined

})

console.log("res : ", res);
