function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$/
const emailRegex = /^[A-Za-z]{1,}[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/;


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelector(".close");
const submitButton = document.querySelector(".btn-submit");
const formData = document.querySelectorAll(".formData");
const content = document.querySelector(".content");

const firstNameInput = document.getElementById("first")
const firstNameError = document.querySelector(".firstNameError")

const emailInput = document.getElementById("email")
const emailError = document.querySelector(".emailNameError")

const validElements = {
  firstNameIsValid : false,
  lastNameIsValid: false,
  emailIsValid: false,
  birthdayIsValid: false,
  isParticipationValid: false
}

function manageDisableButton() {
  // Quand ça sera fini remplacer some par every
  submitButton.disabled = !Object.values(validElements).some(item => item)
}


firstNameInput.addEventListener("input", () => {
  validateInput(firstNameInput, regex, firstNameError, 'firstNameIsValid' );
});

emailInput.addEventListener("input", () => {
  validateInput(emailInput, emailRegex, emailError, 'emailIsValid' );
});

function validateInput(input, regex, errorElement, isValidParameter) {
  console.log(validElements)

  if (!regex.test(input.value)) {
    errorElement.style.display = "block";
    input.classList.add("field-error");
    validElements[isValidParameter] = false
    // return false;
  } else {
    errorElement.style.display = "none";
    input.classList.remove("field-error");
    validElements[isValidParameter] = true
    // return true;
  }
  manageDisableButton()  
}


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
modalBtnClose.addEventListener("click", function() {
  modalbg.style.display = "none";
});

function validate() {
  console.log(validElements)
}