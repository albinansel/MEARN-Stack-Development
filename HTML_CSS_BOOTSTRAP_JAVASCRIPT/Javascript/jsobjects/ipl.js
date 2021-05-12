// array of objects

 var ipl=[
    {team_name:"rcb",mp:2,won:2,los:0,pts:4},
    {team_name:"mi",mp:2,won:1,los:1,pts:2},
    {team_name:"pb",mp:1,won:1,los:0,pts:2},
    {team_name:"dc",mp:2,won:1,los:1,pts:2},
    {team_name:"rr",mp:2,won:1,los:1,pts:2},
    {team_name:"kkr",mp:2,won:1,los:1,pts:1},
    {team_name:"srh",mp:2,won:0,los:2,pts:0},
    {team_name:"csk",mp:1,won:0,los:1,pts:0},

]
// print team name only
console.log("Team Names:");

for(let team of ipl){
    console.log(team["team_name"]);
}


console.log(" ");
// print rcb data

for(let team of ipl){
    if(team["team_name"]=="rcb"){
        console.log("RCB data" );
        console.log("matches played: " +team["mp"]);
        console.log("won           : " +team["won"]);
        console.log("loss          : " +team["los"]);
        console.log("points        : " +team["pts"]);
    }
}



console.log("");
// print highest point
var hp=0;
for(let team of ipl){
    if(team["pts"]>hp){
        hp=team["pts"];
    }
}
console.log("Highest point: " +hp);