// 5) შექმენით ფუნქცია სახელად manualReverse რომესლაც გადმოეცემა სია, 
// და უნდა დააბრუნოთ შემოტრიალებული ვერსია სიის

function manualReverse(array){
    let resArr = new Array(array.length);
    for(let i = -1; i !== (-array.length); i--){
        resArr.push(array[i]);
    }
    return resArr;
}

console.log(manualReverse([1,2,3,4,5,6,7]))