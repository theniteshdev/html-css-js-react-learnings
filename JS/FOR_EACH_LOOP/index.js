console.log("Hello, World!")

// forEach is a type of loop but it is method of array

const fruits = ["mango", "apple", "litch", "banana"];

let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++
};

// using forEach loop
new Array(40).forEach(() => {
    console.log("Hey");
});

fruits.forEach((fruit, index, arr) => {
    // console.log(fruit.toUpperCase());
    console.log(arr[index].toUpperCase())
});


const testArray = [];
testArray.length = 4294967295; // OK
console.log(testArray);

// maximum length of an array in JS is 4,29,49,67,295
// Four arab twenty nine crore forty nine lakh sixty seven thousand two hundred ninety five 

const veryBigArray = new Array(4294967296); // Error
console.log(veryBigArray.length);

const test3 = [1, 2, 3];
test3.length = 5;
console.log(`the length of test3 ${test3.length}`);