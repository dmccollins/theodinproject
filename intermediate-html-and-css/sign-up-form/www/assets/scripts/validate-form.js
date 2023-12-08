let validated = {
	name: false,
	email: false,
	password: false,
};

function validateForm() {
	//// name
	let fname = document.querySelector("#fname");
	let fnameErr = document.querySelector("#fnameErr");
	let lname = document.querySelector("#lname");
	let lnameErr = document.querySelector("#lnameErr");

	if (fname.value && lname.value) {
		fnameErr.style.opacity = 0;
		lnameErr.style.opacity = 0;
		fname.style.borderColor = "#e5e7eb";
		lname.style.borderColor = "#e5e7eb";
		validated.name = true;
	} else {
		if (!fname.value) {
			fnameErr.style.opacity = 1;
			fname.style.borderColor = "#b91c1c";
			validated.name = false;
		}
		if (!lname.value) {
			lnameErr.style.opacity = 1;
			lname.style.borderColor = "#b91c1c";
			validated.name = false;
		}
	}

	//// email

	//// password
	let pw1 = document.querySelector("#pw1");
	let pw2 = document.querySelector("#pw2");
	let passwordErr = document.querySelector("#passwordErr");

	if (pw1.value !== "" && pw2.value !== "" && pw2.value === pw1.value) {
		// if password fields are not empty and password fields match
		passwordErr.style.opacity = 0;
		pw1.style.borderColor = "#e5e7eb";
		pw2.style.borderColor = "#e5e7eb";
		validated.password = true;
	} else {
		// show error message
		passwordErr.style.opacity = 1;
		pw1.style.borderColor = "#b91c1c";
		pw2.style.borderColor = "#b91c1c";
		validated.password = false;
	}

	if (validated.password === true) {
		btn.setAttribute("form", "createAccount");
		btn.click();
	}
}
