// Double the Numbers (map)
// Create an array of numbers. Use map() to return a new array where each number is doubled.

const numArr = [0,1,2,3,4,5,6,7,8,9];

const newArr = numArr.map((num) => {
    return num * 2;
})

// Filter Even Numbers (filter)
// Given an array of numbers, use filter() to return a new array containing only the even numbers.

const onlyEven = numArr.filter((num) => {
    return num % 2 == 0;
})

// Square of Numbers (map)
// Create an array of numbers. Use map() to return a new array where each number is squared.

const squaredNums = numArr.map((num) => {
    return num * num;
})

// Extract Long Names (filter)
// Create an array of names. Use filter() to return a new array of names longer than 5 characters.

const names = ["Luka","Ana","Tamo","Tazo","Lia"];

const filteredNames = names.filter((name) => {
    return name.length > 5;
})

// Capitalize First Letter (map)
// Create an array of strings. Use map() to return a new array where the first letter of each string is capitalized.

const cappedNames = names.map((name) => {
    let end = name.slice(1,name.length);
    return name[0].toUpperCase + end;
})

// Sum All Numbers (forEach)
// Given an array of numbers, use forEach() to iterate through the array and find the sum of all numbers.

let numbersSum = 0;

numArr.forEach((num) => {
    numbersSum += num;
})

// Remove Short Words (filter)
// Create an array of words. Use filter() to return a new array containing only words that are longer than 3 characters.

const longerThen3 = names.filter((name) => {
    return name.length > 3;
})

// Add Prefix to Words (map)
// Create an array of words. Use map() to add the prefix "super" to each word and return a new array.

const prefixedWords = names.map((name) => {
    return `super ${name}`;
})

// Filter Odd Numbers (filter)
// Given an array of numbers, use filter() to return a new array containing only the odd numbers.

const oddNumbers = numArr.filter((num) => {
    return num % 2 == 1;
})

// Log Each Element (forEach)
// Create an array of numbers. Use forEach() to log each element of the array to the console.'

numArr.forEach((num) => {
    console.log(num);
})
