for (let i = 1; i <= 10; i++) {
    const newCard = card.cloneNode(true);
    newCard.lastChild.textContent = i;
    container.appendChild(newCard);
}