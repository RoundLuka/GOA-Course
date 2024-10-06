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

let {address: {city, country}} = student;

console.log(`City: ${city}, country: ${country}`);

// 5. Default Values in Destructuring
// Create an object product with properties name and price. Destructure name 
// and category from the object, giving category a default value of "general".

let product = {
    name: "HyperXQuadcast",
    price: 300
};

let {name, category = "general"} = product;

// 6. Destructure from Function Parameters
// Write a function displayCar that takes an object with properties brand, model, and year as a parameter and logs them using destructuring.

let vehicle = {
    brand: brand,
    model: model,
    year: year
}

function displayCar(vehicle){
    
}