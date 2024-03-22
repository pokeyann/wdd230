const pwd = document.querySelector("#password");
const pwd2 = document.querySelector("#password2");

const message = document.querySelector("#message"); //should this be in the form or outside of it, starting with outside.

pwd2.addEventListener("focusout", checkSame);

function checkSame() {
  if (pwd.value !== pwd2.value) {
    message.textContent = "Passwords do not match.";
    message.style.visibility = "show";
    pwd2.style.backgroundColor = "#fff0f3";
    pwd.value = "";
    pwd2.value = "";
    pwd.focus();

  } else {
    message.style.display = "none";
    pwd2.style.backgroundColor = "#fff";
    pwd2.style.color = "000";
  }
}

const ratingvalue = document.querySelector("#ratingvalue");
const range = document.getElementById("rating");

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
  ratingvalue.innerHTML = range.value;
}


