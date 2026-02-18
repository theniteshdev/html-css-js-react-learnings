// destructuring

const processors = ["rayzen 7", "intel core 3", "intel core 9", "snapdragon", "rayzen 9"];

const [r7, i3, i9, s, r9] = processors;
console.log(r7);
console.log(i3);
console.log(i9);
console.log(s);
console.log(r9);

// const [0:rayzen7] = processors;
// console.log(rayzen7);

const profile = {
	username:"nitesh",
	age: 34,
	fullAddress:{
		city:"gumla",
		pincode: 835207,
		state: "jh",
		country: "in"
	},
};
let {fullAddress:{city, state}} = profile;
console.log(city, state)

// console.log({} = profile);
let {username:u, age:a,} = profile;
console.log(u,"age", a);


const fruits = ["mango", "apple","banana"];
const {0: m, 2: b} = fruits;
console.log(m, b)


// destructuing with parameters
function logUserDetails({username= "nitesh", age=18, email="nitesh@gmail.com", password=343}){
	console.log(username, age, email, password);
};

logUserDetails({username:"anurag", age:32, email: "anurag@bam.com"});

