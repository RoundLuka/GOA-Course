// 1. Create a Class with Public Properties
// Define a Car class with public properties make and model. Create an instance and access these properties.

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    };
};

const BMWJeep = new Car("BMW", "Jeep");

console.log(BMWJeep.make);
console.log(BMWJeep.model);

console.log(BMWJeep);

// 2. Use Private Properties
// Define a BankAccount class where balance is a private property. Implement a public method to deposit and withdraw money from the account.