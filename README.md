# Average of Subject

## Description

Assuming that to pass the course it is necessary to present x partial exams of which the minimum grade to pass is a six.

## Usage

```Javascript

 let Grade=require("./Grade").Grade;
 let Subject=require("./Subject").Subject;
let arraygrade=[];

arraygrade.push(new Grade(5));
arraygrade.push(new Grade(6));
arraygrade.push(new Grade(10));
arraygrade.push(new Grade(9));
arraygrade.push(new Grade(3));
let subject=new Subject(arraygrade);

let calc=subject.calculate_average_grade();
console.log("Your final average is: "+calc.final_average);
console.log("                                         ");
if(calc.passedfailed===false)
{
    console.log("Sorry,you failed the subject");
}
else
{
    console.log("Congratulations,you passed the course");  
}



```