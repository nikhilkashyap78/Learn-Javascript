// A JS obj is entity having state and behavior (properties and methods).
// JS obj have special property called prototype.
// We can set prototype of an obj using __proto__ property.

// If obj & prototype have same method, obj method is called first.

const employee = {
    calTax1() {
        console.log("Tax is 10%");
    },

    // calTax2 : function() {
    //     console.log("Tax is 10%"); //other way of writing the above function
    // }
};

const nik = {
    salary: 100000,

};

nik.__proto__ = employee;