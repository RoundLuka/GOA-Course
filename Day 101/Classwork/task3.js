// მემკვიდრეობის გამოყენება კონსტრუქტორის მეშვეობით: შექმენი კლასი Shape, რომელსაც ექნება კონსტრუქტორი, რომელიც იღებს ორ პარამეტრს: name და sides. შემდეგ შექმენი შვილი კლასი Triangle, რომელიც მემკვიდრეობით მიიღებს Shape-ს, დაამატებს ახალ თვისებას base და height და შექმნის მეთოდს calculateArea(), რომელიც გამოთვლის სამკუთხედის ფართობს.

class Shape {
    constructor(name, sides) {
        this.name = name;
        this.sides = sides;
    };
};

class Triangle extends Shape {
    constructor(name, sides, base, height) {
        super(name, sides);
        this.base = base;
        this.height = height;
    };

    calculateArea () {
        const area = (base * height) / 2;
        console.log(`${this.name} triangle area is ` + area);
    };
};