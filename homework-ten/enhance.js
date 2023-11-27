var passForm = document.forms[0];

var passBtn = passForm.getElementsByTagName("img")[0];

passBtn.addEventListener("click", showPassword);

function showPassword() {
  var imgSrc = passBtn.getAttribute("src");
  console.log("Clicked!");
  var hidePassImg = imgSrc.indexOf("hide");
}
