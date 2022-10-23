//Minimum age
const minAge = 13;
//################## Message if errors ##################
const messageName = "2 caractères minimum. Chiffre, espace inutile, caractère spécial non autorisé. ";
const messageEmail = "Adresse E-mail invalide (exemple@yahoo.com).";
const messageBirthday = "Veuillez saisir une date valide et avoir minimum 13 ans";

//################## DOM Elements ##################
// First name
const firstName = document.getElementById("first");
const firstNameError = document.querySelector("#first + p");
// Last name
const lastName = document.getElementById("last");
const lastNameError = document.querySelector("#last + p");
// Email
const email = document.getElementById("email");
const emailError = document.querySelector("#email + p");
// Birthdate
const birthdate = document.getElementById("birthdate");
const birthdateError = document.querySelector("#birthdate + p");

//################## Ckeckers ##################
// Check if name has minimum 2 characters, whithout number, without useless space and special character.
const isValidName = (name) => {
    const regex = /^[a-zA-Z]+[a-zA-Z -]*[a-zA-Z]$/;
  
    return regex.test(name);
};

// Check birthdate
const isValidBirthdate = (birthdate) => {
    const date = new Date(birthdate);
    const now = Date.now();
    const ONE_YEAR_IN_MILLISECONDS = 365.25 * 24 * 60 * 60 * 1000;
    const age = (now - date) / ONE_YEAR_IN_MILLISECONDS;

    return age >= minAge;
};

// ################## Add/remove error message ##################
// Add/remove error message of first name/last name
const nameValidity = (inputField, errorField) => {
    if (isValidName(inputField.value)) {
        inputField.classList.remove("border-red");

        errorField.textContent = "";
        errorField.classList.remove("text-red");
    } 
    else {
        inputField.classList.add("border-red");

        errorField.textContent = messageName;
        errorField.classList.add("text-red");
    }
};

// Add/remove error message of email
const emailValidity = (emailField, errorField) => {
    if (email.validity.valid) {
      emailField.classList.remove("border-red");
  
      errorField.textContent = "";
      errorField.classList.remove("text-red");
    } 
    else {
      emailField.classList.add("border-red");
  
      errorField.textContent = messageEmail;
      errorField.classList.add("text-red");
    }
};

// Add/remove error message of birthdate
const birthdateValidity = (birthdateField, errorField) => {
    if (isValidBirthdate(birthdateField.value)) {
      birthdateField.classList.remove("border-red");
  
      errorField.textContent = "";
      errorField.classList.remove("text-red");
    } else {
      birthdateField.classList.add("border-red");
  
      errorField.textContent = messageBirthday;
      errorField.classList.add("text-red");
    }
};

// ################## Check input field ##################
// Check first name validity
firstName.oninput = () => {
    nameValidity(firstName, firstNameError);
  };
firstName.addEventListener = () => {
    nameValidity(firstName, firstNameError);
};

// Check last name validity
lastName.oninput = () => {
    nameValidity(lastName, lastNameError);
  };
lastName.addEventListener = () => {
    nameValidity(lastName, lastNameError);
};  

// Check email validity:
email.oninput = () => {
    emailValidity(email, emailError);
  };
email.addEventListener = () => {
emailValidity(email, emailError);
};

// Check birthdate validity:
birthdate.oninput = () => {
    birthdateValidity(birthdate, birthdateError);
  };
birthdate.addEventListener = () => {
    birthdateValidity(birthdate, birthdateError);
};