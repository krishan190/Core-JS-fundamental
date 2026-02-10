// 3 using set

let str1 = "programming";

let newStr1 = [...new Set(str1)].join(""); //it gives unique element of array
console.log(newStr1);

//Q2 1==> find duplicates from an array

const arr = [1, 2, 3, 4, 5, 2, 3, 6]
let dupli = [];
arr.sort();

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
        dupli.push(arr[i]);
    } else {
        continue;
    }
}

console.log(dupli);//[2,3]


// localStorage vs session storage
