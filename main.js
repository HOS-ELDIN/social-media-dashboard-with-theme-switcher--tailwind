// let darkModeToggle = document.querySelector("label")
let darkModeToggle = document.querySelector("#dark");
let myPage = document.querySelector("html");
darkModeToggle.onchange = () => {
	console.log("checked");
	myPage.classList.toggle("dark");
};
