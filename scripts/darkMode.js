const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener('click', () => {
	body.classList.toggle('dark');
	main.classList.toggle('dark');
});