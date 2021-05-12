var add=(num1,num2)=>num1+num2
console.log(add(1,2));

var sub=(num1,num2)=>num1-num2
console.log(sub(1,2));

var square=(num)=>num**2
console.log(square(2));

var cube=(num)=>num**3
console.log(cube(2));


// always subtract from largest number
var sub=(num1,num2)=>{
     if(num1<num2){

        let temp=num1;
        num1=num2;
        num2=temp;
     }
     return num1-num2;
}
console.log(sub(10,20));