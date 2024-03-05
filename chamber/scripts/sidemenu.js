
const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu")

hambutton.addEventListner("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

