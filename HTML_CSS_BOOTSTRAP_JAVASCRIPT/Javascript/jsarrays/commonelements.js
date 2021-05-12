var arr = [10, 20, 30, 40];
var arr2 = [9, 10, 20, 21, 22,];
var i, j;

for (i of arr) {
    
    for (j of arr2) {
        var flag=0;
        if (i == j) {
            console.log(i +" is a common element");
            flag = 1;
            break;
        }
    }
}


// if (flag<1) {
//     console.log("No common elements");
// }