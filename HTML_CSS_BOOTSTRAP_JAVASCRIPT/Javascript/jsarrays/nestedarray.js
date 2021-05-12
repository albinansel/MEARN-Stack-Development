
var employees = [
    [1000, "ram", "developer", 225000],
    [1001, "ravi", "developer", 122000],
    [1002, "raju", "qa", 230000],
    [1003, "nikhil", "mrkt", 225000],

]

// for(let employee of employees){
//     console.log(employee[1]);
// }


// print emp names whose salary is >22000
// for(let employee of employees){
//     if (employee[3] > 22000) {
//         console.log(employee[1]);
//     }
// }


// print the no of developers 
var count = 0;
for (let employee of employees) {
    if (employee[2] == "developer") {
        count++;
    }

}
console.log(count);