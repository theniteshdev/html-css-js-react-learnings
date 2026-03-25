/*
While working in large codebase optional chaning is most probaly used.

where to use ?
-> while accessing a property of an object may be that property does not exists and here we can solve it using if and else but is a lengthy code instead of writing if and else we can do optional chaning to handle efficently and in clean syntax

-> syntax - ?.property

we can also use with function
-> syntax - object.method?.();
*/

const user = {
    username: "nitesh.dev",
    email: "nitesh.dev@proton.me",
    password: "f4ftjerjiog34ge",
    getHisEmailPassword: ()=>{
        return {email: user.email, password: user.password};
    }
};

// optional chaning
console.log(user?.email)

// here its undefined
console.log(user?.age)

console.log(user.age); 
// here this will exit return error and exit the programme

// optional chaning with object's methods
// console.log(user?.getFullName()); 
// this is INCORRECT syntax


console.log(user.getFullName?.()); // this is CORRECT syntax
console.log(user.getHisEmailPassword?.()); // this is also correct