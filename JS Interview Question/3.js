//Q1 callback function explain

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

// Q3==> find the specfic character from the string

// let str = "My name is Krishan";
// target="sh"
// output=present or not present

// indexOf() method returns the index of the first occurrence of a specified value in a string. It returns -1 if the value is not found.

// indexOf(searchString, position)

let str = "My name is Krishan";

function findSubStr(str, subStr) {
    if (str.indexOf(subStr) == -1) {
        console.log("Not present");
    } else {
        console.log("Present");
    }
}

console.log(findSubStr(str, "Krishan"));//Present


// Q4=> count the number of times a specific character appears in a string

// let str = "My name is Krishna";
// target="na"
// output=2

function countSubStr(str, subStr) {
    let count = 0;
    let index = str.indexOf(subStr);

    while (index !== -1) {
        count++;
        index = str.indexOf(subStr, index + 1);
    }

    return count;
}

let str2 = "my name is krishna";
console.log(countSubStr(str2, "na")); // 1


// another way 

let str1 = "my name is krishna";
str1.split("na").length - 1; //["my ", "me is krish", ""]

// Q5=> Output of below code

const str4 = "sk"
const str5 = "krish"
const str3 = str4 && str5
console.log(str3)//krish
// why?
// In JavaScript, the logical AND (&&) operator returns the first falsy value it encounters or the last value if all are truthy. 
// In this case, str4 is "sk" (which is truthy), so the operator evaluates str5 next. Since str5 is "krish" (also truthy), the result of 
// str4 && str5 is "krish". Therefore, console.log(str3) outputs "krish".


// Q6=> Output of below code

[a] = [12, 15, 16, 14];
console.log(a);// output=12
// why?
// This code uses array destructuring to assign the first element of the array [12, 15, 16, 14] to the variable a. 
// The syntax [a] means that we want to extract the first element of the array and assign it to a. 
// Therefore, a gets the value 12, and console.log(a) outputs 12.


// Q7=> Output of below code

let a = 100
const b = ++a + a++;
console.log(b);
// output=202

// why?
// In this code, we have a variable a initialized to 100. The expression ++a increments a before using its value, while a++ uses the current value of a and then increments it.
// Let's break down the expression b = ++a + a++ step by step:
// 1. ++a: This increments a from 100 to 101 and returns 101.
// 2. a++: This uses the current value of a (which is now 101) and then increments it to 102.
// So, the expression becomes b = 101 + 101, which equals 202. However, after this line executes, a is now 102 due to the post-increment.
// Therefore, the final value of b is 202, and console.log(b) outputs 202.



