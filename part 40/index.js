var number=[10,20,30,11,40];
//array destructure
var [num1,num2,num3,num5]=number;
document.write(num1+"<br>");
var [num1,num2,...num3]=number;
document.write(num3+"<br>");
//swap variable
var a=10,b=20;
[a,b]=[b,a];
document.write(a+" "+b+"<br>");
//object destructure
var studentInfo=
{
  id:1703002,
  fullname:"Oudarja",
  cgpa:2.98,
  language:
  {
    native:"bangla",
    beginner:"English"
  }
}
//object destructure
var {fullname,id}=studentInfo;
document.write(id+" "+fullname+"<br>");
//nested object destructure
var {language}=studentInfo;
document.write(language.beginner+"<br>");
var {native}=language;
document.write(native+"<br>");
//function parameter destructure
//here function parameter has been destructured
function display({fullname,id})
{
  document.write(fullname);
}
display(studentInfo);
