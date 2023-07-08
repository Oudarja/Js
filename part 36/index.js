const names=["s1","s2","s3"];
for(var name of names)
{
  document.write(name);
}
document.write("<br>");
for(var x in names)
{
  document.write(names[x]);
}
document.write("<br>");
//object iteration
var students=
{
  Id:101,
  name:"Oudarja barman",
  cgpa:2.98
}

for(var x in students)
{
  document.write(x+" : "+students[x]+"<br>");
}
