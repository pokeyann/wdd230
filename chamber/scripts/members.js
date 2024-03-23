const url = "https://github.com/pokeyann/wdd230/";
const membersurl = "https://github.com/pokeyann/wdd230/blob/main/chamber/data/members.json";

async function getMembersData() {
  const results = await fetch(membersurl);
  const data = await results.json();
  console.log(data);
}

getMembersData();
