// today i have to learn- this keyword, new keyword

const todo = {
    todos: [],
    totalCompleted: 0,
    removeTodo(id) {
        this.todos = this.todos.filter(item => item.id !== id);
    },
    newTodo(todoObj) {
        this.todos.push(todoObj);
    },
};

// const user1todo = todo;

const user = {
    username: "theniteshdev",
    age: 45,
    isAdmin: false,
    login() {
        // console.log(this);
        console.log(this == user); // this is true
    }
};

const user1 = user;
// console.log(user.age)
user1.login(); // this is return the todo object


function Laptop(brand, ram, rom) {
    this.brand = brand;
    this.ram = ram;
    this.rom = rom;
    console.log("Constructor function running.")
};

const l1 = new Laptop("acer", "16GB", "512GB");
const l2 = new Laptop("acer", "16GB", "512GB");
// console.log(l1 == new Laptop("acer", "16GB", "512GB")); // this is false
console.log(l1 == l2); // this is false because both are created in different memory reference

/*
when we call a function using new keyword it always in any case return a object
*/

function CreateUser(username) {
    this.username = username;

    return false; // this will ignored
};
CreateUser.prototype.apple = function () {
    console.log("apple function running..")
    console.log(`loggin from user: ${this.username}'s object`)
}

const u1 = new CreateUser("thenitesh");
const u2 = new CreateUser("anuragsir");
u1.apple();
u2.apple();

console.log(u1.apple == u2.apple); // this is true
