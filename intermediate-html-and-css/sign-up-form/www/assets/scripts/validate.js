let btn = select(".submit"),
	fname = select("#fname"),
	lname = select("#lname"),
	email = select("#email"),
	phone = select("#phone"),
	password = select("#password"),
	confirmPass = select("#confirmPass");

const form = [fname, lname, email, phone, password, confirmPass];

function validateForm() {
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

btn.addEventListener("click", validateForm);
