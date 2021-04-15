var num=123;
var sum=0;
while (num!=0) {                     
    var digit=num%10;               
    sum=sum+(digit**3);            
    num=Math.floor(num/10);       
}
console.log(sum);