const baseURL = "https://github.com/pokeyann/wdd230/";

const linksURL = "https://pokeyann.github.io/wdd230/data/links.json";

console.log(testing);
async function getLinksData() {
  console.log("calling");
  const result = await fetch(linksURl);
  consult.log(result);
  const data = await result.json();
  console.log(data);

}

getLinksData();