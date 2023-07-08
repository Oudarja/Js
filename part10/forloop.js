for(var x=1;x<=10;x++)
{
  if(x%2)
     document.write(x+" ");
}
document.write("<br>");
x=1;
while(x<=10)
{
  if(x%2==0)
  document.write(x+" ");
  x++;
}
document.write("<br>");
var fac=1;
for(var i=1;i<=100;i++)
{
   fac*=i;
   document.write("Factorial of "+i+" is : "+fac+"<br>");
}
document.write("<br>");
//do while loop
var i=1;
do
{
  document.write(i+"<br>");
  i++;
}
while(i<=10);
