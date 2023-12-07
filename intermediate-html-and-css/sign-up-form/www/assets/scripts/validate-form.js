function validateForm() {
	let validated = {
		password: false,
	};

	let pw1 = document.querySelector("#pw1");
	let pw2 = document.querySelector("#pw2");
	let errorMsg = document.querySelector("#passwordError");

	//// password
	if (pw1.value !== "" && pw2.value !== "" && pw2.value === pw1.value) {
		// if password fields are not empty and password fields match
		errorMsg.style.opacity = 0;
		pw1.style.borderColor = "#e5e7eb";
		pw2.style.borderColor = "#e5e7eb";
		validated.password = true;
	} else {
		// show error message
		errorMsg.style.opacity = 1;
		pw1.style.borderColor = "#b91c1c";
		pw2.style.borderColor = "#b91c1c";
		validated.password = false;
	}

	if (validated.password === true) {
		btn.setAttribute("form", "createAccount");
		btn.click();
	}
}
