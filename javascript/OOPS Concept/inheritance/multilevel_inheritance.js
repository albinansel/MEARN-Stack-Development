class Parent{
    m1(){
        console.log("inside parent");
    }
}

class Child1 extends Parent{
    m2(){
        console.log("inside child1");
    }
}

class Child2 extends Child1{
    m3(){
        console.log("inside child2");
    }
} 

var ch=new Child2()
ch.m3();
ch.m2();
ch.m1();

var ch2= new Child1() 
// ch2.m3();              //inheritance can be done in only one direction
ch2.m2();
ch2.m1();

var ch3= new Parent() 
// ch3.m3();
// ch3.m2();
ch3.m1();
