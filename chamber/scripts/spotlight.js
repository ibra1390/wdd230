let spotlight = document.getElementById('spotlight');
const baseURL = "https://ibra1390.github.io/wdd230/";
const linksURL = "https://ibra1390.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.members);
    newObject(data.members);
}

function newObject(members){
    let membersObject= [];
    members.forEach((member) => {
        let membership = member.membership;
        if (membership == 'Silver' || membership == 'Gold'){
            membersObject.push(member)
        }
        
    });
    console.log(membersObject);
    randomMembers(membersObject);

} 

function randomMembers(members){
    let randomIndex1 = Math.floor(Math.random() * members.length);
    let member1= members[randomIndex1];
    members = members.filter(function(value) {
        return value !== member1;
    });
    
    let randomIndex2 = Math.floor(Math.random() * members.length);
    let member2= members[randomIndex2];
    members = members.filter(function(value) {
        return value !== member2;
    });

    let randomIndex3 = Math.floor(Math.random() * members.length);
    let member3= members[randomIndex3];

    let membersSpotlight = [member1, member2, member3];
    displayMembers(membersSpotlight);
}

function displayMembers(membersList){
    membersList.forEach((member)=>{

        let div=document.createElement('div');
        div.classList.add("division");
        let img = document.createElement('img');
        img.src = member.image;
        img.width = 100;
        img.height = 100;
        let name = document.createElement('p');
        name.textContent = `Name: ${member.name}`;
        let membership = document.createElement('p');
        membership.textContent = `Membership: ${member.membership}`;

       
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(membership);
        spotlight.appendChild(div);



    })

}

getMembers();