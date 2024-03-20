const msToDay = 84600000;
const todaysDate = new Date()
const welcomeDate = new Date();

const welcomeElement = document.querySelector(".welcome");
const backSoonElement = document.querySelector(".backsoon");
const lastElement = document.querySelector(".last");
const daysElement = document.querySelector(".days");

const daysLeft = Math.ceil((welcomeDate.getTime() - todaysDate.getTime()) / msToDay);

let visitNumber = getVisitNumber() || 0;


function getVisitNumber() {
  return Number(window.localStorage.getItem("visitNumber"));
}

if (visitNumber == 0) {
  welcomeElement.textContent = "Welcome! Let us know if you have any questions.";
}

if (visitNumber == 1) {
  backSoonElement.textContent = "Back so soon! Awesome!";
}

if (visitNumber > 1) {
  lastElement.textContent = `You last visited ${daysLeft} days ago.`;
}

visitNumber++;

setVisitNumber();

function setVisitNumber() {
  localStorage.setItem("visitNumber", visitNumber);
}