// General Notes
// Lets break down the structure!

function meow() {
 document.write("meow");
}

// This is a basic function! Functions act like codeblocks that contian several arguments for one procedure. The function specifies what it is, while "meow" is the name of the function.

// This function is NOT doing anything! It can only be used when it is "called," like...

meow();

// The function will now do as asked!

// function cat(hiss) {
//  let hiss = "angry";
// }

// "hiss" is a parameter! these are temporary variables that can be utilized in the function. parameters either can be specified within the function, or clarified later when the function is called.

// Change text

function changeTxt() {
    document.getElementById('changeTxt').innerHTML = "This text has been changed.";
}

changeTxt();

// noPram

function noPram() {
    document.write("This function does not take parameters.");
}

noPram();

// Hello World!

var greet = function() {
    console.log("Hello world!");
}

greet();

// favBand

var favBand="They Might Be Giants";

function favoriteBand(favBand) {
    document.getElementById('favBand').innerHTML = favBand;
}

favoriteBand(favBand);

// myName

function myName(first) {
    console.log(first);
}

myName('Jeremy');
myName("Casey");
myName(2);

// Rectangle

var recHeight=20; recWidth=34;

function recPerm(h,w) {
    let perimeter=2*h+2*w;
    return perimeter;
    // return functions null anything after it.
}

document.getElementById('panswer').innerHTML = recPerm(recHeight, recWidth); + " feet."


// Calculator

function calcArea() {
    let h = document.getElementById('height').value;
    let w = document.getElementById('width').value;
    var area=h*w;
    document.getElementById('answer').innerHTML = area;
}

// Challenge

function hello(r) {
    return "Hello " + r;
}
 
var rt="Love";
console.log(hello(rt));

// Multiple Values

function totalRec(h,w) {
    let perm = recPerm(h,w);
    let area = h*w;
    let recInfo = [perm, area]
    return recInfo;
}

document.getElementById('multiAnswer').innerHTML = "Perimeter: " + totalRec(recHeight, recWidth)[0] + "<br> Area: " + totalRec(recHeight, recWidth)[1];

// pop-up

function myFunction() {
    alert("Who goes there?");
}

// harry potter

function wizard(name, job) {
    document.getElementById('future').innerHTML = "Welcome " + name + ", the " + job + "!";
}

// last two

function addItem() {
    let item = prompt("Add Item:");
    console.log(item);
    alert("You added " + item + " to your list!");
}
