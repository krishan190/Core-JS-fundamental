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