//################## MINIMUM AGE ##################
const minAge = 13;

//################## MESSAGE IF ERRORS ##################
const messageName = "2 lettres minimum. Chiffre, espace, caractère spécial non autorisé. ";
const messageEmail = "Adresse E-mail invalide (exemple@yahoo.com).";
const messageBirthday = "Veuillez saisir une date valide (age min. 13 ans).";
const messageTournament = "Veuillez saisir un nombre (max.99).";
const messageCity = "Veuillez indiquer une ville";
const messageGeneralCondition = "Veuillez accepter les conditions d'utilisation"

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
const locationError = document.getElementById("cityLocation");
// General condition
const generalCondition = document.querySelectorAll("input[name='CG']");
const generalConditionError = document.getElementById("CG");

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

const validForm = () => {
    const checkedRadio = document.querySelector(
      "input[name='location']:checked"
    );
  
    return (
      validName(firstName.value) &&
      validName(lastName.value) &&
      validEmail(email.value) &&
      validBirthdate(birthdate.value) &&
      validQuantity(tournamentQuantity.value) &&
      checkedRadio !== null &&
      generalCondition.ckecked
    );
};
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
  
        errorField.textContent = messageTournament;
        errorField.classList.add("text-red");
    }
};

// Add/remove error message of location
const locationValidity = (errorField) => {
    const checkedRadio = document.querySelector("input[name='location']:checked");
  
    if (checkedRadio !== null) {
        errorField.textContent = "";
        errorField.classList.remove("text-red");
    }
    else {
        errorField.textContent = messageCity;
        errorField.classList.add("text-red");
    }
};

// Add/remove error message of general condition
const generalConditionValidity = (errorField) => {
    const checkedCG = document.querySelector("input[name='CG']:checked");
  
    if (checkedCG !== null) {
        errorField.textContent = "";
        errorField.classList.remove("text-red");
    }
    else {
        errorField.textContent = messageGeneralCondition;
        errorField.classList.add("text-red");
    }
};

// ################## DISPLAY SUCCESS MESSAGE SIGNIN ##################
const displaySuccessfullSignin = () => {
    document.getElementById("modalInscriptionForm").style.display = "none";
    document.getElementById("modalSuccessInscription").style.display = "block";
};

/*function displaySuccessfullSignin() {
    document.getElementById("modalInscriptionForm").style.display = "none";
    document.getElementById("modalSuccessInscription").style.display = "block";
}*/

// ################## CHECK INPUT FIELD ##################
// Check first name validity oninput
firstName.oninput = () => {
    nameValidity(firstName, firstNameError);
};
firstName.addEventListener = () => {
    nameValidity(firstName, firstNameError);
};

// Check last name validity oninput
lastName.oninput = () => {
    nameValidity(lastName, lastNameError);
};
lastName.addEventListener = () => {
    nameValidity(lastName, lastNameError);
};  

// Check email validity oninput
email.oninput = () => {
    emailValidity(email, emailError);
};
email.addEventListener = () => {
    emailValidity(email, emailError);
};

// Check birthdate validity oninput
birthdate.oninput = () => {
    birthdateValidity(birthdate, birthdateError);
};
birthdate.addEventListener = () => {
    birthdateValidity(birthdate, birthdateError);
};

// Check tournament validity oninput
tournamentQuantity.oninput = () => {
    quantityValidity(tournamentQuantity, tournamentQuantityError);
};
tournamentQuantity.addEventListener = () => {
    quantityValidity(tournamentQuantity, tournamentQuantityError);
};

// Check location validity on selected city
locationRadio.forEach((btn) =>
    btn.addEventListener("change", () => {
        const checkedRadioButtons = document.querySelector("input[name='location']:checked");

        if (checkedRadioButtons !== null) {
            locationError.textContent = "";
            locationError.classList.remove("text-red");
        }
        else {
            locationError.textContent = messageCity;
            locationError.classList.add("text-red");
        }
    })
);

// Check general condition validity on ckecked
generalCondition.forEach((btn) =>
    btn.addEventListener("change", () => {
        const checkedCG = document.querySelector("input[name='CG']:checked");

        if (checkedCG !== null) {
            generalConditionError.textContent = "";
            generalConditionError.classList.remove("text-red");
        }
        else {
            generalConditionError.textContent = messageGeneralCondition;
            generalConditionError.classList.add("text-red");
        }
    })
);

// ################## CHECK FORM ##################
document.getElementById("modal-form").onsubmit = (event) => {
    event.preventDefault();

    nameValidity(firstName, firstNameError);
    nameValidity(lastName, lastNameError);
    emailValidity(email, emailError);
    birthdateValidity(birthdate, birthdateError);
    quantityValidity(tournamentQuantity, tournamentQuantityError);
    locationValidity(locationError);
    generalConditionValidity (generalConditionError);

    if (validForm()) {
        displaySuccessfullSignin();
    }
};