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
  lessons.forEach((lesson) => {
    let weekHeading = document.createElement("h3");
    let linksList = document.createElement("ul");

    weekHeading.textContent = `Week ${lesson.week}`

    weeks.appendChild(weekHeading);


    lesson.links.forEach((link) => {
      let listURL = document.createElement("li");
      let title = document.createElement("a");

      title.setAttribute = ("href", `${link.url}`);


      title.textContent = link.title;

      listURL.appendChild(title);
      linksList.appendChild(listURL);
    });

    weeks.appendChild(linksList);

  });


}

/*links.textContent = `${week.links}`;
    url.textContent = `${week.url}`;
    title.textContent = `${week.title}`;

    lesson.appendChild(links);
    lesson.appendChild(url);
    lesson.appendChild(title);

    weeks.appendChild(lesson); */

/* const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    //add paragraph for other info on card
    let portrait = document.createElement("img");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Potrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "300");
    portrait.setAttribute("height", "400");

    card.appendChild(fullName);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
} */
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