// ~~~ Dating ~~~
var friends=3; cost=14;

document.getElementById('ticketNum').innerHTML += 3;
document.getElementById('ticketCost').innerHTML += "14.00";
document.getElementById('ttCost').innerHTML += friends*cost;

// ~~~ Shopping ~~~
var total=235.87; shirt=35; pants=75; shoes=60;

var finalCost=total-shirt-pants-shoes;

document.getElementById('bank').innerHTML += finalCost;
document.getElementById('addJacket').innerHTML += finalCost<=finalCost-70;

// ~~~ Pizza ~~~
var pizza=4*8; pizzaAfter=pizza/2.5; pizzaLeft=pizza/pizzaAfter;

document.getElementById('profPizza').innerHTML += pizzaAfter+" "+"students"+", "+pizzaLeft+" "+"pieces of pizza";

// ~~~ Monty's Mega Bar ~~~
var adult=12; child=6; drinks=1.50;
var adultTotal=adult*2; drinkTotal=drinks*3;

document.getElementById('Monty').innerHTML +=adultTotal+child+drinkTotal;

// ~~~ Avg. Tips ~~~
var week1=202.45; week2=134.97; week3=256.63; week4=178.22;

var weekTotal=week1+week2+week3+week4;

document.getElementById('tips').innerHTML +=weekTotal/4;