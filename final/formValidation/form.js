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
  console.log("Validate");
};

document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validForm();
  });
