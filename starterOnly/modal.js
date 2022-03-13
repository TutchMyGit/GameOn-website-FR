function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

// Submit check

// REGEX check
const regLetters = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/;
const regMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regNumbers = /^[0-9]/;
const regDate = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[01])$/;


// Call prenom and famille
const prenom = document.getElementById("first");
const famille = document.getElementById("last");

// Function checking Name
function checkInputName(input) {
  if (input.value.length >= 2 && regLetters.test(input.value)) {
    return true;
  } else {
    return false;
  }
};


// Call Mail
const mail = document.getElementById("email");

// Function checking Mail
function checkInputMail(input) {
  if (input.value.length > 0 && regMail.test(input.value)) {
    return true;
  } else {
    return false;
  }
};


// Call Naissance
const naissance = document.getElementById("birthdate");

// Function checking Naissance
function checkInputNaissance(input) {
  if (input.value.length > 0 && regDate.test(input.value)) {
    return true;
  } else {
    return false;
  }
};


// Call concours
const concours = document.getElementById("quantity");

// Function checking concours
function checkInputConcours(input) {
  if (input.value.length > 0 && regNumbers.test(input.value)) {
    return true;
  } else {
    return false;
  }
};


// Call radio
const radio = document.querySelectorAll("input[type=radio]");

// Function checking radio
function checkInputRadio(input) {
  for (let check of input) {
    if (check.checked) {
      return true;
    }
  }
  return false
};

// Call condition-general
const conditionGeneral = document.getElementById("checkbox1");

// Function checking condition-general
function checkInputCondition(input) {
  if (input.checked) {
    return true;
  } else {
    return false;
  }
};


// Error function
function checkError(text, id) {
  let span = document.createElement("span")
  span.innerText = text
  span.setAttribute("id", id)
  span.style.fontSize = "0.5em"
  span.style.color = "red"
  return span
};

// Function check if checkError already exist
function spanExist(test) {
  let checkSpan = document.getElementById(test)
  if (!checkSpan) {
    return false
  } else {
    return true
  }
};

//Remove function checkError
function deleteCheckError(spanToDelete) {
 if (spanToDelete)
   spanToDelete.remove()
};


// Validation
function validate() {
  if (!checkInputName(prenom) && !spanExist("firstName")) {
    document.getElementById("first").parentElement.appendChild(checkError("Veuillez entrer 2 caractères ou plus pour le champ du prenom.", "firstName"))
  } else if (checkInputName(prenom)){
    deleteCheckError(document.getElementById("firstName"))
  }
  if (!checkInputName(famille) && !spanExist("lastName")) {
    document.getElementById("last").parentElement.appendChild(checkError("Veuillez entrer 2 caractères ou plus pour le champ du nom.", "lastName"))
  } else if (checkInputName(famille)){
    deleteCheckError(document.getElementById("lastName"))
  }
  if (!checkInputMail(mail) && !spanExist("mail")) {
    document.getElementById("email").parentElement.appendChild(checkError("Veuillez entrer une adresse mail valide.", "mail"))
  } else if (checkInputMail(mail)){
    deleteCheckError(document.getElementById("mail"))
  }
  if (!checkInputNaissance(naissance) && !spanExist("dateNaissance")) {
    document.getElementById("birthdate").parentElement.appendChild(checkError("Vous devez entrer votre date de naissance.", "dateNaissance"))
  } else if (checkInputNaissance(naissance)) {
    deleteCheckError(document.getElementById("dateNaissance"))
  }
  if (!checkInputConcours(concours) && !spanExist("nombreConcours")) {
    document.getElementById("quantity").parentElement.appendChild(checkError("Vous devez entrer une valeur", "nombreConcours"))
  } else if (checkInputConcours(concours)) {
    deleteCheckError(document.getElementById("nombreConcours"))
  }
  if (!checkInputRadio(radio)  && !spanExist("optionTournoi")) {
    document.getElementsByClassName("checkbox-input")[0].parentElement.appendChild(checkError("Vous devez choisir une option.", "optionTournoi"))
  } else if (checkInputRadio(radio)){
    deleteCheckError(document.getElementById("optionTournoi"))
  }
  if (!checkInputCondition(conditionGeneral) && !spanExist("validationCondition")) {
    document.getElementById("checkbox1").parentElement.appendChild(checkError("Vous devez vérifier que vous acceptez les termes et conditions.", "validationCondition"))
  } else if (checkInputCondition(conditionGeneral)){
    deleteCheckError(document.getElementById("validationCondition"))
  }
  if (!checkInputName(prenom) || !checkInputMail(mail) || !checkInputNaissance(naissance) || !checkInputConcours(concours) || !checkInputRadio(radio) || !checkInputCondition(conditionGeneral)) {
    return false;
  }
  else {
    alert("Merci ! Votre réservation a été reçue.")
  }
  };