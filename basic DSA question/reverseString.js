// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let str = "Krishan";
const newStr = str.split("");
const revStr = newStr.reverse();
const joinStr = revStr.join("");
// console.log(str);
console.log(joinStr);

// without built in function

let mytext = "i'm a lasagna   hog";

// Step 1: remove extra spaces
let words = mytext.split(" ").filter(Boolean);
let cleaned = words.join(" ");

// Step 2: reverse manually
let reversed = "";
for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned[i];
}

console.log(reversed);//goh angasal a m'i



// 2 pointer Approach

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("madam"));



