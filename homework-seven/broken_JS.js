console.log("Hello!");

let playerChoice = document.getElementsByClassName("choice");
      let compArray = ["Rock", "Paper", "Scissors"];
      let innerScore = 0;

      function RPS(num) {
        let compDecision = compArray[Math.floor(Math.random() * compArray.length)];
     
        document.getElementById("resultDecision").innerHTML = "The computer chose: " + compDecision;
        
        if (num == 0) {
          if (compDecision == "Paper") {
            innerScore -= 1;
          } if (compDecision == "Scissors") {
            innerScore += 1;
          }
        }

        if (num == 1) {
          if (compDecision == "Scissors") {
            innerScore -= 1;
          } if (compDecision == "Rock") {
            innerScore += 1;
          }
        }

        if (num == 2) {
          if (compDecision == "Rock") {
            innerScore -= 1;
          } if (compDecision == "Paper") {
            innerScore += 1;
        }
      }
      
      if (num == 3) {
          innerScore -= 0.5;
        }

        document.getElementById("score").innerHTML = "Score: " + innerScore;
      }