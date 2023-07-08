
var marks = prompt("Enter your number :<br>");

if (marks > 100 || marks < 0)
  document.write("Invalid");
else if (marks >= 80 && marks <= 100) {
  document.write("A+<br>");
} else if (marks >= 70 && marks <= 79) {
  document.write("A<br>");
} else if (marks >= 60 && marks <= 69) {
  document.write("A-<br>");
} else if (marks >= 50 && marks <= 59) {
  document.write("B<br>");
} else if (marks >= 40 && marks <= 49) {
  document.write("C<br>");
} else if (marks >= 33 && marks <= 39) {
  document.write("D<br>");
} else {
  document.write("Fail<br>");
}
