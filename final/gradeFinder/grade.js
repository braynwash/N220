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

var tableBody = document.querySelector("table");

table = () => {
  for (let i = 0; i < gradingScale.length; i += 3) {
    //iterate over the array- THE THREE IS FOR THE "SETS" IN THE ARRAY DO NOT FORGET THAT IT TOOK YOU FOREVER TO FIGURE THAT OUT
    tableBody.innerHTML += `<tr>
    <td>${gradingScale[i]}</td>
    <td>${gradingScale[i + 1]} - ${gradingScale[i + 2]}</td>
    </tr>`;
  }
};

// Call the populateTable function
table();
