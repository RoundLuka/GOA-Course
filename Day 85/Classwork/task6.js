// 6) შექმენით ფუნქცია სახელად manualSlice რომელსაც გადაეცემა პირველი 
// მასივი და ორი რიცხვი საწყისის ინდექსი და დასასრულის ინდექსი, თქვენი 
// დავალებაა გადმოცემული ინდექსიდან მეორე ინდექსამდე ჩამოაჭრათ სიას ნაწილი
// და დააბრუნოთ ფუნქციიდან გამოიყენეთ for ციკლი

function manualSlice(arr,start,end){
    let slicedArr = [];
    for(let i = start; i < end; i++){
        slicedArr.push(arr[i]);
    }
    return slicedArr;
}