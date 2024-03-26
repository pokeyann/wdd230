//const baseURL = "https://github.com/pokeyann/wdd230/";

const linksURL = "https://pokeyann.github.io/wdd230/data/links.json";
const weeks = document.querySelector(".weeks");

console.log("testing");

async function getLinksData() {
  console.log("calling");
  const result = await fetch(linksURL);
  console.log(result);
  const data = await result.json();
  console.log(data.lessons);

  displayLinks(data.lessons);
}

getLinksData();

const displayLinks = (lessons) => {
  lessons.forEach((week) => {
    let lesson = document.createElement("section");
    let url = document.createElement("li");
    let title = document.createElement("a");

    lesson.appendChild(url);
    lesson.appendChild(title);

    weeks.appendChild(lesson);

  });


}
/*
json: lessons lessons url title
html: 
div
section
h3
ul 
li
a
href*/