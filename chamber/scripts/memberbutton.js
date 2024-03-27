const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector(".display");


gridButton.addEventListener("click", function () {
  display.classList.add("grid");
  display.classList.remove("list");

});

listButton.addEventListener("click", function () {
  display.classList.add("list");
  display.classList.remove("grid");
});

