
var students=[
      {
        id:1703002,
        name:"Oudarja barman tanmoy",
        cgpa:2.98
      },
      {
         id:1701015,
         name:"Shouharda barman niloy",
         cgpa:3.52
      },
      {
        id:1701034,
        name:"Mahbub",
        cgpa:3.34
      }
]

function studentnames()
{
  return students.filter(function(x){
    return x.cgpa>3;
  }).map(function(y){
    return y.name;
  });
}
document.write(studentnames());
