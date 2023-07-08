number=[2,3,4,5];
var squarenumber=number.map(function(x){
  return x*x;
});
document.write(squarenumber);

number=[2,33,4,55,11,29];
document.write("<br>")
var newnumber=number.filter(function(x){
  return x>10;
})
document.write(newnumber);
