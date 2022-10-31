//################## MINIMUM AGE ##################
const minAge = 13;

//################## MESSAGE IF ERRORS ##################
const messageName = "2 lettres minimum. Chiffre, espace, caractère spécial non autorisé. ";
const messageEmail = "Adresse E-mail invalide (exemple@yahoo.com).";
const messageBirthday = "Veuillez saisir une date valide (age min. 13 ans).";
const tournamentMessage = "Veuillez saisir un nombre (max.99).";
const cityMessage = "Veuillez indiquer une ville";

//################## DOM ELEMENTS ##################
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
// Tournament
const tournamentQuantity = document.getElementById("quantity");
const tournamentQuantityError = document.querySelector("#quantity + p");
// City
const locationRadio = document.querySelectorAll("input[name='location']");
const locationError = document.querySelector("#checkbox1 + p");

//################## CHECKERS ##################
// Check if the name has minimum 2 characters, whithout number, without space and special character.
const validName = (name) => {
    const regex = /^[a-zA-Z]+[a-zA-Z-]*[a-zA-Z]$/;
  
    return regex.test(name);
};

// Ckeck email
const validEmail = (email) => {
    const regex = /^[a-z0-9]+[a-z0-9_-]+@[a-z]+\.[a-z]{2,3}$/;
  
    return regex.test(email);
};

// Check birthdate
const validBirthdate = (birthdate) => {
    const date = new Date(birthdate);
    const now = Date.now();
    const yearMilliseconds = 365 * 24 * 60 * 60 * 1000;
    const age = (now - date) / yearMilliseconds;

    return age >= minAge;
};

// Check quantity
const validQuantity = () => {
    return (
        (tournamentQuantity.value) >= 0 &&
        (tournamentQuantity.value) <= 99 &&
        (tournamentQuantity.value) !== ""
    );
};

// Check radio
const validRadio = () => {
    document.querySelector("input[name='location']:checked");
} 

// Check form
// const validForm = () => {
//     return (
//         validName(firstName.value) &&
//         validName(lastName.value) &&
//         validEmail(email.value) &&
//         validBirthdate(birthdate.value) &&
//         validQuantity(tournamentQuantity.value) &&
//         validRadio(locationRadio) !== null
//     );
// };

// ################## ADD/REMOVE ERRORS MESSAGES ##################
// Add/remove error message of first name/last name
const nameValidity = (inputField, errorField) => {
    if (validName(inputField.value)) {
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
    if (validEmail(emailField.value)) {
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
    if (validBirthdate(birthdateField.value)) {
        birthdateField.classList.remove("border-red");
    
        errorField.textContent = "";
        errorField.classList.remove("text-red");
    }
    else {
        birthdateField.classList.add("border-red");
    
        errorField.textContent = messageBirthday;
        errorField.classList.add("text-red");
    }
};

// Add/remove error message of tournament
const quantityValidity = (quantityField, errorField) => {
    if (validQuantity(quantityField.value)) {
        quantityField.classList.remove("border-red");
    
        errorField.textContent = "";
        errorField.classList.remove("text-red");
    }
    else {
        quantityField.classList.add("border-red");
  
        errorField.textContent = tournamentMessage;
        errorField.classList.add("text-red");
    }
};

// Add/remove error message of location
const locationValidity = (errorField) => {
    if (validRadio (errorField)) {

        errorField.textContent = "";
        errorField.classList.remove("text-red");
    }
    else {
        errorField.textContent = cityMessage;
        errorField.classList.add("text-red");
    }
};

// ################## CHECK INPUT FIELD ##################
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

// Check tournament validity
tournamentQuantity.oninput = () => {
    quantityValidity(tournamentQuantity,tournamentQuantityError);
};
tournamentQuantity.addEventListener = () => {
    quantityValidity(tournamentQuantity,tournamentQuantityError);
};

// Check radio validity
tournamentQuantity.addEventListener = () => {
    locationValidity(tournamentQuantityError);
};

// Check form
const checkForm = document.getElementById("modal-form").onsubmit = (event) => {
    event.preventDefault();

    nameValidity(firstName, firstNameError);
    nameValidity(lastName, lastNameError);
    emailValidity(email, emailError);
    birthdateValidity(birthdate, birthdateError);
    quantityValidity(tournamentQuantity, tournamentQuantityError);
    locationValidity(locationError);
};