function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// ################## DOM ELEMENTS ##################
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBground = document.getElementById("bground");
//######################################################

// function close modal
function closeModal() {
  modalBground.style.display = "none";
}

// ################## CLOSE MODAL ON CLICK ##################
// icon (x)
document.getElementById("close-icon").onclick = closeModal;
// btn close success
document.getElementById("closeSuccess").onclick = closeModal;
// ######################################################

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}