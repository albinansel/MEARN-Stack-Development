var arr=[1,2,11,7,8,9]

var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);

var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);

var employees=[
    {eid:1000,ename:"ajay",salary:25000},
    {eid:1001,ename:"vijay",salary:26000},
    {eid:1002,ename:"ram",salary:24000},
    {eid:1003,ename:"ravi",salary:25000},
]

var emp=employees.reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1:emp2)
console.log(emp["ename"]+" "+emp["salary"]);

var lowsal=employees.reduce((emp1,emp2)=>emp1.salary<emp2.salary?emp1:emp2)
console.log(lowsal["ename"]+" "+lowsal["salary"]);

var srttemp=employees.sort((emp1,emp2)=>emp1.salary-emp2.salary)
console.log(srttemp);