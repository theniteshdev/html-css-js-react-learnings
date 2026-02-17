// Day-39 of 250 days frontend challenge
console.log("Programme starts.");

// spread operator & arguments keywords & rest parameters & defualt params
const fruits = ["mango", "apple", "litch", "guava"];

// uses
const fruitsCopy = [...fruits]; // spread operator 
const nums = [1,2,3,4,5,6,7,8,9,10];
function findSum(){
	const allNums = [...arguments]; // this is also spread operator and arguments keyword

/*
all the arguments which are accept and not accept they are stored or acces by arguments keyword but its not on Arrow Function
*/

	return allNums.reduce((acc, curr)=> acc + curr, 0);
};

console.log(findSum(...nums));

function multiply(...n){
	console.log(typeof(n)); // object
	console.log(Object.is(n, Array()));
	console.log("array instanceof::", n instanceof Array);
};
// rest params-> array
multiply(1,2,3,4,5,6,7,8,9,10);

function subtract(a=0,b=0){
	return a - b;
};

console.log(subtract(11,1));


const arrFunction = ()=>{
	console.log(arguments);
};
const regularFunction = function (){
	console.log(arguments);
}
arrFunction(1,2,3,4,5,"Ssd", false);
regularFunction(false, true, 1,3,6,undefined, null);




