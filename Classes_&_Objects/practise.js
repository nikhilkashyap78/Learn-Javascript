let data = "Hello from parent";

class user{
    constructor(name, email){ 
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ",data); //accessing data from parent class
    }
}

let student1 = new user("nik", "asd@gmal.com"); //creating object of class user
let student2 = new user("soro", "dfg@gmail.com");

