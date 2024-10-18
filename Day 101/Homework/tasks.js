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
        this.price = price;
    }

    set price (price) {
        if(price > 0) {
            this._price = price;
        } else {
            console.log("Price can't be negative");
        };
    };

    get price () {
        return this._price;
    }
};

let product1 = new Product("Laptop", 1250);

console.log(product1.price);

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
    constructor(name, age, studentID) {
        super(Person);
        this.studentID = studentID;
    }
    getDetails(){
        super.getDetails();
        console.log(this.studentID);
    }
};

const person1 = new Person("Luka", 16);
person1.getDetails();

const student1 = new Person("Luka", 16, 1234);
student1.getDetails();


// 7. Privileged მეთოდები: შექმენი კლასი `BankAccount`, რომელსაც ექნება დაცული (private) თვისება `_balance`. დაამატე მეთოდი `deposit(amount)` ბალანსის დასამატებლად და `withdraw(amount)` ფულის ამოსაღებად. Had already completed this

class BankAccount {
    _balance

    constructor(balance){
        this._balance = balance;
    }

    deposit (amount) {
        if(amount > 0) {
            this._balance += amount;
            console.log(`Successfully deposited ${amount} to account`);
        } else {
            console.log("Deposit failed: invalid amount");
        }
    }

    withdraw (amount) {
        if(amount > this._balance){
            console.log("Insufficent funds");
        } else {
            if(amount > 0) {
                this._balance -= amount;
                console.log(`${amount} successfully withdrawed from account`)
            } 
            else {
                console.log("Withdrawal failed: invalid amount");
            };
        };
    };
}

const userAccount = new BankAccount(100);
userAccount.deposit(100);
userAccount.withdraw(25);

userAccount.checkBalance;

userAccount.withdraw(-150);
userAccount.deposit(-50);
userAccount.withdraw(1000);

// 8. Protected თვისებები და მემკვიდრეობა: შექმენი კლასი `Appliance`, რომელიც დაცულ (protected) თვისებად შეინახავს `power`-ს. მემკვიდრეობით მიიღე `WashingMachine` კლასი, რომელიც `Appliance`-ის თვისებებს გამოიყენებს, და დაამატე დამატებითი თვისებები და მეთოდები.

class Appliance {
    _power;
    constructor(power) {
        this._power = power;
    };
}

class WashingMachine extends Appliance {
    
    constructor(power, capacity) {
        super(power);
        this.capacity = capacity;
        this._on = false;
    };

    start() {
        if(!this._on) {
            console.log(`Washing machine has started, its capacity is ${this.capacity}`);
        } else {
            console.log(`Washing machine has already started, its capacity is ${this.capacity}`);
        }
    }
    stop() {
        if(_on) {
            console.log(`Washing machine has stopped`);
        } else {
            console.log(`Washing machine hasn't started`);
        }

    }
};

const washingMachine1 = new WashingMachine(120, 200);
washingMachine1.start();
WashingMachine.stop;

// 9. **Static თვისებები და მეთოდები**: შექმენი კლასი `Counter`, რომელსაც ექნება სტატიკური თვისება `count` და სტატიკური მეთოდი `increment()`, რომელიც `count`-ს 1-ით გაზრდის.
class Counter {
    static count = 0;

    static Increment() {
        Counter.count += 1;
    }
};

console.log(Counter.count);
Counter.Increment();
Counter.Increment();
Counter.Increment();
console.log(Counter.count);

// 10. **კლასების მასივი**: შექმენი კლასი `Book` და შექმენი ამ კლასის რამდენიმე ობიექტი მასივში. შემდეგ გამოიყენე `forEach()` რათა ყველა წიგნის სათაური დაბეჭდო.

class Book {
    constructor(title) {
        this.title = title;
    }
}

let books = [new Book("ivanhoe"), new Book("Encicolopyedia")];

books.forEach((book) => {
    console.log(book.title);
});

// ### Maps-ის შესახებ (10 დავალება):

// 1. **Map-ის ინიციალიზაცია მონაცემებით**: შექმენი `Map`, რომელიც ინახავს სამ ქალაქს და მათ მოსახლეობას.

const Cities = new Map([
    ["Tbilisi", 1000000],
    ["Kutaisi", 20000],
    ["Tokyo", 14000000]
    ]);

// 2. **Map-ის ელემენტის განახლება**: იმავე `Map`-ში, რაც წინა დავალებაში შექმენი, განაახლე ერთი ქალაქის მოსახლეობა ახალი მნიშვნელობით.

