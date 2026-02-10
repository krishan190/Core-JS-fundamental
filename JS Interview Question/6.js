// first repeated character from the string.

// Given a string, find the first repeated character in it. For example, 
// if the input string is "Javascript", the output should be "a" since it is the first character that appears more than once.


//BruteForce Appraoch

function firstRepatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return str[i];
      }
    }
  }
  return null;
}

console.log(firstRepatedChar("Javascript"));

//Optimized approach

function firstRepeatChar(str) {
  console.log(str);
  const seen = new Set();
  console.log(seen);
  for (let char of str) {
    console.log(seen.has(char));
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }
  return "no any Repeating char";
}

console.log(firstRepeatChar("Javscript"));

//Default export and named export
//Event Bubbling and event capturing

// promise chain
