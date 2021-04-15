var num1 = 100;
var num2 = 200;
var num3 = 300;

if ((num1 == num2) && (num2 == num3)) {
    console.log("All numbers are equal");
}

else if (num1 == num2) {
    if (num1 > num3) {
        console.log(num1 + " " + num2 + " " + num3);
    }
    else{
        console.log(num3 + " " + num1 + " " + num2);
    }
}

else if (num1 == num3) {
    if (num1 > num2) {
        console.log(num1 + " " + num3 + " " + num2);
    }
    else{
        console.log(num2 + " " + num1 + " " + num3);
    }
}

else if (num2 == num3) {
    if (num2 > num1) {
        console.log(num2 + " " + num3 + " " + num1);
    }
    else{
        console.log(num1 + " " + num2 + " " + num3);
    }
}



else if ((num1 > num2) && (num1 > num3)) {

    if (num2 > num3) {
        console.log(num1 + " " + num2 + " " + num3);
    }
    else {
        console.log(num1 + " " + num3 + " " + num2);
    }
}

else if ((num2 > num1) && (num2 > num3)) {

    if (num1 > num3) {
        console.log(num2 + " " + num1 + " " + num3);
    }
    else {
        console.log(num2 + " " + num3 + " " + num1);
    }
}

else if ((num3 > num1) && (num3 > num2)) {

    if (num1 > num2) {
        console.log(num3 + " " + num1 + " " + num2);
    }
    else {
        console.log(num3 + " " + num2 + " " + num1);
    }
}

else{
    console.log("invalid numbers");
}





// method2

// if ((num1 == num2) && (num2 == num3)) {
//     console.log("All numbers are equal");
// }

// if (num1 == num2) {
//     if (num1 > num3) {
//         console.log(num1 + " " + num2 + " " + num3);
//     }
// }

// if (num1 == num3) {
//     if (num1 > num2) {
//         console.log(num1 + " " + num3 + " " + num2);
//     }
// }

// if (num2 == num3) {
//     if (num2 > num1) {
//         console.log(num2 + " " + num3 + " " + num1);
//     }
// }



// if ((num1 > num2) && (num1 > num3)) {

//     if (num2 > num3) {
//         console.log(num1 + " " + num2 + " " + num3);
//     }
//     else {
//         console.log(num1 + " " + num3 + " " + num2);
//     }
// }

// if ((num2 > num1) && (num2 > num3)) {

//     if (num1 > num3) {
//         console.log(num2 + " " + num1 + " " + num3);
//     }
//     else {
//         console.log(num2 + " " + num3 + " " + num1);
//     }
// }

// if ((num3 > num1) && (num3 > num2)) {

//     if (num1 > num2) {
//         console.log(num3 + " " + num1 + " " + num2);
//     }
//     else {
//         console.log(num3 + " " + num2 + " " + num1);
//     }
// }
