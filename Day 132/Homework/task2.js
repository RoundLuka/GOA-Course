// 2) გადაიმეორეთ JS საბაზისოები და EcmaScript6 მთლიანად. აუცილებლად გაიხსენეთ მეთოდები: map, filter, reduce, forEach. 
// თითოეულზე გააკეთეთ 1 მაგალითი და გადახედეთ თეორიას: https://javascript.info/arrow-functions-basics (გადავხედე)

// map
const numbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];

numbers.map((number, index) => {
    doubledNumbers.push(number * 2)
});

console.log(doubledNumbers);

// filter

const numbers1 = [10, 15, 20, 25, 30];

console.log(numbers1.filter((number) => {
    return number >= 20;
}));

// reduce

const numbers2 = [1, 2, 3, 4, 5];

const sum = numbers2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

console.log(sum)

const fruits = ['apple', 'banana', 'cherry']

fruits.forEach(fruit => {
    console.log(fruit);
});