let currentWin=100;
let newWin;
let winText = document.getElementById('wText');
let newText = document.getElementById('nw');


function rollDie() {
  let rNum = Math.floor(Math.random()*6)+1;
  console.log(currentWin);
  document.getElementById('cw').innerHTML = "Current winnings: " + currentWin;
  if (rNum==1) {
    newWin=currentWin*2;
    currentWin=currentWin*2;
    winText.innerHTML= "You rolled a " + rNum + "! <br> It is good to be number 1! You doubled your winnings!"
    newText.innerHTML = "New winnings: " + newWin;
    return currentWin;
  } else if (rNum==2) {
    newWin=0;
    winText.innerHTML= "You rolled a " + rNum + "! <br> Second best is not good enough. Roll again."
    rollDie();
  } else if (rNum==3) {
    currentWin=currentWin*0;
    newWin=0;
    winText.innerHTML= "You rolled a " + rNum + "! <br> Three is not a lucky number at all. You lose all your winnings!"
    newText.innerHTML = "New winnings: " + newWin;
    return currentWin;
  } else if (rNum==4) {
    newWin=400;
    currentWin=currentWin+400;
    winText.innerHTML= "You rolled a " + rNum + "! <br> Four is lucky like a four-leafed clover. You won 400 points!"
    newText.innerHTML = "New winnings: " + newWin;
    return currentWin;
  } else if (rNum==5) {
    newWin=0;
    winText.innerHTML= "You rolled a " + rNum + "! <br> Five Alive. You are still in the game, but there is no change in your winnings."
    newText.innerHTML = "New winnings: " + newWin;
    return currentWin;
  } else {
        let num = prompt("Pick a number between 1 and 100:");
        let target = 78;
        if (num==target) {
        newWin=currentWin*target;
        currentWin=currentWin*target
        winText.innerHTML= "You rolled a " + rNum + "! <br> You are lucky indeed! You just multiplied your winnings by your chosen number!";
        newText.innerHTML= "New winnings: " + newWin;
        return currentWin;
        } else if (num<=50) {
            newWin=num;
            currentWin=currentWin+num;
            winText.innerHTML= "You rolled a " + rNum + "! <br> You picked a rather low number, but you win those points.";
            return currentWin;
        } else {
            newWin=currentWin-10;
            currentWin=currentWin-10
            winText.innerHTML= "You rolled a " + rNum + "! <br> Good choice - but not what I was hoping for.";
            return currentWin;
        }
        
  }
}


