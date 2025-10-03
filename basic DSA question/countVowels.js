function countVowels(char) {
    let lowerStr = char.toLowerCase();
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (const char of lowerStr) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}


console.log(countVowels("SHantanu"));