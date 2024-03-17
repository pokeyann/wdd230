
let temp = parseFloat(document.querySelector("#temp").textContent);
let speed = parseFloat(document.querySelector("#speed").textContent);
//let chill = parseFloat(document.querySelector("#chill").textContent);

//let chill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));

if (temp <= 50 && speed > 3) {
  windChill = "${windChill}&#176;F";
} else {
  windChill = "N/A";
}

let windChill = calculateWindChill(temp, speed);

document.querySelector("#chill").innerHTML = windchill;

function calculateWindChill(temp, speed) {
  let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  return windChill;
}