var arr=[2,3,4];
var num=7;

for(let i of arr){
    for(let j of arr){
        if(i+j==num){
            console.log(i,j);
            
        }
    }
}