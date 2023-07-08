//number to string conversion
var num=20;
document.write(typeof(num)+"<br>");
//tostring(num)--->string
num=toString(num);
document.write(typeof(num)+"<br>");
//string to number conversion
//parseInt(string)--> num
num=parseInt(num);
document.write(typeof(num)+"<br>");
var num1="13.75234";
//To convert into float number to String
//parsefloat(string)---->float
num1=parseFloat(num1);
document.write(typeof(num1)+"<br>");
document.write(num1.toFixed()+"<br>");
document.write(typeof(num1.toFixed())+"<br>");
document.write(num1.toFixed(1)+"<br>");
document.write(num1.toPrecision(3)+"<br>");
document.write(num1.toPrecision(4)+"<br>");
document.write(typeof(num1.toPrecision(3))+"<br>");
//Number method can also be used to convert in number
num1=Number(num1);
document.write(num1+"<br>");
document.write(typeof(num1));
