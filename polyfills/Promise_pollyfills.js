const examplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
})

examplePromise.then((res) => {
    console.log(res);
})
    .catch((err) => console.log(err))