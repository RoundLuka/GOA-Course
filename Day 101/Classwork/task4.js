// მემკვიდრეობა და მრავალჯერადი გამართვა: შექმენი ძირითადი კლასი Appliance, რომელსაც ექნება თვისებები brand და power, და მეთოდი turnOn(), რომელიც კონსოლში დაბეჭდავს "The appliance is now on." შემდეგ შექმენი ორი შვილი კლასი WashingMachine და Microwave. WashingMachine დაამატებს მეთოდს washClothes(), ხოლო Microwave დაამატებს მეთოდს heatFood(). თითოეულ შვილკლასში შეამოწმე მშობლის turnOn() მეთოდის მუშაობა.

class Appliance {
    constructor(brand, power) {
        this.brand = brand;
        this.power = power;
    };

    turnOn() {
        console.log("The appliance is now on.");
    };
};

class WashingMachine extends Appliance {
    constructor(name, brand) {
        super(name, brand);
    };
    
    washClothes () {
        this.turnOn();
    };
};

class Microwave extends Appliance {
    constructor(name, brand) {
        super(name, brand);
    };
    
    heatFood () {
        this.turnOn();
    };
};