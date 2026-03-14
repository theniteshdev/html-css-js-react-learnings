console.log("Day-55");

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");

function handleP2() {
    console.log("p2 clicked !")
};
p2.onclick = handleP2;

function handleP1() {
    console.log("Clicked!");
}

p1.addEventListener("click", handleP1)