var num=2;
var lowerlimit=8;
var upperlimit=28;
var res;
var i=1;
while(i<upperlimit){
     res=i**num;
       if (res>=lowerlimit && res<=upperlimit) {
          console.log(i);
        }
    i++ 
}