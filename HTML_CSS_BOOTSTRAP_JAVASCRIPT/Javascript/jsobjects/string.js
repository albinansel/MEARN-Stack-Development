var text="hello hai hello hai good"
var words=text.split(" ")
var result={}

for (let word of words){
   
     if(word in result){
         result[word]+=1;
     }
   
     else{
         result[word]=1;
     }

}
console.log(result);