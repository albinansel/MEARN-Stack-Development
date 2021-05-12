var arr=[1,2,3,4,5,6,7,8,9,10];
var oddarr=[];
var evenarr=[];
for(let num of arr){
    if(num%2==0){
        evenarr.push(num);
    }
    else{
        oddarr.push(num);
    }
}  


console.log(evenarr);
console.log(oddarr);