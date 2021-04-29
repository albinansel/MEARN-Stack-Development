function displayBox(num){
      var inputBox=document.querySelector("#inpt")
      inputBox.value+=num;
}

function evaluateExpression(){
    var res = inpt.value
    let op=eval(res)
    inpt.value=op
}

function clearBox(){
    inpt.value=("")
}

function cancelElement(){
    inpt.value=inpt.value.slice[0,-1]
}