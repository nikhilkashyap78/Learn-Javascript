// Inheritance is passing down properties and methods from one class to another child class.
// use "extend" keyword

class Praent{
    hello(){
        console.log("Hello from parent");
    }
}

class Child extends Praent{

}

let obj = new Child();

/////////////////////////////////////////////////////////

class Person{
    sleep(){
        console.log("Person is sleeping");
    }
    eat(){
        console.log("Person is eating");
    }
    code(){
        console.log("do notijng");
    }
}

class engineer extends Person{
    code(){
        console.log("Engineer is coding"); 
        //Overriding : same method in parent and child class
        // child class method is called  
    }
}

let nikObj = new engineer();

/////////////////////////////////////////////////////////////

// Super keyword: It is used to call parent class constructor
// It is used to call parent class method & properties.

