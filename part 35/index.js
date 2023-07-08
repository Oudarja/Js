function addnumbers(x,y,z)
{
  return x+y+z;
}
let number=[1,2,3];

 document.write(addnumbers(...number)+"<br>");
//spread operator can be used in middle of numbers
var number1=[8,9,...number,4,5];
document.write(number1+"<br>");
//concatatnation using spread operator
var number2=[...number,...number1];
document.write(number2+"<br>");
//object concatatnationvar
 var ob1=
 {
   name:"oudarja barman",
   roll:1703002
}
var ob2=
  {
     sec:"A",
     institution:"RUET"
  }

  var ob={...ob1,...ob2};

  document.write(ob.name+"<br>"+ob.roll+"<br>"+ob.sec+"<br>"+ob.institution);
