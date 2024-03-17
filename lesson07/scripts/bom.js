
const input = document.querySelector("#favchap");
const button = document.querySelector('button');
const list = document.querySelector("#list");

//button.addEventListener("click", () => {
//const inputValue = input.value;
//if (input.value != "") {
//input.focus(); note not used
//return; note not used
//}

button.addEventListener("click", () => {
  if (input.value !== "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  }
});

input.value = "";

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

function displayList(item) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  li.textContent = item;
  deleteButton.textContent = "❌";

  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    //deleteChapter.textContent = "li"; this does not work because li is not a string 
    deleteChapter(li.textContent);
    input.focus();
  });
  console.log("I do enjoy copying code, it's really hard!!");
  //input.focus(); during copy and paste, this was still here, not really sure if needed in this spot anymore
}

function setChapterList() {
  localStorage.setItem("BOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("BOMList"));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);

  chaptersArray = chaptersArray.filter((item) => item !== chapter);

  setChapterList();
}


