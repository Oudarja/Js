var heading3=document.createElement("h1");
var text=document.createTextNode("This is very unfortunate");
heading3.appendChild(text);
//div tag has been selected
var val=document.getElementsByClassName("my-div")[0];
val.appendChild(heading3);
//remove Child
//For removing child
var heading2=document.getElementsByTagName("h1")[1];
val.removeChild(heading2);
//add child before any getElements
var text=document.createTextNode("My name is Oudarja");
var heading1=document.getElementsByTagName("h1")[0];
var heading0=document.createElement("h1");
heading0.appendChild(text);
val.insertBefore(heading0,heading1);
var replaceheading=document.createElement("h1");
var text=document.createTextNode("My name is Sarthak");
replaceheading.appendChild(text);
val.replaceChild(replaceheading,heading0);
