const heroSection = document.querySelector(".hero-section");
const container = document.querySelector(".container");
const paragraph = document.querySelector(".paragraph");

const head1 = document.querySelector(".heading1");
const head2 = document.querySelector(".heading2");
const card = document.querySelector(".card");

console.log(head1.cloneNode(true));

heroSection.append(paragraph);
heroSection.appendChild(head1)
console.log(heroSection);
console.log(container);

// container.append(card.cloneNode(true))
