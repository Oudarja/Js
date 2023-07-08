var c=document.getElementById("mycanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="green";
ctx.fillRect(11,11,379,279);
ctx.lineWidth=3;
ctx.strokeStyle="black";
ctx.strokeRect(10,10,380,280)
var centerx=c.width/2;
var centery=c.height/2;
ctx.beginPath();
ctx.arc(centerx,centery,70,0,2*Math.PI);
ctx.fillStyle="red";
ctx.fill();
ctx.stroke();
