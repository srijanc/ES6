class GreetPerson{
    name: string;
    greet(){}

    constructor(name){
        this.name = name;
        console.log(this.name + " GreetPerson Constructor");
        
    }

    static staticMethod(){
        console.log("Static Method");
        return 27;
    }
}
// let gp = new GreetPerson("Srijan");

GreetPerson.staticMethod();

// console.log(gp.greet === GreetPerson.prototype.greet);

// Inheritance
class Employee extends GreetPerson{
    constructor(name){
        super(name);
        console.log(name + " Employee Constructor");
        
    }
}
let e = new Employee("Srijan")
console.log(Employee.staticMethod())