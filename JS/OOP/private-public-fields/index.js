// private and public fields
class NewUser {
    username; age; email; #password; role
    // all the above fields are public 
    #location = 'INDIA';
    #ip = '192.168.1.9';
    test = 'apple';
    #applicationLoginCode; // this is private field
    constructor(username, age, email, password, role) {
        this.#password = password
        this.username = username;
        this.age = age;
        this.email = email;
        this.role = role;
        this.#applicationLoginCode = 4565;

        this.test = 'hmm-working'; // this is also working
        console.log(this.#location); // accessing private field
        console.log(this.#ip); // accessing private field
        console.log(this.test); // accessing public field
    }

    getPassword(applicationLoginCode) {
        if (applicationLoginCode == this.#applicationLoginCode) {
            return this.#password;
        } else {
            return false;
        }
    }
};

const user1 = new NewUser('theniteshdev', 33, 'nitesh.dev@proton.me', 'jgh3r49jf', "admin");
const mypassword = user1.getPassword(4565);
console.log(mypassword);