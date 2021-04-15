var num1 = 400;
var num2 = 400;
var num3 = 400;

// method1

// if ((num1 == num2)&& (num2== num3)) {
//   console.log("All numbers are equal");
// }

// else if (num1 > num2) {
//   if (num1 > num3) {
//     console.log(num1 + "is larger");
//   }
// }

// else if (num2 > num3) {
//   console.log(num2 + "is larger");
// }
// else {
//   console.log(num3 + "is larger");
// }




// method2

if((num1>num2)&&(num1>num3))
 {
    console.log(num1 +" is larger");
 }
 else if((num2>num1)&&(num2>num3))
  {
    console.log(num2 +" is larger");
  }
else if((num3>num1)&&(num3>num1))
  {
    console.log(num3 +" is larger");
  }
 else{
    console.log("all nos are equal");
 }