var coinImg = document.getElementsByTagName("img")[0]; //selects img
var coinResult = document.getElementById("coinResult"); //selects result
var resultTable = document.getElementsByTagName("table")[0]; //selects table

let flips = 0; //sets initial flips to 0

headsTails = () => {
  flips += 1; //increases flips each time button is clicked
  let headsTails = Math.floor(Math.random() * 2) + 1;
  console.log(headsTails);
  if (headsTails == 1) {
    //heads is 1
    var result = "Heads";
    coinImg.setAttribute("src", "images/heads.jpg");
  } else {
    //tails is 2
    var result = "Tails";
    coinImg.setAttribute("src", "images/tails.png");
  }
  coinResult.innerText = `You got ${result}!`;
  resultTable.innerHTML += `
  <tr>
  <td>${flips}</td> 
  <td>${result}</td>
  </tr>`;
  console.log(result);
};
