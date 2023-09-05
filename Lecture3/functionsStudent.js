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

function test() {
    return true;
    return false;
}
