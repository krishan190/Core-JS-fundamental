const obj1 = { a: 1, b: 2 }
const obj2 = { a: 1, b: 2 }
const obj3 = { b: 2, a: 1 }


console.log(JSON.stringify(obj1)===JSON.stringify(obj2));
console.log(JSON.stringify(obj1)===JSON.stringify(obj3));


function isDeepComparison(a,b){
    return JSON.stringify(Object.entries(a).sort())===JSON.stringify(Object.entries(b).sort())
}
console.log(isDeepComparison(obj1,obj3));