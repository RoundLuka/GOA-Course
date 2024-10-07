// 1) შექმენით reduce მეთოდის კლონი, იქონიეთ რიცხვების მასივი, 
// ჯერ გამოიყენეთ თვითონ  reduce მეთოდი და ნახეთ როგორ  მუშაობს 
// (გაიგეთ რიხცვთა ჯამი, ნამრავლი) შემდეგ კი შექმენით მისი კლონი

const numbers = [1,2,3,4,5,6,7,8,9,10];

const sum = numbers.reduce((acc, cur) => {
    return acc + cur
}, 10);

console.log(sum);

const product = numbers.reduce((acc, cur) => {
    return acc * cur
}, 10)

console.log(product);


const manualReduce = (arr, func, startingValue = 0) => {
    let acc = startingValue;

    for(const val of arr){
        acc = func(acc,val);
    }
    return acc;
}

console.log(manualReduce(numbers, (acc, cur) => acc + cur, 10));

console.log(manualReduce(numbers, (acc, cur) => acc * cur, 10));