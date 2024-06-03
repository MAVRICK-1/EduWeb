const form = document.querySelector("form"),
  nameField = form.querySelector(".name-field"),
  nameInput = nameField.querySelector(".name"),
  usernameField = form.querySelector(".username-field"),
  usernameInput = usernameField.querySelector(".username"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

// Name Validation
function checkName() {
  const namePattern = /^(?=.*[a-z])/;
  if (!nameInput.value.match(namePattern)) {
    return nameField.classList.add("invalid");
  }
  nameField.classList.remove("invalid");
}

// Username Validation
function checkUsername() {
  const usernamePattern = /^[a-z]{2,}$/;
  if (!usernameInput.value.match(usernamePattern)) {
    return usernameField.classList.add("invalid");
  }
  usernameField.classList.remove("invalid");
}

// Email Validation
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    return emailField.classList.add("invalid");
  }
  emailField.classList.remove("invalid");
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input");
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});

// Password Validation
function createPass() {
  const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid");
  }
  passField.classList.remove("invalid");
}

// Confirm Password Validation
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

// Calling function on form submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Preventing form submitting
  checkName();
  checkUsername();
  checkEmail();
  createPass();
  confirmPass();

  // Calling function on key up
  nameInput.addEventListener("keyup", checkName);
  usernameInput.addEventListener("keyup", checkUsername);
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !nameField.classList.contains("invalid") &&
    !usernameField.classList.contains("invalid") &&
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    window.location.href = "https://codewithsadee.github.io/eduweb/"; // Redirect to login page
  }
});
