// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let str = "Krishan";
const newStr = str.split("");
const revStr = newStr.reverse();
const joinStr = revStr.join("");
// console.log(str);
console.log(joinStr);


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



