// debbuged following code:

// const numbers = [1,2,3,4,5];

// const dobuledNumbers = numbers.map(number => number * 2);

const manualMap = (arr, func) => {
    const result = [];

    for(let i = 0; i < arr.length; i++){
        result.push(func(arr[i]));
    }

    return result;
}

// const dobuledNumbersManual = manualMap(numbers, number => number * 2);

// const names = ['John','Jane','Mike'];

// const upperNames = names.map((name) => {
//     return name.toUpperCase()
// })

// const numbers = [0,1,2,3,4,5,6,7,8,9];

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers); // Output 0 2 4 6 8

// const manulFilter = (arr, func) => {
//     const result = [];

//     for(let i = 0;i < arr.length; i++){
//         if(func(arr[i])){
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

