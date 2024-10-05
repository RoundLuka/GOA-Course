// ძირითადი კლასი და შვილები: შექმენი ძირითადი კლასი Animal, რომელსაც ექნება name და age თვისებები და მეთოდი speak(), რომელიც გამოაქვეყნებს ტექსტს: "This animal makes a sound." შემდეგ შექმენი ორი შვილკლასი Dog და Cat, რომლებიც მემკვიდრეობით მიიღებენ Animal-ს და გააფართოვებენ speak() მეთოდს ისე, რომ Dog კლასი გამოაქვეყნებს "Bark!" და Cat - "Meow!".

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    
    speak() {
        console.log("This animal makes a sound.");
    };
}

class Dog extends Animal {
    speak () {
        console.log("Bark!");
    };
};

class Cat extends Animal {
    speak () {
        console.log("Meow!");
    }
};