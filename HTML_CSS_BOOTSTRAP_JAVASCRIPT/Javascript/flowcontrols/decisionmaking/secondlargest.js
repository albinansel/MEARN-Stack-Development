var num1 = 3000;
var num2 = 1000;
var num3 = 2000;

if ((num1 == num2) & (num2 == num3)) {
    console.log("All numbers are equal");
}

else if (num1 == num2) {
    if (num1 < num3) {
        console.log(num1 + " is the second largest number");
    }
    else {
        console.log(num3 + " is the second largest number");
    }
}

else if (num1 == num3) {
    if (num1 < num2) {
        console.log(num1 + " is the second largest number");
    }
    else {
        console.log(num2 + " is the second largest number");
    }
}

else if (num2 == num3) {
    if (num1 < num2) {
        console.log(num1 + " is the second largest number");
    }
    else {
        console.log(num2 + " is the second largest number");
    }
}



else if (((num1 > num2) && (num1 < num3)) | ((num1 > num3) && (num1 < num2))) {
    console.log(num1 + " is the second largest number");
}

else if (((num2 > num1) && (num2 < num3)) | ((num2 > num3) && (num2 < num1))) {
    console.log(num2 + " is the second largest number");
}

else if (((num3 > num1) && (num3 < num2)) | ((num3 > num2) && (num3 < num1))) {
    console.log(num3 + " is the second largest number");
}

else {
    console.log("invalid numbers");
}