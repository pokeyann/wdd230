
let temp = parseFloat(document.querySelector("#temp").textContent);
let speed = parseFloat(document.querySelector("#speed").textContent);
//let chill = parseFloat(document.querySelector("#chill").textContent);

//let chill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));

let windChill = calculateWindChill(temp, speed);

if (temp <= 50 && speed > 3) {
  windChill = windChill;
} else {
  windChill = "N/A";
}



document.querySelector("#chill").innerHTML = windChill;

function calculateWindChill(temp, speed) {
  let windChill = Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
  return windChill;
}