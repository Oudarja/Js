
var photos=["image/IMG_0339.jpg","image/IMG_0341.jpg","image/IMG_0383.jpg"];
var imgtag=document.querySelector("img");
var count=0;
function next()
{
  count++;
  imgtag.src=photos[count%3];
}

function prev()
{
  count--;
  imgtag.src=photos[(count+3)%3];
}
