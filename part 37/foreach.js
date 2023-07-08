
var number=[10,20,30,40]

for(var x=0;x<number.length;x++)
{
  document.write(number[x]+" ");
}

document.write("<br>")
//foreach
number.forEach(function(x)
{
  document.write(x+" ");
});
// for each with 3 parameter
document.write("<br>")
number.forEach(function(x,index,arr)
{
  arr[index]=x+5;
});
document.write(number);
