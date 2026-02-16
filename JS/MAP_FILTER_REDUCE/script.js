console.log("Day-37")

// Map
const fruits = ["mango", "apple", "grapes", "guava"];

const newFruits = fruits.map((fruit, index) => { return fruit + " new"; })
newFruits.push("pineapple", "papaya");
// filter
const newFilteredFruits = newFruits.filter((fruit, index) => {
    return fruit.endsWith(" new");
});
console.log(newFruits);
console.log(newFilteredFruits);

console.log(Array(2).map(() => {
    return 1;
}));

// reduce
/*
Array.reduce(callback_function, initial_value);
working of callback function of reduce method
if the initial value is not provided the loop started with index 1
(p1, p2, p3, p4)=>{}
    p1 = accumolator value 
    p2 = current value
    p3 = index of the current value
    p4 = current looping array
*/

const nums = [0, 1, 2, 3, 4];
// debugger
nums.reduce((a, c, i, ar) => {
    console.log(`Accumolator: ${a} | Current: ${c} | Index: ${i} | array: ${ar}`);
    return a
}, 0);

// some method
const wildAnimals = ["tiger", "lion", "fox", "elephant", "eagle"];

const newAnimals = wildAnimals.some((a, b, c)=>{
	console.log(a, b, c);
	return "nitesh";
});
/*
if we return truthy value then return true otherwise return false for falsy value
in a iteration if it returns true at once then its return true other wise return false
if the callbackfunction return true then it return true and stop loop
*/

console.clear();
const usernames = ['nitesh@11', 'sam23', 'jam77'];
let isUserExist = usernames.some((username)=> username === "nitesh@11");
console.log(isUserExist);

// Every Methods (Array);

const friends = ["aman", "kamal", "samir", "preeti", "anurag", "nitesh"];
const isFriend = friends.every((fr)=> fr === "preet" );
console.log(isFriend);
