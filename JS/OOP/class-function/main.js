// classes are behind the scence function

class CreateUser {
    constructor(uname, age) {
        this.username = uname;
        this.age = age;
        console.log("Ok");
    }
    username;
    age;

    main() {
        console.log("main function invoked");
    }
};

const u1 = new CreateUser;
u1.age = 44;
u1.username = 'theniteshdev';
console.log(u1);

// creating another user
const u2 = new CreateUser('anuragsir', 33);
console.log(u2);
console.log(CreateUser.length);
// console.log(CreateUser.arguments); //  properties may not be accessed
// console.log(CreateUser.caller); //  properties may not be accessed
console.log(CreateUser.name);
console.log(u1.arguments);
console.log(u2.arguments);
