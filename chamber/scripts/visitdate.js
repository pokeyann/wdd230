const msToDay = 84600000;
const todaysDate = new Date()
const welcomeDate = new Date();

const welcomeElement = document.querySelector(".welcome");
const backSoonElement = document.querySelector(".backsoon");
const lastElement = document.querySelector(".last");
const daysElement = document.querySelector(".days");

const daysLeft = Math.ceil((welcomeDate.getTime() - todaysDate.getTime()) / msToDay);

let lastVisitDate = getLastVisitDate() || 0;


function getLastVisitDate() {
  return Number(window.localStorage.getItem("lastVisitDate"));
}

if (lastVisitDate == 0) {
  welcomeElement.textContent = "Welcome! Let us know if you have any questions.";
}

if (lastVisitDate == 1) {
  backSoonElement.textContent = "Back so soon! Awesome!";
}

if (lastVisitDate > 1) {
  lastElement.textContent = `You last visited ${daysLeft} days ago.`;
}

lastVisitDate++;

setVisitNumber();

function setVisitNumber() {
  localStorage.setItem("visitNumber", lastVisitDate);
}