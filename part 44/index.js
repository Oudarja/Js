class student
{
  constructor (id,name)
  {
    this.id=id;
    this.name=name;
  }
  set studentname(name)
  {
    this.name=name;
  }
  get studentinfo()
  {
    return this.id+" "+this.name;
  }
}

var s1=new student(101,"Anis");
document.write(s1.name+" ");
document.write(s1.id+"<br>");
s1.studentname="lalala";
document.write(s1.name+"<br>");
document.write(s1.studentinfo);
