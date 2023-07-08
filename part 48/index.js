document.write("welcome<br>");
//creating promise
 const promise1= new Promise((resolve,reject)=>{
  let completedpromise=false;
  if(completedpromise)
    resolve("completed for promise 1<br>");
  else
    reject("Not completed for promise 1<br>");
});
document.write("end<br>");
promise1
.then((res)=>{
  document.write(res);
})
.catch((res)=>{
  document.write(res);
});
const promise2= new Promise((resolve,reject)=>{
 let completedpromise=true;
 if(completedpromise)
   resolve("completed for promise 2<br>");
 else
   reject("Not completed for promise 2<br>");
});
promise2
.then((res)=>{
 document.write(res);
})
.catch((res)=>{
 document.write(res);
});
const promise3= new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("completed for promise 3<br>");
  },1000);
});


const promise4= new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve("completed for promise 4<br>");
 },2000);
});

Promise.race([promise3,promise4]).then((res)=>{
  document.write(res);
});
