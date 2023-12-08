// Email must contain @ and a period followed by AT LEAST two characters
// Password must be between 8 and 10 characters
// Passwords must match
// State must be two characters long and must match state abbreviations
// NOTE: a quick google search for HTML states dropdown can result in code for this looong dropdown.
// Zip code must be 5 numbers long
// Phone number must include 10 numbers in the following format xxx-xxx-xxxx
// Credit card must consist of 12 numbers
// After the user clicks the submit button, all the fields are validated. If there are any errors, the errors will appear next to the respective input field.

//---input ids---
//account
var email = document.getElementById("email");
var pw = document.getElementById("pw");
var confirm = document.getElementById("confirm");
//contact
var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var email = document.getElementById("email");
var address = document.getElementById("address");
var city = document.getElementById("city");
var state = document.getElementById("state");
var zip = document.getElementById("zip");
var phone = document.getElementById("phone");
//payment
var type = document.getElementById("type");
var cardNum = document.getElementById("cardNum");
var exp = document.getElementById("exp");

//---error ids---
//account
var emailError = document.getElementById("emailError");
var pwError = document.getElementById("pwError");
var confirmError = document.getElementById("confirmError");
//contact
var fError = document.getElementById("fError");
var lError = document.getElementById("lError");
var addError = document.getElementById("addressError");
var cityError = document.getElementById("cityError");
var stateError = document.getElementById("stateError");
var zipError = document.getElementById("zipError");
var phoneError = document.getElementById("phoneError");
//payment
var typeError = document.getElementById("typeError");
var cardError = document.getElementById("cardError");
var expError = document.getElementById("expError");

validForm = () => {
  let validForm = true;
  //---account---
  //email
  if (email.value == "") {
    emailError.innerText = "Please fill out this field!";
    emailError.classList.add("error");
    validForm = false;
  } else {
    emailError.innerText = " ";
    emailError.classList.remove("error");
  }
  //pw
  if (pw.value == "") {
    pwError.innerText = "Please fill out this field!";
    pwError.classList.add("error");
    validForm = false;
  } else {
    pwError.innerText = " ";
    pwError.classList.remove("error");
  }
  //confirm
  if (confirm.value == "") {
    confirmError.innerText = "Please fill out this field!";
    confirmError.classList.add("error");
    validForm = false;
  } else {
    confirmError.innerText = " ";
    confirmError.classList.remove("error");
  }
  //---contact----
  //first name
  if (fName.value == "") {
    fError.innerText = "Please fill out this field!";
    fError.classList.add("error");
    validForm = false;
  } else {
    fError.innerText = " ";
    fError.classList.remove("error");
  }
  //last name
  if (lName.value == "") {
    lError.innerText = "Please fill out this field!";
    lError.classList.add("error");
    validForm = false;
  } else {
    lError.innerText = " ";
    lError.classList.remove("error");
  }
  //address
  if (address.value == "") {
    addError.innerText = "Please fill out this field!";
    addError.classList.add("error");
    validForm = false;
  } else {
    addError.innerText = " ";
    addError.classList.remove("error");
  }
  //city
  if (city.value == "") {
    cityError.innerText = "Please fill out this field!";
    cityError.classList.add("error");
    validForm = false;
  } else {
    cityError.innerText = " ";
    cityError.classList.remove("error");
  }
  //state
  if (state.value == "") {
    stateError.innerText = "Please fill out this field!";
    stateError.classList.add("error");
    validForm = false;
  } else {
    stateError.innerText = " ";
    stateError.classList.remove("error");
  }
  //zip
  if (zip.value == "") {
    zipError.innerText = "Please fill out this field!";
    zipError.classList.add("error");
    validForm = false;
  } else {
    zipError.innerText = " ";
    zipError.classList.remove("error");
  }
  //phone
  if (phone.value == "") {
    phoneError.innerText = "Please fill out this field!";
    phoneError.classList.add("error");
    validForm = false;
  } else {
    phoneError.innerText = " ";
    phoneError.classList.remove("error");
  }
  //---payment---
  //type
  if (type.value == "empty") {
    typeError.innerText = "Please select a card type!";
    typeError.classList.add("error");
    validForm = false;
  } else {
    typeError.innerText = " ";
    typeError.classList.remove("error");
  }
  //cardNum
  if (cardNum.value == "") {
    cardError.innerText = "Please fill out this field!";
    cardError.classList.add("error");
    validForm = false;
  } else {
    cardError.innerText = " ";
    cardError.classList.remove("error");
  }
  //exp
  if (exp.value == "") {
    expError.innerText = "Please fill out this field!";
    expError.classList.add("error");
    validForm = false;
  } else {
    expError.innerText = " ";
    expError.classList.remove("error");
  }
  //if validForm is...
  if (!validForm) {
    document.getElementById(
      "regComplete"
    ).innerText = `One or more fields are incomplete. Please try again!`;
    document.getElementById("regComplete").classList.add("error");
  } else {
    document.getElementById(
      "regComplete"
    ).innerText = `You have successfully registered!`;
    document.getElementById("regComplete").classList.remove("error");
  }
};

document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validForm();
  });
