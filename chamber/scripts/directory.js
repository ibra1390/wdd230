const baseURL = "https://ibra1390.github.io/wdd230/";
const linksURL = "https://ibra1390.github.io/wdd230/chamber/data/members.json";
let article = document.querySelector('#directory');

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    console.log(data.members);
    displayMembers(data.members);
  }

function displayMembers(members) {
    members.forEach((member) => {
        let section = document.createElement('section');
        let image = document.createElement('img');
        let company = document.createElement('p');
        let name = document.createElement('p');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('p');
        let url = document.createElement('a');
        let membership = document.createElement('p');
        
        image.setAttribute('src', member.image);
        company.textContent = `${member.company}`;
        company.setAttribute('class', "company");
        name.textContent = `${member.name}`;
        name.setAttribute("class", "name");
        phone.textContent = `${member.phone}`;
        phone.setAttribute("class","phone");
        address.textContent= `${member.address}`;
        address.setAttribute("class","address");
        website.textContent = ``;
        website.setAttribute("class","website");
        url.href = member.url;
        url.textContent = member.url;
        website.appendChild(url);
        membership.textContent = `${member.membership}`;
        membership.setAttribute("class","membership");
        
        section.appendChild(image);
        section.appendChild(company);
        section.appendChild(name);
        section.appendChild(phone);
        section.appendChild(address);
        section.appendChild(website);
        section.appendChild(membership);
        article.appendChild(section);
        
    });
} 

getMembers();