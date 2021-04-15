
//Program 1 : finding amstrong value for a number that having 3 digits.

// var num=153;
// var sum=0;
// while (num!=0) {                     //153!=0  ,   15            ,  1
//     var digit=num%10;               //3       ,   5             ,  1
//     sum=sum+(digit**3);            //27      ,   27+125=152    ,  153
//     num=Math.floor(num/10);       //15      ,   1             ,   0
// }
// console.log(sum);




// Program 2 : finding amstrong value for a number that having "n" of digits.

var num = 548834;
var dup = num;
var counter = 0;
var sum = 0;

while (num != 0) {
    var digit = num % 10;
    counter = counter + 1;
    num = Math.floor(num / 10);
}
// for reference
// console.log(counter);
// console.log(num);
// console.log(dup);

while (dup != 0) {
    var digit = dup % 10;
    sum = sum + (digit ** counter);
    dup = Math.floor(dup / 10);
}
console.log(sum);