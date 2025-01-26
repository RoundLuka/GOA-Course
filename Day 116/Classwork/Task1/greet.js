const greet = (name) => {
    console.log(`Hello, ${name}`);
};

const calculateAverage = (arr) => {
    let sum = 0;
    const arrLength = arr.length;
    for(let i = 0; i < arrLength; i++){
        sum += arr[i];
    };
    return sum / arrLength;
}

const firstName = "Luka";


// module.exports = {greet, firstName};
module.exports = {greet, firstName, calculateAverage};