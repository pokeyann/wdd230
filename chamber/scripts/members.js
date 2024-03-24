const url = "https://github.com/pokeyann/wdd230/";
const membersurl = "https://pokeyann.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#cards");

async function getMembersData() {
  const results = await fetch(membersurl);
  const data = await results.json();
  console.log(data.members);
  console.log("Data received:", data)
  displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let address = document.createElement("p");
    let phoneNumber = document.createElement("p");
    let websiteURL = document.createElement("a");
    let imageFileName = document.createElement("img");
    let memberLevel = document.createElement("p");
    let otherInfo = document.createElement("p");

    name.textContent = member.name;
    address.textContent = member.address;
    phoneNumber.textContent = member.phoneNumber;
    websiteURL.a = member.websiteURL;

    imageFileName.src = member.imageFileName;
    imageFileName.setAttribute("loading", "lazy");
    imageFileName.setAttribute("width", "200");
    imageFileName.setAttribute("height", "200");
    imageFileName.setAttribute("alt", `Logo for ${member.name}`);


    memberLevel.textContent = member.memberLevel;
    otherInfo.textContent = member.otherInfo;

    card.appendChild(imageFileName);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(websiteURL);
    card.appendChild(otherInfo);
    card.appendChild(memberLevel);

    cards.appendChild(card);

  });
}
