var num = 3;
var sum = 0;
var res = 0;
var i = 1;
while (i <= num) {
    res = res * 10 + num;
    sum=sum+res;
    console.log(res);
    i++;
}console.log("sum= "+sum);