let mytext = "i'm a lasagna   hog";
// 1. Split by space → filter out empty strings
let words = mytext.split(" ").filter(Boolean);

// 2. Join back with single space
let cleaned = words.join(" ");

// 3. Reverse character-wise
let reversed = cleaned.split("").reverse().join("");
console.log(reversed);
