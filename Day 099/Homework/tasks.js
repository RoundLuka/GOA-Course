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

class BankAccount {
    #balance

    constructor(balance){
        this.#balance = balance;
    }

    deposit (amount) {
        if(amount > 0) {
            this.#balance += amount;
            console.log(`Successfully deposited ${amount} to account`);
        } else {
            console.log("Deposit failed: invalid amount");
        }
    }

    withdraw (amount) {
        if(amount > this.#balance){
            console.log("Insufficent funds");
        } else {
            if(amount > 0) {
                this.#balance -= amount;
                console.log(`${amount} successfully withdrawed from account`)
            } 
            else {
                console.log("Withdrawal failed: invalid amount");
            };
        };
    };

    checkBalance() {
        return this.#balance;
    }
};

const userAccount = new BankAccount(100);
userAccount.deposit(200);
userAccount.withdraw(50);

userAccount.checkBalance();

userAccount.withdraw(-50);
userAccount.deposit(-50);
userAccount.withdraw(1000);


// 3. Static Methods and Properties
// Create a MathOperations class with a static method add() that adds two numbers. Also, define a static property PI representing the value of Pi.

class MathOperations {
    static add(num1, num2) {
        return num1 + num2;
    }
    static PI = Math.PI;
};

console.log(MathOperations.add(5, 10));
console.log(MathOperations.PI);

// 4. Use Getters and Setters
// Define a Rectangle class with properties width and height. Use a getter to calculate and return the area of the rectangle. Also, include a setter that ensures width and height are always positive numbers.

class Rectangle {
    constructor(width, height) {
        this.validLengths = {width, height}
    }
    get area(){
        return this.width * this.height;
    }
    set validLengths({width, height}){
        if(width > 0 && height > 0){
            this.width = width;
            this.height = height;
        } else {
            console.log("Invalid lengths, length of rectangle must be over zero")
        }
    };

};

let rectangle1 = new Rectangle(10, 15);

console.log(rectangle1.area);

let rectangle2 = new Rectangle(4,-5);
console.log(rectangle2.area);

// 5. Private Methods
// Create a User class where a private method validatePassword() checks the strength of the password. The method should only be used internally when setting a password.

class User {
    #pass;

    constructor(password) {
        this.setPassword(password);
    }
    #validatePassword(password) {
        return password.length >= 8;

    }
    setPassword(password) {
        if (this.#validatePassword(password)) {
            this.#pass = password;
            console.log("Password set successfully");
        } else {
            console.log("Password must contain at least 8 characters");
        }
    }
}

let user1 = new User("passCode123");

let user2 = new User("1234");

// 6. Private Properties with Getters and Setters
// Define a Book class where the title is public, but the number of pages is private. Implement getters and setters to access and modify the number of pages.

class Book {
    #pages;
    constructor(title, pages) {
        this.title = title;
        this.bookPages = pages;
    }

    set bookPages (pages) {
        this.#pages = pages;
    }
    get pageAmount () {
        return this.#pages;
    }
}

const ivanhoe = new Book("Ivanhoe", 300);
console.log(ivanhoe.title);
console.log(ivanhoe.pageAmount);


// 7. Static Method for Instance Counting
// Create a Player class where each time an instance is created, a static method getPlayerCount() keeps track of how many players have been created.

class Player {
    static playerCount = 0;

    constructor(name) {
        this.name = name;
        Player.playerCount += 1;
    }

    static getPlayerCount() {
        return Player.playerCount;
    }
};

let player1 = new Player("Bob");
let player2 = new Player("John");
console.log(Player.getPlayerCount());

// 8. Class Inheritance with Private Properties
// Create a Vehicle class with private properties like speed. Then, create a Bike subclass that can access public methods to modify or retrieve the speed.

class Vehicle {
    #speed;
    #horsePower;

    constructor (speed, horsePower) {
        this.#speed = speed;
        this.#horsePower = horsePower;
    };

    getSpeed() {
        return this.#speed;
    }

    getHorsePower () {
        return this.#horsePower;
    }
}

class Bike extends Vehicle {
    constructor(speed, horsePower, type) {
        super(speed, horsePower);
        this.type = type;
    }
}

let car1 = new Vehicle(120, 80);
console.log(car1.getSpeed());
console.log(car1.getHorsePower());


let bike1 = new Bike(30, 10, "Bike");
console.log(bike1.getSpeed());
console.log(bike1.getHorsePower());

// 9. Static Method for Comparison
// Define a Student class with a static method compareGrades(student1, student2) that compares the grades of two student instances.

class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    static compareGrades(student1, student2) {
        if(student1.grade > student2.grade) {
            console.log(`${student1.name}'s grade is higher then ${student2.name}'s`);
        } 
        else if(student1.grade === student2.grade) {
            console.log(`${student1.name} and ${student2.name}'s grades are equal`)
        }
        else {
            console.log(`${student2.name}'s grade is higher then ${student1.name}'s`);
        }
    };
};

let bob = new Student("Bob", 50);
let john = new Student("John", 70);

Student.compareGrades(bob, john);

// ვუყურე ამ გაკვეთილის ჩანაწერს თავიდან