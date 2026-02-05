var a = "apple"

console.log(window.a);
// debugger
function sayHi() {
    const fa = "hello"
    const fb = "hey"

    console.log(fa)
    console.log(fb)

}; // this sayHi function creates a local executation context

sayHi();
sayHello();
function sayHello() {
    console.log("Hello")
};
console.log("Ended");

// After running a function its local execution context is deleted