var number=[5,55,14,5,78];
var firstevennumber=number.find(function(x){
  return (x%2==0)
});
var firstevennumberindex=number.findIndex(function(x){
  return (x%2==0);
});
document.write(firstevennumber+"<br>");
document.write(firstevennumberindex+"<br>");
//Now the same procedure for object also
var students=[
{
  id:101,
  gpa:2.5
},
{
  id:102,
  gpa:3.5
},
{
  id:103,
  gpa:4.5
},
{
  id:104,
  gpa:5
}
]
var val=students.find(function(x){
   return x.gpa>4;
});

document.write(val.gpa+"<br>");
var index=students.findIndex(function(x){
   return x.gpa>4;
});
document.write(index);
