var names_=new Array("Mina","Rabeya","Kolpona","Anis");
for(var i=0;i<names_.length;i++)
{
document.write(names_[i]+"<br>");
}
var newname=names_.sort();
document.write(newname+"<br>");
document.write(names_+"<br>");
//now sorting reverse order in desecending order
names_.reverse();
document.write(names_+"<br>");
//sorting number
var number=new Array("3","2","6","10","11","4");
document.write(number+"<br>");
//sorting in ascending order
number.sort(function(a,b)
{
  return (a-b);
});
document.write(number+"<br>");
//sorting in descending order
number.sort(function(a,b)
{
  return -(a-b);
});
document.write(number+"<br>");
