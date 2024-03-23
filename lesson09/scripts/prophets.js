/*
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets);
}

getProphetData();
*/

const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    let portrait = documnet.createElement("img");

    fullName.textContent = "${prophet.name} lastName";

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", "Potrait of ${prophet.name} lastName");
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "300");
    portrait.setAttribute("height", "400");

    card.appendChild(fullName);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
}
