
function task1(){
  return new Promise((resolve,reject)=>{
   resolve("Task one is completed<br>");
  });
};
function task2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
   resolve("Task two is completed<br>");
 },2000);
});
}
function task3(){
  return new Promise((resolve,reject)=>{
   resolve("Task three is completed<br>");
  });
};
function task4(){
  return new Promise((resolve,reject)=>{
   resolve("Task four is completed<br>");
  });
};
function task5(){
  return new Promise((resolve,reject)=>{
   resolve("Task five is completed<br>");
  });
};

async function callalltask()
{
  try{
  const t1=await task1();
  document.write(t1);
  const t2=await task2();
  document.write(t2);
  const t3=await task3();
  document.write(t3);
  const t4=await task4();
  document.write(t4);
  const t5=await task5();
  document.write(t5);
}catch(err)
{
  document.write(err);
}
}
callalltask();
