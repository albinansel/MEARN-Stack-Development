var arr=[1,2,11,7,8,9]

var square=arr.map(num=>num**2)
console.log(square);

var cubes=arr.map(num=>num**3)
console.log(cubes);

var employees=[
    {eid:1000,ename:"ajay",salary:25000},
    {eid:1001,ename:"vijay",salary:26000},
    {eid:1002,ename:"ram",salary:24000},
    {eid:1003,ename:"ravi",salary:25000},
]

var enames=employees.map(emp=>emp["ename"])
console.log(enames);

var enames=employees.map(emp=>emp["ename"].toUpperCase())
console.log(enames);

var esal=employees.map(emp=>emp["salary"])
console.log(esal);