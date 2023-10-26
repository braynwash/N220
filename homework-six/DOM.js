let list = document.querySelector('ul')

//1 
document.getElementById("title").innerHTML = "DOM Manipulation";

//2 
document.querySelector('#container').style.backgroundColor="lightblue";

//3
let newLi = document.createElement('li');
let newLiText = document.createTextNode("Item 7");
newLi.appendChild(newLiText);
list.appendChild(newLi);

//4 
document.getElementsByTagName('li')[0].style.color="red";

//5
document.getElementsByTagName('li')[2].style.backgroundColor="pink";

//6 The fifth item should have a yellow background  
document.getElementsByTagName('li')[4].style.backgroundColor="yellow";

//7 The seventh item should have a lightGray background with royalBlue text  
document.getElementsByTagName('li')[6].style.backgroundColor="lightgray";
document.getElementsByTagName('li')[6].style.color="royalBlue";

//8
let nameLi = document.createElement('li');
let nameLiText = document.createTextNode("Jeremy Black");
nameLi.appendChild(nameLiText);
list.appendChild(nameLi);

//9


//10 Add a italic element around the button text and make the background rebeccapurple with white text and a white border.
document.querySelector('button').style.backgroundColor="rebeccapurple";
document.querySelector('button').style.color="white";
document.querySelector('button').style.borderColor="white";
document.querySelector('button').style.fontStyle="italic";