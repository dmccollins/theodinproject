const select = (selector) => document.querySelector(selector);

let btn = select(".submit");

let fname = select("#fname");
let lname = select("#lname");
let email = select("#email");
let phone = select("#phone");
let password = select("#password");
let confirmPass = select("#confirm");

const form = [fname, lname, email, phone, password, confirmPass];

function validate() {
	for (let control in form) {
		let reg = new RegExp(form[control].pattern);
		if (form[control].value && reg.test(form[control].value)) {
			form[control].nextElementSibling.style.opacity = 0;
		} else {
			form[control].nextElementSibling.style.opacity = 1;
		}
	}
	if (password.value != confirmPass.value) {
		confirmPass.setCustomValidity("Try again");
		confirmPass.nextElementSibling.style.opacity = 1;
	} else {
		confirmPass.setCustomValidity("");
	}
}

btn.addEventListener("click", validate);

// let reg = new RegExp(form[0].pattern);
// console.log(reg.test(form[0].value));
