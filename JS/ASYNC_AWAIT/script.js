
const makeRequeset = async ()=>{};
const normalFunction = ()=>{};
// console.log(makeRequeset());
// console.log(normalFunction());


// throw keyword

function greet(username){
    if(typeof username == "string"){
        return `Hello, ${username};`
    }
    // throw "Error"; // exit the programme with an error
    throw new Error("Something went wrong!"); // another types of throw error
};

// greet(55);

// async function return a promise
async function sayHi(username) {
    return username;
};
// console.log(sayHi("takla"))
sayHi("hello").then((data)=>{
    console.log(data)
}); // resolve promise

// how to reject promise

async function sendMail(sendTo) {
    if(typeof sendTo == "string"){
        // console.log(sendTo);
    }

    // ways of reject a promise in async function
//    return ("Promise rejected!")
// throw new Error("this is error message")
return new Error("this is error message")
};

sendMail("nites.dev").then(data=>{
    console.log('data1', data); // no data return
})
 // no error
sendMail(55).then(data=>{
    console.log('data2', data); // here also no data
})
.catch((reason)=>{
    console.log('error:',reason)
})