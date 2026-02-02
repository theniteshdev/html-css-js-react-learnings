const fruits = ["apples", "mangoes", "pine-apples", "litchies"]

fruits.length;
fruits.push("dates");


fruits['my_fav'] = "oranges";

/*
common methods-
    pop()
    push()
    shift()
    unshift()
    concat()
    indexOf()
    includes()
    reverse()
    sort()
    slice()
    splice()
*/

// pop
const apps = [
    'x.com',
    'freecodecamp.org',
    'linkedIn.com'
];

console.log(apps.pop(2/*this 2 is ignored*/)); // it returns the removed value
console.log(apps.push("github.com")); // it returns the length of the array
console.log(apps.push()); // it also returns the length of the array


const firstDeletedValue = apps.shift();
console.log(`first deleted value is:: ${firstDeletedValue}`)
console.log(apps.unshift()); // it also returns the length of the array after deleted a value from the first
console.log(`now the array's values are: ${apps}`)
console.log(`${{ apple: "allo" }}`); // this logs the [Object Object]

const obj = `["Object","Object"]`
console.log(JSON.parse(obj));

// concat()
const arr1 = [1, 2, 3, 4]
arr1.unshift(0)

const arr2 = [5, 6];

const mixedArr = arr1.concat(arr2);
console.log(`${mixedArr.toString()} is ${mixedArr}`)
console.log(`arr1 is:: ${arr1}`)
console.log(`arr2 is:: ${arr2}`)


const evenNums = [0, 2, 4, 6, 8]
console.log(`reverse array:: ${evenNums.reverse()}`); // it returns the reversed array
console.log(evenNums);

// sort
const nums = [0, 3, 6, 7, 45, 67];
// console.log(nums.sort());
// nums.sort((a, b) => {
//     console.log(`a is :: ${a}`)
//     console.log(`b is :: ${b}`)
//     return a
//     return b
// })

// console.log(nums)

// slice method in javascript
const animals = ['lion', 'tiger', 'fox', 'rabbit'];
console.log(animals.slice(1, 4)); // return -> ['tiger', 'fox', 'rabbit'];