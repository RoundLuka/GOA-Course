// 1. Create an Object
// Create an object person with properties: name, age, and city. Log the object to the console.

const person = {
    name: "Luka",
    age: 16,
    city: "Tbilisi"
};

console.log(person);

// 2. Access Object Properties
// Given the person object, access and log the name and city properties.


console.log(`Person's name: ${person.name}, city: ${person.age}`);

// 3. Destructuring an Object
// Destructure the name and age properties from the person object and log them.

let {name, age} = person;

console.log(`My name is ${name}, my age is ${age}`);

// 4. Nested Object Destructuring
// Create an object student with a name, age, and a nested address object containing city and country. 
// Use destructuring to extract city and country from the address.

let student = {
    name: "Luka",
    age: 16,
    address: {
        city: "Tbilisi",
        country: "Georgia"
    }
};

const {address: {city, country}} = student;

console.log(`City: ${city}, country: ${country}`);

// 5. Default Values in Destructuring
// Create an object product with properties name and price. Destructure name 
// and category from the object, giving category a default value of "general".

let product = {
    productName: "HyperXQuadcast",
    price: 300
};

let {productName, category = "general"} = product;

// 6. Destructure from Function Parameters
// Write a function displayCar that takes an object with properties brand, model, and year as a parameter and logs them using destructuring.

let vehicle = {
    brand: "BMW",
    model: "Jeep",
    year: 2015
}

function displayCar(vehicle){
    const {brand, model, year} = vehicle;
    console.log(`Brand: ${brand}, model: ${model}, year: ${year}`);
};


// 7. Rest Operator with Objects
// Create an object book with properties title, author, year, and publisher. Use the rest operator to collect the year and publisher into a new object.

class book {
    constructor(title, author, year, publisher) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.publisher = publisher;
    };
};

const ivanhoe = new book("ivanhoe", "Sir Walter Scott", 1820, "Archibald Constable");

const {title, author} = ivanhoe;

console.log(`Title: ${title}, author: ${author}`);
console.log(`Year: ${year}, publisher: ${publisher}`);

// 8. Spread Operator with Objects
// Create two objects, user with properties name and age, and location with properties city and country. Merge them into a new object using the spread operator.

function person(name, age, city, country) {
    this.name = name;
    this.age = age;
    this.location = {
        city: city,
        country: country
    };
};

let Luka = new person("Bob",20, "Tbilisi", "Georgia");
let Anna = new person("John", 18, "Tbilisi", "Georgia");

const merged = {
    ...Luka,
    ...Anna
};

console.log(merged);

// 9. Rest Operator with Function Arguments
// Write a function sumNumbers that takes any number of arguments using the rest operator and returns the sum of the numbers.

function sumNumbers(...nums){
    let sum = 0;
    for(const num of nums){
        sum += num;
    };
    return sum;
};

console.log(sumNumbers(1,2,3,4,5));

// 10. Spread Operator with Arrays
// Create two arrays, numbers1 and numbers2. Use the spread operator to combine them into one array.

let numbers1 = [1,2,3,4,5];
let numbers2 = [6,7,8,9,10];

let combinedNumbers = [...numbers1, numbers2];

console.log(combinedNumbers);

