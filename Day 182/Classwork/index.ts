enum Directions {
    North,
    South,
    East,
    West
}

console.log(Directions.East)

enum Elements {
    Water = "Luka",
    Earth = "Luka123"
}

const me = {
    firstName: "Luka"
}

// already error, can't assign number to a string variable
// me.firstName = 17;




enum Character {
    main = "Luka",
    side = "Gio",
    protagonist = "Data"
}

// const person: {firstname: string, age: number} = {firstname: Character.main, age: 18, lastname: "Gurgenidze"}

// const me = {friend: {string}} = {Character.main}

// Type Alias
type MyNumber = number;

let number3: MyNumber = 3;


type player = {
    firstName: Character,
    age: number
}

const player5: player = {firstName: Character.main, age: 20}
const player6: player = {firstName: Character.side, age: 25}

type funcType = (num1: number, num2: number) => number;

const myFunc: funcType = function(num1, num2) {
    return num1 + num2;
}

const numbers: Array<number> = [1, 2]

type User<T> = {
    firstName: T,
    lastName: T,
    age: number
}


const luka: User<string> = {
    firstName: "Luka",
    lastName: "Gurgenidze",
    age: 5
}


let ID1: string | number = 5; // valid
let ID2: string | number = "Luka"; // valid
// let ID: string | number = true; // error

const someFunc = (id: string | number) => {
    if(typeof id === "string") {
        return id.toLowerCase();
    }

    return id
}

