
const input = document.querySelector("#favchap");
const button = document.querySelector('button');
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  const inputValue = input.value;
  if (input.value != "") {
    //input.focus();
    //return;
  }

  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  li.textContent = inputValue;
  deleteButton.textContent = "❌";

  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    input.focus();

  });

  input.focus(); // 
  input.value = "";

});






