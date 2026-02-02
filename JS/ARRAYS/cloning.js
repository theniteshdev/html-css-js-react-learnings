// SHALLOW COPY 
const user = {
    username: "nitesh",
    password: {
        hash: "hsd8sdxnn8u48u9"
    },
    email: {
        body: "nitesh.dev",
        provider: "@proton.me"
    },
    address: {
        region: {
            country: "In",
            state: "Jh",
            pincode: 835207
        },
        Street: {
            town: ["Gumla Jh"],
            street: "Lakshman Nagar Gumla"
        }
    }
};

const user2 = {}
Object.assign(user2, user)

user.address.Street.street =  "apple nagar"

console.log('user')
console.log(user)

console.log("user2")
console.log(user2);