var len=document.querySelectorAll(".Myclass").length;
for(var i=0;i<len;i++)
{
slelected=document.querySelectorAll(".Myclass")[i];
slelected.addEventListener("click",function()
{
  var text= this.innerHTML;
  document.querySelector("."+text).classList.add("anim");
  setTimeout(function(){
document.querySelector("."+text).classList.remove("anim");
  },2000)
   switch(text)
   {
     case"button1":
     audio=new Audio("audio/Dar um Jeito.mp3");
      audio.play();
      break;

      case"button2":
      audio=new Audio("audio/ICC Cricket World Cup 2015 .mp3");
       audio.play();
       break;
   }

});
}
