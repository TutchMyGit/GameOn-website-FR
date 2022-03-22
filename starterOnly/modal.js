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

// function for closing modal form
closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

// List of const REGEX check used in checking function
const regLetters = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/;
const regMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regNumbers = /^[0-9]/;
const regDate = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[01])$/;


// Function checking Name
function checkInputName(input) {
  if (input.value.length >= 2 && regLetters.test(input.value)) {
    return true;
  } else {
    return false;
  }
};


// Function checking Mail
function checkInputMail(input) {
  if (input.value.length > 0 && regMail.test(input.value)) {
    return true;
  } else {
    return false;
  }
};


// Setup max date as today minus 3 years
const naissance = document.getElementById("birthdate");
let today = new Date();
let days = today.getDate();
let months = today.getMonth()+1;
let years = today.getFullYear();

if (days<10){
  days="0"+days
}
if (months<10){
  months="0"+months
}

today = years-3+"-"+months+"-"+days;
document.getElementById("birthdate").setAttribute("max", today);

// Function checking Naissance
function checkInputNaissance(input) {
  if (input.value.length > 0 && regDate.test(input.value) && input.value < today) {
    return true;
  } else {
    return false;
  }
};


// Function checking concours
function checkInputConcours(input) {
  if (input.value.length > 0 && regNumbers.test(input.value)) {
    return true;
  } else {
    return false;
  }
};


// Function checking radio
function checkInputRadio(input) {
  for (let check of input) {
    if (check.checked) {
      return true;
    }
  }
  return false;
};


// Function checking condition-general //
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

const submitBtn = document.querySelector(".btn-submit");

// Validation function and submit listener so button doesnt refresh page
submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  // List of const for function put here so it doesnt use memory until button is clicked
  const prenom = document.getElementById("first");
  const famille = document.getElementById("last");
  const mail = document.getElementById("email");
  const concours = document.getElementById("quantity");
  const radio = document.querySelectorAll("input[type=radio]");
  const conditionGeneral = document.getElementById("checkbox1");
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
    modalValidationDisplay();
}
});

// Display Validation Message and button closing modal
const formBody = document.getElementsByName("reserve");

function modalValidationDisplay(){
  formBody[0].style.display = "none";
  const modalBody = document.getElementById("modal-body");
  const confirmMsg = document.createElement("div");
  const confirmBtn = document.createElement("div");
  modalBody.appendChild(confirmMsg);
  modalBody.appendChild(confirmBtn);
  confirmMsg.setAttribute("class", "confirmation");
  confirmMsg.innerHTML = "Merci !<br/>Votre réservation a été reçue.";
  confirmBtn.className = "btn-confirm";
  confirmBtn.innerHTML = "Fermer";
  confirmBtn.addEventListener("click", closeModal);
};


