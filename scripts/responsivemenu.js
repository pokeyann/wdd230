const hambutton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {
  navigation.classList.toggle("show");
  hambutton.classList.toggle("show");
});

/*const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu")

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});*/