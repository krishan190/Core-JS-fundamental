// merge two strings alternatively

function mergeStrings(str1, str2) {
    let merged = '';
    const maxLength = Math.max(str1.length, str2.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < str1.length) {
            merged += str1[i];
        }
        if (i < str2.length) {
            merged += str2[i];
        }
    }
    return merged;
}

const string1 = "abc";
const string2 = "defg";
const result = mergeStrings(string1, string2);
console.log(result); // Output: "adbcefg"

// alternative approach using array methods

function zip(a, b) {
    var i,
        l = Math.min(a.length, b.length),
        temp = '';

    for (i = 0; i < l; i++) {
        temp += a[i] + b[i];
    }
    return temp + a.slice(i) + b.slice(i);
}

console.log(zip('abc', '123')); // a1b2c3


// return the highest length of word in a string

function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}


// alternative approach using reduce

function findLongestWordLength(str) {
    let newStr = str.split(' ');
    return newStr.reduce((e1, e2) => {
        return e1.length > e2.length ? e1 : e2;
    })
}

console.log(findLongestWordLength("hello my name is Krishan")); // Output: 5 (length of "Krishan")


// flat array witout using flat method

function flattenArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArr.push(arr[i][j]);
        }
    }
    return newArr;
}

const arr = [[1, 2], [3, 4], [5, 6], [6, 7]]
console.log(flattenArray(arr));


// infinite currying

// infinite currying
function sum(a) {
    return function (b) {
        if (!b) {
            return a;
        }
        return sum(a + b);
    }
}
console.log(sum(1)(2)(3)(4)(5)(6)());

// sum(1)
//  → sum(3)
//    → sum(6)
//      → sum(10)
//        → sum(15)
//          → sum(21)
//            → ()
//              → return 21

// setInterval vs setTimeOut