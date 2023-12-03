const baseURL="https://ibra1390.github.io/wdd230/";
const linksURL = "https://ibra1390.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}



getLinks();