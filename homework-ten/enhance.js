var pass = document.getElementById("pass");
var passForm = document.forms[0];
var passBtn = passForm.getElementsByTagName("img")[0];

passBtn.addEventListener("click", showPassword);

function showPassword() {
  var imgSrc = passBtn.getAttribute("src");
  var hidePassImg = imgSrc.indexOf("hide");
  if (hidePassImg !== -1) {
    //^ if the index of the image is the index of the HIDDEN EYE image
    passBtn.setAttribute(
      "src",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/showPassIcon.png"
    );
    pass.setAttribute("type", "text");
    console.log("Shown!");
  } else {
    //^ if the index of the image is 51
    passBtn.setAttribute(
      "src",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/hidePassIcon.png"
    );
    pass.setAttribute("type", "password");
    console.log("Hidden!");
  }
}
