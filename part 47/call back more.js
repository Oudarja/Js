function task1(callback){
document.write("One<br>");
callback();
}
function task2(callback)
{
 //asynchronous function
 setTimeout(function()
 {
   document.write("two<br>");
   callback();
 },2000);
}
function task3(callback){
document.write("three<br>");
callback();
}
function task4(callback){
document.write("Four<br>");
callback();
}
function task5(){
document.write("Five<br>");
}
task1(function f1(){
  task2(function f2(){
    task3(function f3(){
      task4(function f4(){
        task5();
      });
    });
  });
});
