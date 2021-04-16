var student={rol:100,sname:"vinu",course:"bca",total:150}


// print student name
console.log(student["sname"]);

// check for grade key is exist or not
console.log("grade" in student);

// add a new key value pair grade=plus
student["grade"]="bplus";
console.log(student["grade"]);

// update mark with current mark+50
student["total"]+=50;
console.log(student["total"]);




// for loop
for(let key in student){
    console.log(key);
    console.log(student[key]);
}