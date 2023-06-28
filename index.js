
function validateForm() {
  var firstnameInput = document.getElementById("firstname");
  var lastnameInput = document.getElementById("lastname");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");



  var firstnameError = document.getElementById("firstname-error");
  var lastnameError = document.getElementById("lastname-error");
  var emailError = document.getElementById("email-error");
  var PasswordError = document.getElementById("password-error");


  var isValid = true;


		   if (firstnameInput.value.trim() === "") {
				firstnameError.innerHTML = "firstname cannot be empty.";
				isValid = false;
			} else {
				firstnameError.innerHTML = "";
			}

      		if (lastnameInput.value.trim() === "") {
				lastnameError.innerHTML = "lastname cannot be empty.";
				isValid = false;
			} else {
				lastnameError.innerHTML = "";
			}

			if (emailInput.value.trim() === "") {
				emailError.innerHTML = "looks like this is not an email.";
				isValid = false;
			} else {
				emailError.innerHTML = "";
			}

			if (passwordInput.value.trim() === "") {
				PasswordError.innerHTML = "password cannot be empty.";
				isValid = false;
			} else {
				PasswordError.innerHTML = "";
			}

			return isValid;
		}