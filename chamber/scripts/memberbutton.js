const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");


gridButton.addEventListener("click", showGrid);

function showGrid() {
  display.classList.add("grid");
  display.classList.remove("list");
}

listButton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
