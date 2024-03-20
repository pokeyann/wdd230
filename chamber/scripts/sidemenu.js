const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu")

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🕶")) {
    body.style.background = "#000";
    body.style.color = "#fff";
    modeButton.textContent = "🌞";
  }
  else {
    body.style.background = "#eee";
    body.style.color = "black";
    modeButton.textContent = "🕶";
  }
});