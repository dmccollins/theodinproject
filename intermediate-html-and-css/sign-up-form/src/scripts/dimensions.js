let dimensionsBox = document.createElement("div");
dimensionsBox.innerHTML = "* Screen width";

document.querySelector(".wrapper").appendChild(dimensionsBox);
dimensionsBox.classList.add("bottom-bar");

window.addEventListener("resize", function (e) {
	let width = window.innerWidth;
	dimensionsBox.innerHTML = `window.innerWidth = ${width}`;
});
