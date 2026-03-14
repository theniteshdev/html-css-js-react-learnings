const addCard = document.querySelector("#add-card");

addCard.addEventListener("click", handleAddCard);

let count = 1;

function handleAddCard() {
    let div = document.createElement("div");
    div.innerHTML = count;
    div.classList.add("card");

    document.body.append(div);
    console.log("Ok")
    count++;
}