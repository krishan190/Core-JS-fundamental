// map prototype

Array.prototype.myMap = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        // // callback(currentValue, index, array)
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}


const arr = [1, 3, 4, 5];

arr1 = arr.myMap(e => e * 2);
console.log(arr1);


// Filter prototype

Array.prototype.myFilter = function (callback) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {   // ✅ only push if condition true
            newArray.push(this[i], i, this);
        }
    }

    return newArray;
};

// Example
const arr1 = [1, 3, 4, 5];
const filtered = arr1.myFilter(e => e % 2 === 0);
console.log(filtered); // [4]


// reduce prototype

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (startIndex === undefined) {
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;

}

const arr2 = [1, 2, 3];

const product = arr2.myReduce((acc, num) => acc * num, 1)
console.log("product value", product);
