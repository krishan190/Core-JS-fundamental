// just think before solving this question

// Q.1 Reverse a string word wise and also remove extra spaces

// 🔑 Key idea:

// split(" ")  splits by space
// filter(Boolean) removes "" (empty strings)
// join(" ") rebuilds a properly spaced string
// Then you just reverse character-wise

let mytext = "My name is Krishan   Namdev";

console.log(mytext.split(" "));//[ 'My', 'name', 'is', 'Krishan', '', '', 'Namdev' ]

console.log(mytext.split(" ").filter(Boolean));//[ 'My', 'name', 'is', 'Krishan', 'Namdev' ]

let revText = mytext.split(" ").filter(Boolean).join(" ");
console.log(revText);//"My name is Krishan Namdev"

console.log(revText.split("").reverse().join(""));//"vedmaN nahsirk si eman yM"