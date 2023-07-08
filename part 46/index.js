function square(x)
{
  document.write("Square of "+x+" is : "+x*x+"<br>");
}

 square(5);
//this possible to keep one function in varaible
const y=square;
y(100);
// getting function as a parameter in another function
function higherOrderFunction(num,callback)
{
  callback(num);
}
//square function is passed as parameter
higherOrderFunction(6,square);
