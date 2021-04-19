var text="ABABCC"
var res={}
for(let ch of text){
    if(ch in res){
        
        console.log(ch +" is the first recursive chracter");
        break;
    }
  
    else{
        res[ch]=1;
    }

}