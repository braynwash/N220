let gradingScale = [
  "A",
  90,
  100,
  "B",
  80,
  89,
  "C",
  70,
  79,
  "D",
  60,
  69,
  "F",
  59,
  "lower",
];

//html selectors
var tableBody = document.querySelector("table");
var userPoints = document.getElementById("userPoints");
var userPercent = document.getElementById("userPercent");
var row = document.getElementsByTagName("td");

var table = () => {
  for (let i = 0; i < gradingScale.length; i += 3) {
    //iterate over the array- THE THREE IS FOR THE "SETS" IN THE ARRAY DO NOT FORGET THAT IT TOOK YOU FOREVER TO FIGURE THAT OUT
    var letterGrade = gradingScale[i];
    var lowGrade = gradingScale[i + 1];
    var highGrade = gradingScale[i + 2];
    tableBody.innerHTML += `<tr>
    <td id="letter">${letterGrade}</td>
    <td>${lowGrade} - ${highGrade}</td>
    </tr>`;
  }
};

// Call the populateTable function
table();

calcGrade = () => {
  //removes the selected class from any existing trs
  let selectedRows = document.querySelectorAll(".selected");
  selectedRows.forEach((row) => {
    row.classList.remove("selected");
  });

  //calculate the users grade
  let gradeInput = document.getElementById("gradeInput").value;
  if (gradeInput > 500 || gradeInput < 0) {
    //invalid input
    userPoints.innerHTML = `<p class="error">That is not a possible amount of points! Please try again.</p>`;
  } else if (gradeInput <= 500 && gradeInput >= 450) {
    //A
    // console.log("A!");
    userPoints.innerHTML = `You scored ${gradeInput} points.`;
    var gradePercent = parseFloat((gradeInput / 500) * 100);
    userPercent.innerHTML = `Your grade average: ${gradePercent.toFixed(2)}%`;
  } else if (gradeInput < 450 && gradeInput >= 400) {
    //B
    // console.log("B!");
    var gradePercent = parseFloat((gradeInput / 500) * 100);
    userPoints.innerHTML = `You scored ${gradeInput} points.`;
    userPercent.innerHTML = `Your grade average: ${gradePercent.toFixed(2)}%`;
  } else if (gradeInput < 400 && gradeInput >= 350) {
    //C
    // console.log("C!");
    userPoints.innerHTML = `You scored ${gradeInput} points.`;
    var gradePercent = parseFloat((gradeInput / 500) * 100);
    userPercent.innerHTML = `Your grade average: ${gradePercent.toFixed(2)}%`;
  } else if (gradeInput < 350 && gradeInput >= 300) {
    //D
    // console.log("D!");
    userPoints.innerHTML = `You scored ${gradeInput} points.`;
    var gradePercent = parseFloat((gradeInput / 500) * 100);
    userPercent.innerHTML = `Your grade average: ${gradePercent.toFixed(2)}%`;
  } else if (gradeInput < 300) {
    //F
    // console.log("F!");
    userPoints.innerHTML = `You scored ${gradeInput} points.`;
    var gradePercent = parseFloat((gradeInput / 500) * 100);
    userPercent.innerHTML = `Your grade average: ${gradePercent.toFixed(2)}%`;
  }
  //use the calculated % to find the grade scale to highlight

  if (gradePercent < 60) {
    row[8].parentNode.classList.add("selected");
  } else if (gradePercent < 70 && gradePercent >= 60) {
    row[6].parentNode.classList.add("selected");
  } else if (gradePercent < 80 && gradePercent >= 70) {
    row[4].parentNode.classList.add("selected");
  } else if (gradePercent < 90 && gradePercent >= 80) {
    row[2].parentNode.classList.add("selected");
  } else if (gradePercent <= 100 && gradePercent >= 60) {
    row[0].parentNode.classList.add("selected");
  }
};

// if (gradePercent >= 90) {
//   let letterGrade = gradingScale[0];
//   console.log("Got here");
//   console.log(`Your element is ${letterGrade}`);

// } else {
//   for (let i = 1; i < gradingScale.length; i += 3) {
//     let lowGrade = gradingScale[i + 3];
//     let highGrade = gradingScale[i];
//     if (gradePercent >= lowGrade && gradePercent < highGrade) {
//       // let row = document.getElementsByTagName("td")[i - 1].parentNode;S
//       let letterGrade = gradingScale[i + 2];
//       console.log(`Your element is ${letterGrade}`);
//       row[i - 1].parentNode.classList.add("selected");
//       console.log(row[i].parentNode.classList.add("selected"));
//       console.log(highGrade);
//       console.log("lowEnd", lowGrade);
//     }
//   }
// }
