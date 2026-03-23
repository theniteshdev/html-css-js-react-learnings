const resButton = document.querySelector(".button-res");
const rejButton = document.querySelector(".button-rej");


const promise = new Promise((resolve, reject) => {

    // resButton.addEventListener("click", function(){
    //     resolve("OK");
    // });

    // rejButton.addEventListener("click", function(){
    //     reject("Error");
    // })

    // setTimeout(() => {
    //     reject("Error: rejected!!")
    // }, 5000); // rejected

    // setTimeout(() => {
    //     resolve("Data");
    // }, 4000);

});

// console.log(promise.all())

promise.then((data) => {
    console.log(data);
});

promise.catch((reason)=>{
    console.log(reason);
});


console.log(promise);