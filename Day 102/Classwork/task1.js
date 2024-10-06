// 1. Summing Unique Values
// Create a Map where each string is associated with its length. Add several strings to the Map and then sum up all unique lengths.

const wordLengths = new Map([
    ["luka", 4],
    ["ana", 3],
    ["lua", 3],
    ["luka", 4]
]);

let wordLens = new Set(wordLengths);

console.log(wordLens);

// 2. Creating a Map of Objects by ID
// Create a few objects containing id and name properties. Use a Map to store each object by its id.

function Person (name, id) {
    this.name = name;
    this.id = id;
}

const Luka = new Person ("Luka", 123);
const Anna = new Person ("Anna", 123);

const people = new Map();

people.set([Luka.id, Luka.name]);
people.set([Anna.id, Anna.name]);

// 3. Check for Required Value in Map
// Create a Map that stores names as keys and ages as values. Write a function that takes a name as input and checks if it exists in the Map.

// const people = new Map(
//     ["Luka", 16],
//     ["Anna", 18],
// );

// function containChecker(name){

// };