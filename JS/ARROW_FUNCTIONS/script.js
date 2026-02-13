console.log("Today I learned: Arrow Func, Methods vs Function");


// Arrow Function - syntax
const sum = (num1, num2) => num1 + num2; // this is IMPLICIT RETURN
const square = num1 => {
    return num1 ** 2
}; // this is EXPLICIT RETURN

const sayGreet = who => (
    `Hello, ${who}`
); // this is also IMPLICIT RETURN

// Uses

let test = setTimeout(() => {
    console.log("setTimeout runned.")
    return "hey"; // setTimeout ignores this
});
console.log(test); // this logs 1


// if you know about it lets comment😃
const logHello = (toWho) => { console.log(`Hello ${toWho}`) };
setTimeout(logHello, 1000, "World");



// Methods VS Functions

const user = {
    username: "nitesh.dev",
    password: "pass22",
    email: "nitesh.dev@proton.me",
    getUserFullDetail: () => {
        return `Username: ${this.username} :: Password: `
    }
};

// here getUserFullDetail is a method of user

console.log(user.getUserFullDetail());

// Regular Function (functions are: function declaration, function expression, Arrow Functions...)
function followSomeone(ID) {
    return `You followed ${ID}.🎉 | button:"Follow Back ♥️"`
}; // this is regular function
followSomeone("@nitesh_backdev");