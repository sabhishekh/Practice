var studentdetails = {
    "name":"abhishekh",
    'total':0,
    age:21,gender:'male',
    marks:[38,36,67,42,56],
    avg:0
};
for(var i=0;i<studentdetails.mark.length;i++)
{
studentdetails.total +=studentdetails.marks[i];
}
studentdetails.avg=studentdetails.total/studentdetails.marks.length;
console.log("student details");
console.log("my name is"+studentdetails.name);
console.log("total is"+studentdetails.total);
console.log("age is"+studentdetails.age);
console.log("gender is"+studentdetails.gender);
console.log("avg is"+studentdetails.avg);
