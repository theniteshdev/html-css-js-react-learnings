// objects are non-pritive datatype or reference datatypes

// creating an object
const user = {
    firstname: "akash",
    lastname: "singh",
    age: 45,
    education: "India"
}

const user2 = {
    firstname: "akash",
    lastname: "singh",
    age: 45,
    education: "India"
};

console.log(user === user2); // only memory address is checked

const my_name = "nitesh"
const my_name2 = "nitesh"
console.log(`comparing nitesh and nitesh :: ${my_name === my_name2}`)

const a = {
    firstname: "nitesh"
}

const b = {
    firstname: "nitesh"
}

console.log(a.firstname == b.firstname); // this is true
console.log(a.firstname === b.firstname); // this is true

console.log(a["firstname"]);// behind the scence keys are stored like string
