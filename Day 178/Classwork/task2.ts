// 1. დააბრუნე ორჯერ დიდი რიცხვი
//    - დაწერე ფუნქცია, რომელიც მიიღებს ერთ `number` ტიპის პარამეტრს და დააბრუნებს ამ რიცხვის ორჯერ მეტ მნიშვნელობას.

function doubleNumber(givenNum: number) {

    return givenNum * 2
}

console.log(doubleNumber(5))

// 2. სტრინგის მოკლე ვერსია
//    - დაწერე ფუნქცია, რომელიც მიიღებს `string` ტიპის პარამეტრს და დააბრუნებს მხოლოდ პირველ 5 სიმბოლოს.  
//    *(თუ სტრინგი 5-ზე ნაკლებია, დააბრუნე როგორც არის.)*

function shortenString(word: string) {
    if(word.length < 5) {
        return word
    }
    return word.slice(0, 6)
}

console.log(shortenString("Luka"))
console.log(shortenString("Hello World"))

// 3. ამოწმებს რიცხვი ლუწია თუ კენტი 
//    - დაწერე ფუნქცია, რომელიც მიიღებს `number`-ს და დააბრუნებს `"ლუწია"` ან `"კენტია"` სტრინგს.

function evenOrOdd(givenNum: number) {
    if(givenNum % 2 === 0) {
        return "Even"
    }
    return "Odd"
}

console.log(evenOrOdd(2))
console.log(evenOrOdd(3))


// 4. ნულების მასივის გენერირება
//    - დაწერე ფუნქცია, რომელიც მიიღებს `length: number` პარამეტრს და დააბრუნებს მასივს, რომელშიც მხოლოდ `0`-ებია ამ სიგრძით.

function zerosLength(length: number) {
    let zeroArr = [];
    for(let i = 0; i < length; i++) {
        zeroArr.push(0)
    }
    return zeroArr
}

console.log(zerosLength(5))