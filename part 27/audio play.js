var len=document.querySelectorAll(".Myclass").length;
for(var i=0;i<len;i++)
{
document.querySelectorAll(".Myclass")[i].addEventListener("click",function()
{
 var text= this.innerHTML;
var audio;
   switch(text)
   {
     case"Dar um Jeito":
     audio=new Audio("audio/Dar um Jeito.mp3");
      audio.play();
      break;

      case"ICC Cricket World Cup 2015":
      audio=new Audio("audio/ICC Cricket World Cup 2015 .mp3");
       audio.play();
       break;
   }
});
}
