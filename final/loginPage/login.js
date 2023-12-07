var createName;
var createPass;

// register ids
var CuserSubmit = document.getElementById("Cusername");
var CpassSubmit = document.getElementById("Cpw");
var confirmSubmit = document.getElementById("confirm");
var passError = document.getElementById("CpassError");
var confirmError = document.getElementById("confirmError");
var regComplete = document.getElementById("regComplete");

// login ids
var userSubmit = document.getElementById("username");
var passSubmit = document.getElementById("pw");
var userError = document.getElementById("userError");
var pwError = document.getElementById("pwError");
var logComplete = document.getElementById("logComplete");

var register = () => {
  let infoValid = true;
  createName = CuserSubmit.value;
  createPass = CpassSubmit.value;
  let createVal = /^.{8,10}$/;
  let confirm = confirmSubmit.value;
  //if any input is empty
  if (createName == "" || createPass == "" || confirm == "") {
    regComplete.innerText = `Form incomplete- please fill out each input!`;
    regComplete.classList.add("error");
    infoValid = false;
  } else {
    regComplete.innerText = " ";
    regComplete.classList.remove("error");
  }
  //if password is NOT between 8-10 char
  if (!createVal.test(createPass)) {
    passError.innerText = `Must be between 8-10 characters.`;
    infoValid = false;
  } else {
    passError.innerText = " ";
  }
  //if passwords do NOT match
  if (createPass != confirm) {
    confirmError.innerText = `The passwords must match.`;
    infoValid = false;
  } else {
    confirmError.innerText = " ";
  }
  //if no inputs are empty, password is 8-10 chars, and passwords match
  if (infoValid) {
    regComplete.classList.add("bold");
    regComplete.innerText = `Thank you ${createName} for registering!`;
  }
};

login = () => {
  let loginValid = true;
  let loginName = userSubmit.value;
  let loginPass = passSubmit.value;
  //if input is empty
  if (loginName == "" || loginPass == "") {
    logComplete.innerText = `Login incomplete- please fill out each input!`;
    logComplete.classList.add("error");
    loginValid = false;
    //if username + pass isnt valid
  } else if (loginName != createName || loginPass != createPass) {
    logComplete.innerText = `Your login information does not match those on file. Please try again.`;
    loginValid = false;
  } else {
    logComplete.innerText = "";
  }

  if (loginValid) {
    logComplete.classList.remove("error");
    logComplete.innerText = `Congratulations! You are logged in.`;
  }
};

document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (event) {
    event.preventDefault();
    register();
  });

document
  .getElementsByTagName("form")[1]
  .addEventListener("submit", function (event) {
    event.preventDefault();
    login();
  });
