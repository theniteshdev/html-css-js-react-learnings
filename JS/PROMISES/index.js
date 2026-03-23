import fs from "node:fs";

// this is async code
const fileContent = new Promise((res, rej)=>{
    try {
        res(fs.readFileSync("./chars.txt", {encoding: "utf-8"}))
    } catch (error) {
        rej(`Error: ${error.message}`)
    }
});

fileContent.then((data)=>{
    console.log(data);
})
.catch((reason)=>{
    console.log(reason);
})
.finally(()=>{
    console.log("Promises END!");
});
// async code end

console.log("Hello Ji"); // this is sync code

