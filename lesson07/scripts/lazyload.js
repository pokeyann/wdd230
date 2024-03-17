let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentYearElement = document.getElementById("currentYear");
currentYearElement.textContent = currentYear;

let lastModified = document.lastModified;
let dateModified = document.getElementById("lastmodified");
dateModified.innerHTML = lastModified;