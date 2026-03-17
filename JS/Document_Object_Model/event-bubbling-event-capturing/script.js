const greenBox = document.querySelector(".green");
const yellowBox = document.querySelector(".yellow");
const redBox = document.querySelector(".red");

greenBox.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("Green Box Clicked");
});

yellowBox.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("Yellow Box Clicked");
});
redBox.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("Red Box Clicked");
});

