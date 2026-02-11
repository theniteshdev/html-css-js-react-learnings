console.log("Hello, World!")

function main() {
    let likes = 4;
    const username = "nitesh_backdev";
    var fullLinks = "https://x.com/nitesh_backdev";
    console.table(likes, username, fullLinks);
};
main()

setTimeout("console.log('Hey, Welcome')", 0);

console.log("Hmm Working fine till now!!"); // this code runs before setTimeout function


// this is interval1
// let intervalID = setInterval("console.log('interval-running')", 200)

// // this is interval2
// let intervalID2 = setInterval(function () {
//     console.log("interval2-running"); 
// }, 200);

// Do you know 