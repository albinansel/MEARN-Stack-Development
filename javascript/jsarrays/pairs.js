var arr = [3, 2, 4, 1];
var num = 6;
var low = 0;
var upp = arr.length - 1;
var i;
var flag = 0;


arr.sort((i, j) => i - j);
console.log(arr);                     //[1,2,3,4]

// while (upp > 0) {


    for (i = low; i < upp; i++) {
        if ((arr[i] + arr[upp]) == num) {

            flag = 1;
            break;
        }
        else {
            low++;
        }
    }


//     upp--;
//     low = 0;
// }


if (flag > 0) {
    console.log(arr[i] + "," + arr[upp]);
}
else {
    console.log("Not found");
}