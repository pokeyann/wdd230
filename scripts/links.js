//const baseURL = "https://github.com/pokeyann/wdd230/";

const linksURL = "https://pokeyann.github.io/wdd230/data/links.json";
const weeks = document.querySelector(".weeks");

async function getLinksData() {
  const result = await fetch(linksURL);
  const data = await result.json();
  console.log(data.lessons);

  displayLinks(data.lessons);
}

getLinksData();

const displayLinks = (lessons) => {
  lessons.forEach((lesson) => {
    let weekHeading = document.createElement("h3");
    let linksList = document.createElement("ul");

    weekHeading.textContent = `Week ${lesson.week}`;

    weeks.appendChild(weekHeading);


    lesson.links.forEach((link) => {
      let listURL = document.createElement("li");
      let title = document.createElement("a");

      title.href = link.url;
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


