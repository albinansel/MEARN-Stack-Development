var clk=document.querySelector("#clk")

clk.addEventListener("click",()=>{
    clk.innerHTML="clicked";
    clk.style.color="red";
})


var dbclk=document.querySelector("#dbclk")

dbclk.addEventListener("dblclick",()=>{
    dbclk.innerHTML="double clicked";
    dbclk.style.color="green";
})

var ove=document.querySelector("#ove")

ove.addEventListener("mouseover",()=>{
    ove.innerHTML="mouse currently over me";
    ove.style.color="cyan";
})


ove.addEventListener("mouseout",()=>{
    ove.innerHTML="mouse not over me";
    ove.style.color="violet";
})

