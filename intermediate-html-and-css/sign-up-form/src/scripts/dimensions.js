// create div
let dimensionsBox = document.createElement("div");

// give div "bottom-bar" class
dimensionsBox.classList.add("bottom-bar");

// show div
document.querySelector(".wrapper").appendChild(dimensionsBox);

// set width
let width = window.innerWidth;
dimensionsBox.innerHTML = width;

// reset width on window resize
window.addEventListener("resize", function (e) {
	width = window.innerWidth;
	dimensionsBox.innerHTML = width;
});
