/*So many rabbit holes, I'm not sure what's up or down, taking abreak and will come back and try again :(
  Need to fetch members.json
  Need to filter for only silver and gold memberLevel
  Need to show randomly each time load page
  Display random silver or gold member on spotlight section of chamber home page
  Current issue, console error data.filter is not a function at displaySpotlight*/


const url = "https://github.com/pokeyann/wdd230/";
const membersurl = "https://pokeyann.github.io/wdd230/chamber/data/members.json";
//const cards = document.querySelector("#cards");

async function getMembersData() {
  const results = await fetch(membersurl);
  const data = await results.json();
  return data;
}

//getMembersData();

async function displaySpotlight(data) {
  //const data = await getMembersData();
  if (!data) {
    console.error("Data is not available");
    return;
  }


  const getLevel = data.filter(member => member.memberLevel === "silver" || member.memberLevel === "gold");

  const spotlight = [];
  const maxSpotlight = Math.min(getLevel.length, 3);

  while (spotlight.length < maxSpotlight) {
    const randomIndex = Math.floor(Math.random() * getLevel.length);
    const randomSpotlight = getLevel[randomIndex];

    if (!spotlight.includes(randomSpotlight)) {
      spotlight.push(randomSpotlight);
    }
  }

  spotlight.forEach(member => {
    const spotlightElement = document.createElement("div");
    spotlightElement.textContent = member.name;

    const middleContainer = document.querySelector(".middle");
    if (middleContainer) {
      middleContainer.appendChild(spotlightElement);
    }

  });
}

(async () => {
  const data = await getMembersData();
  displaySpotlight(data);
})();




