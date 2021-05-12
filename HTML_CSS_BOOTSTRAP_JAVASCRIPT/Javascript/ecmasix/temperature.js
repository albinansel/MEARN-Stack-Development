var temp = [
       { distname: "tvm", temp: 25 },
       { distname: "ekm", temp: 26 },
       { distname: "tsr", temp: 27 },
       { distname: "apy", temp: 22 },
       { distname: "ktm", temp: 27 },
       { distname: "pkd", temp: 30 },
       { distname: "knr", temp: 28 },
       { distname: "tvm", temp: 24 },
       { distname: "ekm", temp: 25 },
       { distname: "tsr", temp: 29 },
       { distname: "apy", temp: 25 },
       { distname: "ktm", temp: 26 },
       { distname: "pkd", temp: 28 },
       { distname: "knr", temp: 29 },
]

var result = {}

for (let data of temp) {

       if (data["distname"] in result) {
              if (result[data["distname"]] < data["temp"]) {
                     result[data["distname"]] = data["temp"]
              }
       }
       else {
              result[data["distname"]] = data["temp"]
       }
}
console.log(result);






// for(var tem of temp){
//        res["distname"]=tem["distname"]
//        res["temp"]=0
//        if (res["temp"]<tem["temp"]{

//        }


//        // if(tem["distname"] in res){
//        //        if(res["temp"]<tem["temp"]){
//        //               res["temp"]=tem["temp"];
//        //        }
//        // }
//        // // else{
//        //        res=tem;
//        // }

//        console.log(res);
// }
