
var cnt=0;
document.querySelector("textarea").addEventListener("keypress",function(event)
{
    cnt++;
  var text =event.key;
  document.querySelector("p").innerHTML=text+" and count is: "+cnt;
  //document.write(text);
});
