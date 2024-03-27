const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector(".grid");


gridButton.addEventListener("click", () => {

  display.classList.add("grid");
  display.classList.remove("list");
});

listButton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}


/*const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu")

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});*/