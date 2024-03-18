
const visitDisplay = document.querySelector(".visits");

let visitNumber = getVisitNumber() || 0;


function getVisitNumber() {
  return Number(window.localStorage.getItem("visitNumber"));
}

if (visitNumber !== 0) {
  visitDisplay.textContent = visitNumber;
} else {
  visitDisplay.textContent = "This is your first visit. Welcome!";
}

visitNumber++;

setVisitNumber();

function setVisitNumber() {
  localStorage.setItem("visitNumber", visitNumber);
}








