 function task1(){
document.write("One<br>");
}
function dataloading()
{
  document.write("two<br>");
}
function task2()
{
  //asynchronous function
  setTimeout(function()
  {
    document.write("two<br>");
  },2000);
}
function task3(){
document.write("three<br>");
}
function task4(){
document.write("Four<br>");
}
function task5(){
document.write("Five<br>");
}
task1()
task2()
task3()
task4()
task5()
