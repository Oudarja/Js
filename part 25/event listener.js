document.querySelector("#id1").addEventListener("click",function()
{
  alert("Hello");
});
document.querySelector("h1").addEventListener("mouseover",function(){
   document.querySelector("h1").classList.add("myclass");
});
document.querySelector("h1").addEventListener("mouseout",function(){
   document.querySelector("h1").classList.remove("myclass");
});
