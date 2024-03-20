// first what is the time difference
// second if blocks for which message to display depending on time difference 
// increment variable before you set it eg 
//numVisits++; 
//localStorage.setItem("numVisits-ls", numVisits);

//const msToDay = 84600000;

//Practice getting milliseconds
/*const todaysDate = new Date().getTime();

function getTodaysDate() {
  let date = new Date(todaysDate);
  console.log("Milliseconds =" + date.toString());
}
getTodaysDate();*/

//Is this needed considering line 19, or should I adjust line 19 to this?
const todaysDate = new Date().getTime();

function getTodaysDate() {
  let date = new Date(todaysDate);
}
getTodaysDate();

const welcomeElement = document.querySelector(".welcome");
const backSoonElement = document.querySelector(".backsoon"); // change to seconds for testing purposes
const lastElement = document.querySelector(".last");
//const daysElement = document.querySelector(".days");

const today = Date.now();

function getWelcome() {
  const welcome = new Date(Date.UTC(todaysDate.getFullYear(), 3, 19));
}

function getDaysLeft() {
  let daysleft = (welcome.getTime() - Date.now()) / msToDay;
}

welcomeElement.textContent = days;
backSoonElement.textContent = backsoon.getTime();
lastElement.textContent = "${daysleft.toFixed(0)} days";