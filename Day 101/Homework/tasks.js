// 1. კლასის შექმნა და ინიციალიზაცია**: შექმენი კლასი `User`, რომელსაც ექნება თვისებები `name` და `email`. კონსტრუქტორის მეშვეობით ინიციალიზაცია გაუკეთე ამ თვისებებს და შექმენი რამდენიმე `User` ობიექტი.

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    };
    // 2. მეთოდის შექმნა და გამოძახება: დაამატე `User` კლასს მეთოდი `displayInfo()`, რომელიც კონსოლში დაბეჭდავს მომხმარებლის სახელს და ელფოსტას. შექმენი რამდენიმე `User` ობიექტი და გამოძახე ეს მეთოდი თითოეულზე.
    displayInfo() {
        console.log(`Name: ${this.name}, email: ${this.email}`);
    };
    // 3. სტატიკური მეთოდების გამოყენება: დაამატე `User` კლასს სტატიკური მეთოდი `compareUsers(user1, user2)`, რომელიც შეადარებს ორ მომხმარებელს მათი `email`-ის მიხედვით. სცადე ამ მეთოდის გამოძახება ორ `User` ობიექტზე.

    static compareUsers(user1, user2) {
        return user1.email === user2.email
    };
};

const user1 = new User("Luka", "luka123@gmail.com");
const user2 = new User("Anna", "anna123@mail.com");

user1.displayInfo();
user2.displayInfo();

console.log(User.compareUsers(user1, user2));

// 4. Getters და Setters: შექმენი კლასი `Product`, რომელსაც ექნება `name` და `price` თვისებები. გამოიყენე `get` და `set` accessors `price`-ისათვის, რათა დარწმუნდე, რომ ფასი მხოლოდ დადებითი მნიშვნელობაა.

class Product {
    constructor (name, price) {
        this.name = name;
        this.priceVal = price;
    }

    set priceVal (price) {
        if(price > 0) {
            this.price = price;
        } else {
            console.log("Price can't be negative");
        };
    };

    get checkPrice () {
        return this.price;
    }
};

let product1 = new Product("Laptop", 1250);

console.log(product1.checkPrice);

// 5. მემკვიდრეობა და კონსტრუქტორების მემკვიდრეობა: შექმენი მშობელი კლასი `Person` და შვილკლასი `Student`. `Person`-ს ექნება `name` და `age`, ხოლო `Student` დაამატებს `studentID` თვისებას. მემკვიდრეობისას გამოიძახე მშობელი კლასის კონსტრუქტორი `super()`-ით.

// 6. Method Overriding: იმავე `Person` და `Student` კლასებში, შექმენი მეთოდი `getDetails()`, რომელიც `Person` კლასში დაბეჭდავს მხოლოდ სახელს და ასაკს, ხოლო `Student`-ში ასევე სტუდენტის ID-ს. 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        console.log(this.name);
    }
};

class Student extends Person {
    constructor(name, age, StudentID) {
        super(Person);
        this.StudentID = StudentId;
    }
    getDetails(){
        super(this.getDetails);
        console.log(this.StudentID);
    }
};

const person1 = new Person("Luka", 16);
person1.getDetails();

const student1 = new Person("Luka", 16, 1234);
student1.getDetails();




