
function charFrequency(str) {
    let map = new Map();

    for (let char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
}

console.log(charFrequency("hello"));