var num;
var lowerlimit = 5;
var upperlimit = 25;

for (num = lowerlimit; num <= upperlimit; num++) {
    for (let i = 2; i < num; i++) {
        var flag = 0;
        if (num % i == 0) {
            flag = 1;
            break;
        }

    }
    if (flag == 0) {
        console.log(num);
    }
}








// var num;
// var lowerlimit = 5;
// var upperlimit = 25;
// var flag=0;

// for (num = lowerlimit; num <= upperlimit; num++) {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {

//             break;
//         }
//         else {
//             console.log(num);
//         }
//         break;
//     }

// }





// var lowerlimit = 5;
// var upperlimit = 25;
// var num;
// var flag=0;

// num=lowerlimit;
// while(num <= upperlimit)
// {
//     for (var i = 2; i < num; i++) 
//     {
//         if (num % i == 0) 
//         {
//             flag=1;
//         }


//      } 


//      if (flag==0)
//      {
//        console.log(num);  
//       }
//   num++;
// }







