console.log("hello, world!")

// functions are the bundle of code that run by just calling that function

function sayHello() {
    console.log("This in start🟢 of Function")
    console.log("Hello, World!");
    console.log("This in end🔴 of Function")
}; // this is a function but we need to call this function

function myIntro() {
    console.log("-----------------*******----------------")
    console.log("Hi, I am nitesh.")
    console.log("I love to learn CS fundamentals.")
    console.log("-----------------*******----------------")
};

//calling function
myIntro()

sayHello();
// sayHello();
// sayHello();

// here are creating function and log following things but its return any result

// return a value
function mouseLeftBtn() {
    return "left button clicked!"
};

mouseLeftBtn(); // here we call this but we need to log or save its reult then we have to log
let isLeftBtnClicked = mouseLeftBtn()
console.log(isLeftBtnClicked); // default returned value is undefined

console.log(mouseLeftBtn);// this log the function body

/*
Arguments- this is value
Parameter- this is variable name
*/

function greet(who) {
    console.log(`${"Hello"} ${who}`)
};

greet("nitesh");

// setting default defule
function follow(username = null) {
    if (username) {
        return console.log("Please provide username to follow someone!")
    }
    return console.log(`You successfully! follow ${username}.`)
};

follow("piyush-sir");
follow("hitesh-sir");
follow("anurag-sir");


let test = follow("test-user")
console.log(test); // this is undefined because console.log()-> returns undefined

// its is good practice that we have to create function name that represents any action
function creatingUser(fullname, email, password, age, phone) {
    if ([...arguments].length !== 4) return "Please enter all the fields!"

    const user = { fullname, email, password, age, phone }
    Object.freeze();
    return user;
};

let u001 = creatingUser("nitesh kumar", "nitesh@google.com", "password123", 23, 989897772);
let u002 = creatingUser("nitesh kumar", "nitesh@google.com", "password123", 23);

console.log(u001)
console.log(u002)

