// assignment 1

const btn = document.querySelector("#btn");

let count = 1;

function handleBtn() {
    console.log("try again button clicked.", count, "times");
    count++;
};

btn.onclick = handleBtn;

// oncopy
const a1 = document.querySelector(".a1");
a1.oncopy = function () {
    console.log("a1 copied.");
};