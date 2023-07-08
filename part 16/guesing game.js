//guess a number from 1 to 5
//Generate a random number between 1 to 5
//If the guess number matches random number ,then show message won else lost
//Run the game for 5 times
//Show the number of wons and lost
var test = 5;
var  numberofwon=0;
var numberofloss=0;
while (test--)
{
  var guessnumber = parseInt(prompt("Enter a  number from 1 to 5:"));
  var random = Math.floor(Math.random() * 5) + 1;
  if (random == guessnumber){
    document.write("You have won<br>");
   numberofwon++;
  }
  else{
    document.write("You have lost.The random number was "+random+"<br>");
  numberofloss++;
}

}
document.write("You have won "+numberofwon+" times<br>");
document.write("You have lost "+numberofloss+" times");
