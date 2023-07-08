var val=new Array(5);
for(var i=0;i<5;i++)
{
   val[i]=prompt();
}

for(var i=0;i<val.length;i++)
 document.write(val[i]+"<br>");

document.write("<br>");

 val.push(100);

 for(var i=0;i<val.length;i++)
  document.write(val[i]+"<br>");

  val.pop();
  document.write("<br>");

  for(var i=0;i<val.length;i++)
   document.write(val[i]+"<br>");

   val.shift();

   for(var i=0;i<val.length;i++)
    document.write(val[i]+"<br>");
      document.write("<br>");
      val.unshift("runu");

      for(var i=0;i<val.length;i++)
       document.write(val[i]+"<br>");

   document.write("<br>");
var country1=["Bangladesh","India"];
var country2=["Pakistan","Nepal"];
var country=country1.concat(country2);

for(i=0;i<country.length;i++)
document.write(country[i]+"<br>");
