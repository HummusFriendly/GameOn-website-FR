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
const birdthdayRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const quantityRegex = /^[1-9][0-9]?$|^100$/;
const locationRegex = /^[San Francisco]*[New York]*[Seattle]*[Chicago]*[Boston]*[Portland]*$/
const checkboxRegex = /^[on]*$/

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelector(".close");
const modalBtnSubmit = document.querySelector(".submit");
const submitButton = document.querySelector(".btn-submit");
const formData = document.querySelectorAll(".formData");
const content = document.querySelector(".content");
const reserveElement = document.querySelector('.modal-confirmation');
const mainModal = document.querySelector('.modal-body');




const firstNameInput = document.getElementById("first")
const firstNameError = document.querySelector(".firstNameError")

const lastNameInput = document.getElementById("last")
const lastNameError = document.querySelector(".lastNameError")

const emailInput = document.getElementById("email")
const emailError = document.querySelector(".emailNameError")

const birthdateInput = document.getElementById("birthdate")
const birthdateError = document.querySelector(".birthdateNameError")

const quantityInput = document.getElementById("quantity")
const quantityError = document.querySelector(".quantityError")

const locationInput = document.getElementById("location")
const locationError = document.querySelector(".locationError")

const checkboxInput = document.getElementById("checkbox1")
const checkboxError = document.querySelector(".checkboxError")

const validElements = {
  firstNameIsValid : false,
  lastNameIsValid: false,
  emailIsValid: false,
  birthdayIsValid: false,
  quantityIsValid: false,
  locationIsValid: false,
  checkboxIsValid: false,
}

function manageDisableButton() {
  submitButton.disabled = !Object.values(validElements).every(item => item)
}

firstNameInput.addEventListener("blur", () => {
  validateInput(firstNameInput, regex, firstNameError, 'firstNameIsValid');
});

lastNameInput.addEventListener("blur", () => {
  validateInput(lastNameInput, regex, lastNameError, 'lastNameIsValid');
});

emailInput.addEventListener("blur", () => {
  validateInput(emailInput, emailRegex, emailError, 'emailIsValid');
});

birthdateInput.addEventListener("blur", () => {
  validateInput(birthdateInput, birdthdayRegex, birthdateError, 'birthdayIsValid');
});

checkboxInput.addEventListener("input", () => {
validateInput(checkboxInput, checkboxRegex, checkboxError, 'checkboxIsValid');
});

quantityInput.addEventListener("input", () => {
  validateInput(quantityInput, quantityRegex, quantityError, 'quantityIsValid');
});

locationInput.addEventListener("input", () => {
  document.querySelector('input[name="location"]:checked').value
  validateInput(document.querySelector('input[name="location"]:checked'), locationRegex, locationError, 'locationIsValid');
});

checkboxInput.addEventListener("input", () => {
  if (checkboxInput.checked) {
    checkboxInput.value = "on"
  } else {
    checkboxInput.value = "off" 
  }
}); 

modalBtnSubmit.addEventListener("click", () => {
  reserveElement.style.display = "block"
  mainModal.style.display = "none"
});

function validateInput(input, regex, errorElement, isValidParameter) {
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
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Remettre les valeurs à 0 lorsqu'on quitte
function launchModal() {
  firstNameInput.value = ""
  lastNameInput.value = ""
  emailInput.value = ""
  birthdateInput.value = ""
  quantityInput.value = ""
  modalbg.style.display = "block";
}

modalBtnClose.addEventListener("click", function() {
  modalbg.style.display = "none";
  reserveElement.style.display = "none"
  mainModal.style.display = "block"
});

function validate() {
  console.log(validElements)
}