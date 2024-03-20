// first what is the time difference
// second if blocks for which message to display depending on time difference 
// increment variable before you set it eg 
//numVisits++; 
//localStorage.setItem("numVisits-ls", numVisits);
//3-19-24 got code working, now need to build if blocks


//Practice getting milliseconds
/*const todaysDate = new Date().getTime();

function getTodaysDate() {
  let date = new Date(todaysDate);
  console.log("Milliseconds =" + date.toString());
}
getTodaysDate();*/

/*const msToSecond = 1000;

const msDifference = welcomeDate.getTime() - todaysDate.getTime();

const secondsLeft = Math.ceil(msDifference / msToSecond);

backSoonElement.textContent = `${secondsLeft} seconds`;
console.log(secondsLeft);*/


const msToDay = 84600000;
const todaysDate = new Date()
const welcomeDate = new Date();

const welcomeElement = document.querySelector(".welcome");
const backSoonElement = document.querySelector(".backsoon"); // change to seconds for testing purposes
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

