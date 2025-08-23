// map prototype

Array.prototype.myMap = function (callback) {
    let newArray = [];
    let x = this.length;
    for (let i = 0; i < x; i++) {
        console.log("callback this value", callback(this[i]));
        let counter = callback(this[i]);
        newArray.push(counter);
    }
    return newArray;
}


const arr = [1, 3, 4, 5];

arr1 = arr.myMap(e => e * 2);
console.log(arr1);


// Filter prototype

Array.prototype.myFilter = function(callback) {
    let newArray = [];
    let x = this.length;

    for (let i = 0; i < x; i++) {
        console.log("callback this value", callback(this[i]));
        if (callback(this[i])) {   // ✅ only push if condition true
            newArray.push(this[i]);
        }
    }

    return newArray;
};

// Example
const arr1 = [1, 3, 4, 5];
const filtered = arr1.myFilter(e => e % 2 === 0);
console.log(filtered); // [4]
