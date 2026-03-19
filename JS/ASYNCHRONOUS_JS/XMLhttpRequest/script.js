const getButton = document.querySelector(".get-image-btn");
const dogImageElement = document.querySelector(".dog-image");

getButton.addEventListener("click", function(event){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = function(){
        // const reponse = JSON.parse(res.target.response)
        console.log(xhr.response.message)
        dogImageElement.src = xhr.response.message;
    };
})