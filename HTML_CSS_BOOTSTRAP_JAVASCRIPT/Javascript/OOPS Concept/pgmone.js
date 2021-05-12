class Employee{

    setEmp(eid,ename,desig,salary){
        this.eid=eid
        this.ename=ename
        this.desig=desig
        this.salary=salary
    }

    printEmp(){
        console.log("Eid " + this.eid);
        console.log("name " + this.ename);
        console.log("designation " + this.desig);
        console.log("salary " + this.salary);
    }
}
var obj1=new Employee()
obj1.setEmp(100,"ajay","developer",25000)
obj1.printEmp()
