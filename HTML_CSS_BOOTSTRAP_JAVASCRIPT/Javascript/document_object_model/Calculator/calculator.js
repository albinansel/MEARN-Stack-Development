// function displayBox(num){
//     var inputBox=document.querySelector("#inpt")
//     inputBox.value+=num;
// }

function displayBox(num){
    inpt.value+=num;
}

function evaluateExpression(){
        inpt.value=eval(inpt.value)
}

function clearBox(){
    inpt.value=""
}

function cancelElement(){
    inpt.value=inpt.value.slice(0,-1)
}