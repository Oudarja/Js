var text="Bangladesh";
//length is property of object text where text is a object of string class
var len=text.length;
document.write(len+"<br>");
//It will prompt the name from user in server
//var name= prompt("Enter you'r name: ");
//document.write(name);
//printing the character of string at particular posiiton
document.write(text.charAt(2)+"<br>");
//Converting from lowercase to upper case
text=text.toUpperCase();
document.write(text+"<br>");
text=text.toLowerCase();
document.write(text+"<br>");
//Concatanate using library function
var text1="Oudarja ";
var text2="Barman tanmoy";
var newtext=text1.concat(text2);
document.write(newtext+"<br>");
newtext=text.slice(0,2);
document.write(newtext+"<br>");
newtext=text.slice(3,5);
document.write(newtext);
