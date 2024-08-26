// 4) შექმენით ფუნქცია სახელად manualIndexOf რომელსაც გადაეცემა მნიშნელობა და სია, 
// თქვენი დავალებაა ფუნქციიდან დააბრუნოთ ნაპოვნი მნბიშნელობის ინდექსი, 
// თუ გადმოცემული მნიშნელობა სიაში არ მოიძებნა დააბრუნეთ -1

function manualIndexOf(arr,value){
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}

console.log(manualIndexOf(["Apple",1,6,8,"Luka",5,7,1],"Luka"))