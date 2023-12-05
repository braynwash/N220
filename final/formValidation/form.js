// Email must contain @ and a period followed by AT LEAST two characters
// Password must be between 8 and 10 characters
// Passwords must match
// State must be two characters long and must match state abbreviations
// NOTE: a quick google search for HTML states dropdown can result in code for this looong dropdown.
// Zip code must be 5 numbers long
// Phone number must include 10 numbers in the following format xxx-xxx-xxxx
// Credit card must consist of 12 numbers
// After the user clicks the submit button, all the fields are validated. If there are any errors, the errors will appear next to the respective input field.

validForm = () => {
  console.log("Validate");
};

resetForm = () => {
  console.log("Reset");
};

document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validForm();
  });

document.getElementById("reset").addEventListener("click", function (event) {
  event.preventDefault();
  resetForm();
});
