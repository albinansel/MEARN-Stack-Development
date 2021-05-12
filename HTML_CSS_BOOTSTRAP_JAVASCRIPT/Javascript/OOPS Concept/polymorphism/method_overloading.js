// Method overloading happens when the method has same name but different number of parameters

class Calculation {
    add() {
        console.log("no arg method");
    }
    add(num1) {
        console.log("single arg method");
    }
    add(num1,num2){
        console.log("two arg method");
    }
}

var calc=new Calculation()
calc.add(10,20);
calc.add(10);
calc.add();

// in javascript, it only executes the recently implemented method