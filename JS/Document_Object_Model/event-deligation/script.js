console.log("DONE!");
const box = document.querySelector(".box");

box.addEventListener("click", function(event){
    if(event.target == box) return false;

    alert(event.target.className, "clicked");
})