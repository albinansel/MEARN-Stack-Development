// var num=9;
// for(let i=2; i<num; i++){
//     if (num%i==0) {
//         console.log(num+" is not a prime number");
//         break;
//     }
//     else{
//         console.log(num+" is a prime number");
//         break;
//     }
// }



var num=15;
var flag=0;
for(let i=2; i<num; i++){
    if (num%i==0) {
        flag=1;
        break;
    }
}
if (flag==0) {
    console.log("prime number");
}
else {
    console.log("not a prime number");
}


