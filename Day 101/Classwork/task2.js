// მშობლის მეთოდის გამოყენება შვილიდან: შექმენი კლასი Vehicle, რომელსაც ექნება თვისებები make, model, და მეთოდი displayInfo(), რომელიც კონსოლში დაბეჭდავს მანქანის ინფორმაციას. შემდეგ შექმენი შვილი კლასი Car, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატებს თვისებას fuelType. გააფართოვე displayInfo() მეთოდი ისე, რომ ის გამოძახებულ იქნას მშობელი კლასიდან და შემდეგ დაემატოს ახალი ინფორმაცია fuelType-ზე.

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    };
    
    displayInfo () {
        console.log(`Make: ${this.make}, Model: ${this.model}`);
    };
};

class Car extends Vehicle {
    constructor(make, model, fuelType) {
        super(make, model);
        this.fuelType = fuelType;
    };
    displayInfo () {
        super.displayInfo();
        console.log("Fuel type: " + this.fuelType)
    };
};