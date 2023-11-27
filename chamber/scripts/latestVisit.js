const lastVisitElement = document.querySelector("#lastVisit");

let lastVisit = localStorage.getItem("lastVisit-ls");
let today = Date.now();

if (lastVisit == null) {
    lastVisitElement.textContent = "Welcome! Let us know if you have any questions.";
} else if((today - lastVisit) <= 86400000){
    lastVisitElement.textContent = "Back so soon! Awesome!";
} else {
    let numOfDays = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));
    lastVisitElement.textContent = `You last visited ${numOfDays} days ago.`;
}

localStorage.setItem("lastVisit-ls", today)