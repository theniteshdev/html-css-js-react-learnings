// ternary operator in js
/*this is short hand of if-else*/

// syntax
let test = true ? console.log("Hello World")  : false
 

let ageIs = 56 
let isElagible = ageIs > 18 ? true : false;

console.log(isElagible)


let gender = "female"

console.log(gender === "female" ? 'F' : 'M')


// we can also use with template literals
let isAdmin = false;
const summary = ` Your are ${isAdmin ? 'admin' : 'normal-user'}`
console.log(summary)

// we can also work with truthy and falsy values