Cities.set["Tbilisi", 1100000];
console.log(Cities);

// 3. **Map-ის `for...of` ციკლი**: შექმენი `Map`, რომელიც ინახავს ვალუტის კოდებს და მათ სახელებს (მაგ., "USD" => "Dollar"). გამოიყენე `for...of` ციკლი, რათა თითოეული წყვილი გამო

let codes = new Map([
    ["USD", "Dollar"],
    ["UST", "Luna"],
    ["EU", "EURO"],
    ["GEL", "Georgian Lari"]
]);

for(const code of codes) {
    console.log(code);
};

// 4. **მრავალ Map-ის გაერთიანება**: შექმენი ორი `Map`. პირველი `Map` შეიცავდეს პროდუქტებს და მათ ფასებს, ხოლო მეორე `Map` - პროდუქტებს და მათი რაოდენობებს. გამოიყენე `forEach()` მეთოდი, რათა ახალი `Map` შექმნა, რომელიც ინახავს თითოეული პროდუქტის მთლიან ფასს (ფასი * რაოდენობა).

let products = new Map([
    ["Office Chair", 600],
    ["Laptop", 1200],
]);

let productAmount = new Map([
    ["Office Chair", 30],
    ["Laptop", 20],
]);

let totalPrices = new Map()

products.forEach((price, product) => {
    const amount = productAmount.get(product);
    const totalValue = price * amount;
    totalPrices.set(product, totalValue);
});

console.log(totalPrices);

// 6. **Map-ის ელემენტების დათვლა**: შექმენი `Map`, რომელიც ინახავს სხვადასხვა კომპიუტერული თამაშის დასახელებებს და მათი რეიტინგებს. გამოიყენე `size` თვისება, რათა დაადგინო რამდენი თამაშია `Map`-ში.

const games = new Map([
    ["game1", 80],
    ["game2", 1]
]);

console.log(games.size);

// 7. **თითოეული ელემენტის წაშლა Map-იდან**: შექმენი `Map` სამი სხვადასხვა პროდუქტის დასახელებით და ფასით. შემდეგ წაშალე თითოეული ელემენტი `delete()` მეთოდის გამოყენებით და დაბეჭდე შეტყობინება, რომ პროდუქტი წაიშალა.

let products2 = new Map([
    ["Apple", 10],
    ["Grapes", 20],
    ["Bread", 5]
]);

products2.forEach((price, product) => {
    products.delete(product);
    console.log(`${product} has been deleted from map`);
});

// 8. **Map და მასივის გარდაქმნა**: შექმენი `Map`, რომელიც ინახავს სპორტის სახეობებს და მათთვის საჭირო მოთამაშეების რაოდენობას. გამოიყენე `Array.from()` და გარდაქმენი ეს `Map` მასივად.

const sports = new Map([
    ["Football", 11],
    ["Basketball", 5]
]);

Array.from(sports);

// 9. **Map-ის ძიება მნიშვნელობებით**: შექმენი `Map`, რომელიც ინახავს ცხოველების დასახელებებს და მათ საცხოვრებელ გარემოს (მაგ., "Lion" => "Savannah"). მოძებნე ყველა ცხოველი, რომელიც ცხოვრობს გარკვეულ გარემოში (მაგალითად, "Savannah").

const animalEnvironment = new Map([
    ["Lion", "Savannah"],
    ["Ape", "Jungles"],
    ["Zebra", "Savannah"]
]);

animalEnvironment.forEach((place, name) => {
    if(place === "Savannah") {
        console.log(name);
    };
});

// 10. **Map-ის დაგროვება Reduce-ით**: შექმენი `Map`, რომელიც ინახავს სტუდენტების დასახელებებს და მათ ქულებს. გამოიყენე `Array.from()` და `reduce()` მეთოდი, რათა ამ სტუდენტების საშუალო ქულა გამოთვალო.

let grades = new Map([
    ["Bob", 50],
    ["John", 70],
    ["Mike", 95]
]);

let averageScore = Array.from(grades.values()).reduce((acc, score) => acc + score, 0) / grades.size;

console.log(averageScore);

// 1. **კლასი `Map`-ით და მეთოდით**: შექმენი კლასი `Library`, რომელსაც ექნება `Map`, რომელიც ინახავს წიგნის სახელებს და ავტორებს. დაამატე მეთოდი `addBook(title, author)`, რომელიც დაამატებს ახალ წყვილს `Map`-ში.

class Library {
    constructor
}