//Method overriding happens when the child class method has a definition for one of its super class method

class Parent{
    phone(){
        console.log("note 10 pro");
    }
}

class Child extends Parent{
     phone(){
         console.log("iphone13");
         //if parent fn is needed use super keyword
         super.phone()

     }
}


var ch=new Child();
ch.phone()