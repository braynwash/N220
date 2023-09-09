function calcInterest() {
    let p = parseFloat(document.getElementById('principle').value);
    let r =  parseFloat(document.getElementById('rate').value);
    let t =  parseFloat(document.getElementById('time').value);
    var interestRate= p*r*t/100;
    var total=p+interestRate;
    document.getElementById('answer').innerHTML = "With a beginning principle of $" + p + " " + "and with a growth rate of " + r + "% for " + t + " " + "years, your total interest will be $" + interestRate + " " + "with a grand total of $" + total + ". ";
}

