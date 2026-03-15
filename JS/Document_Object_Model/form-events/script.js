console.log("day-56 of learning web development");
// day- 56

const input1 = document.querySelector("#input1");
const para1 = document.querySelector("#para1");
// input1.addEventListener("click", () => {
//     console.log("input clicked")
// })
// input1.addEventListener("dblclick", () => {
//     console.log("input dblclicked")
// })
input1.addEventListener("input", (event) => {
    // console.log("input event fired")
    para1.innerHTML = event.target.value
});

input1.addEventListener("focus", function (event, e) {
    console.log("focus event fired!")
    console.log(e); // only first parameter is defined
})

const handleInputBlur = (event) => {
    console.log(event.type, "fired");
};
input1.addEventListener("blur", handleInputBlur);

// handle button events
const button1 = document.querySelector("#hw-btn");

button1.addEventListener("focus", function () {
    console.log("button focus fired!");
}); // this is fired when we click on it

// handle form events
// form1.addEventListener("mouseover", function(event){
//     // console.log("form", event.type);
// }); 

const form1 = document.querySelector("form");
form1.addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.currentTarget);
});