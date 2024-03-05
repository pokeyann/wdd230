
const sideMenu = document.querySelector("#menu")
const navigation = document.querySelector(".navigation")
//sidemenu.style.display = "flex"

sidemenu.addEventListner("click", () => {
  navigation.classList.toggle("show");
  hamButton.classList.toggle("show");
});

/*function showSidemenu() {
  const sidemenu = document.querySelector(".sidemenu")
  sidebar.style.display = "flex"
}*/
