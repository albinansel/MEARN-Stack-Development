var arr=[1,2,11,7,8,9]
var evens=arr.filter(num=>num%2==0)
console.log(evens);


var employees=[
    {eid:1000,ename:"ajay",salary:25000,desig:"developer"},
    {eid:1001,ename:"vijay",salary:26000,desig:"qa"},
    {eid:1002,ename:"ram",salary:24000,desig:"developer"},
    {eid:1003,ename:"ravi",salary:25000,desig:"mrkt"},
]
// find employees whose salary >25000
var emps=employees.filter(emp=>emp.salary>25000)
console.log(emps);

var emps=employees.filter(emp=>emp.desig=="developer")
console.log(emps);