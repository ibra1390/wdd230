const baseURL="https://ibra1390.github.io/wdd230/";
const linksURL = "https://ibra1390.github.io/wdd230/data/links.json";
let ul = document.getElementById('activities');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  }

  function displayLinks(weeks){
    weeks.forEach((week) => {
        let li = document.createElement('li');
        li.textContent = `${week["week"]}: `;
        
        aElements = week["links"];
        aElements.forEach((element)=>{
            let a = document.createElement('a');
            a.textContent = ` ${element["title"]} |`;
            a.href = `${element["url"]}`;
            li.appendChild(a);
        });
    
        ul.appendChild(li);
    });
  }

getLinks();