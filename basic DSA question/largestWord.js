
function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let largest = "";

    for (let word of words) {
        if (word.length > largest.length) {
            largest = word;
        }
    }
    return largest;
}


console.log(findLongestWord("I am learning JavaScript programming everyday"));