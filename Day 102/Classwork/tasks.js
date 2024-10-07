// 1. Summing Unique Values
// Create a Map where each string is associated with its length. Add several strings to the Map and then sum up all unique lengths.

const wordLengths = new Map([
    ["luka", 4],
    ["ana", 3],
    ["lua", 3],
    ["luka", 4]
]);

let wordLens = new Set(wordLengths.values());

let sum = 0;
for (let len of wordLens) {
    sum += len;
};

console.log(sum);

// 2. Creating a Map of Objects by ID
// Create a few objects containing id and name properties. Use a Map to store each object by its id.

function Person (name, id) {
    this.name = name;
    this.id = id;
}

const Luka = new Person ("Luka", 123);
const Anna = new Person ("Anna", 456);

const people = new Map();

people.set([Luka.id, Luka]);
people.set([Anna.id, Anna]);

// 3. Check for Required Value in Map
// Create a Map that stores names as keys and ages as values. Write a function that takes a name as input and checks if it exists in the Map.

const People = new Map(
    ["Luka", 16],
    ["Anna", 18],
);

function containChecker(name){
    if(People.has(name)) {
        return `${name} is in map`
    }
    else {
        return `${name} isn't in map`
    };
};

console.log(containChecker("Luka"));
console.log(containChecker("Giorgi"));

// 4. Updating Data in Map
// Create a Map containing products and their prices. Write a function that increases the price of a given product by 10%.

let myMap = new Map();

function addProduct(name, price){
    myMap.set(name, price);
    console.log(`Product ${name} added successfully`)
};

function increasePrice (map, product) {
    if(map.has(product)) {
        let currentPrice = map.get(product);
        let newPrice = currentPrice + (currentPrice * 0.1);
        map.set(product, newPrice);
    }
    else {
        console.log(`${product} doesn't exist in map`);
    };
};

addProduct("Apple", 5);
addProduct("Grapes", 10);
addProduct("Berry", 15);

increasePrice("Apple");
increasePrice("Grapes");
increasePrice("Berry");

// 5. Filtering Even Values from Map
// Create a Map with numeric key-value pairs. Write a function that returns only those pairs whose values are even.

let numbersMap = new Map([
    [2, 3],
    [5, 8],
    [1,9],
    [12,9],
    [12,8],
    [2,4]
]);

function onlyEven (map) {
    let evenMap = new Map();
    for(let [key, value] of map) {
        if(value % 2 === 0){
            evenMap.set(key, value);
        };
    };
    return evenMap;
};

const filteredMap = onlyEven(numbersMap);
console.log(filteredMap);

// 6. Removing Duplicates Using Set
// Write a function that takes an array of numbers and returns all unique numbers as a Set.

let numArr = [1,2,3,4,5,6,7,24,5,7,9];

function setUnique(arr){
    return new Set(arr);
};

console.log(setUnique(numArr));

// 7. Iterating Through Set Elements
// Create a Set containing several color names (strings). Use a loop to print each element to the console.

let colors = new Set(["Red", "Green", "Blue", "Yellow", "Purple"]);

for(const color of colors){
    console.log(color);
};

// 8. Finding Common Elements Between Two Sets
// Create two Sets with different elements. Write a function that finds and returns elements that exist in both Sets.

let Set1 = new Set([1,"Red",6,"Luka",16,178.6]);
let Set2 = new Set(["Luka", 16, 12, "Blue"]);

function commonElements (set1, set2) {
    let result = [];
    for(const element of set1) {
        if(set2.has(element)) {
            result.push(element);
        };
    };
    return result;
};

// 9. Union of Multiple Sets
// Create three Sets with various numbers. Write a function that combines all three Sets into one, removes duplicates, and returns a Set of unique elements.

let setOne = new Set([1,25,4,61,7,9,12]);
let setTwo = new Set([1,2,3,4,5,6,7]);
let setThree = new Set([1,25,8,42,68,32]);

function combineSets(set1,set2,set3){
    return new Set([set1, set2, set3]);
};

const combinedSet = combineSets(setOne, setTwo, setThree);
console.log(combinedSet);

// 10. Deleting Elements from Set
// Create a Set containing several animal names. Write a function that removes an animal from the Set based on the given name.

let animals = new Set(["Rat", "Mole", "Squirrel", "Hedgehog", "Fox", "Owl"]);

function removeAnimal(set, animal){
    if(set.has(animal)){
        set.delete(animal);
        console.log(`${animal} has been removed from ${set}`);
    } else {
        console.log(`${animal} can't be found in ${set}`);
    };
};

removeAnimal(animals, "Fox");
console.log(animals);