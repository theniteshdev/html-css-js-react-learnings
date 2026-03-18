document.body.style.fontFamily = "sans-serif"; // styling to body
const para1 = document.querySelector(".para1");
const box = document.querySelector(".box1");
const input1 = document.querySelector(".input1");

// input1.focus();

para1.onmouseover = function(){
        input1.focus();
};

box.onmouseover = function(){
        input1.blur();
}