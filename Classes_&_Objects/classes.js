// Class is a program-code template for creating objects.
// Those obj will have some state (variables) and behavior (function) inside it.

// Class is a blueprint for creating objects.

// class MyClass{
//     constructor(){...};
//     myMethod(){...};
// }

// let myObj = new MyClass();

class myCar{

    constructor(){
        console.log("Creating new obj");
        this.brand = "Audi";
    }

    start(){
        console.log("Car started");
    }
    stop(){
        console.log("Car stopped");
    }

    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new myCar(); //Constructor invoke
fortuner.setBrand("Frotuner");

let bmw = new myCar(); //Constructor invoke
bmw.setBrand("BMW");

let audi = new myCar("audi");
//Initialize brand in constructor itself.


//Constructor() 

// - It is a special method in class.
// - It is called when obj is created.
// - It is used to initialize obj.
// - It is called only once.
// - It is optional.
// Invoked using new keyword.

