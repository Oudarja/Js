//this a common constructer for every object
function Student(name,age,cgpa,lang)
{
  this.name=name;
  this.age=age;
  this.cgpa=cgpa;
  this.lang=lang;
//adding a function inside this constructor
this .display=function()
{
    document.write(this.name+"<br>");
    document.write(this.age+"<br>");
    document.write(this.cgpa+"<br>");
    document.write(this.lang+"<br>");
}
}

var student1=new Student("Oudarja Barman tanmoy",24,2.98,["Bengali,Hindi,English"]);
var student2= new Student("Shouharda Barman Niloy",23,3.52,["Bengali,English"]);
student1.display();
student2.display();
