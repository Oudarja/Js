document.querySelector("#Checkbutton").addEventListener("click",function()
{
  var val=document.querySelector("#numtextfield").value;

try
{
  if(val<5)
  throw "input is too low";
  else if(val>10)
  throw "input is too high";
  else
  alert(val);
}catch(err)
{
alert(err);
}
});
